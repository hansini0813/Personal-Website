import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './HomePage.css';
import styled from 'styled-components';
import { Typewriter } from 'react-simple-typewriter';


const navDelay = 1000; // Adjust your delay value
const loaderDelay = 500; // Adjust your loader delay

const HomePage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const typerStrings = [
	"Software Engineer", 
	"Full Stack Developer", 
	"Web Developer", 
	"Student"
]

const colors = [
    '#ffe5ec', 
    '#ffc2d1', 
    '#ffb3c6', 
    '#ff8fab', 
    '#fb6f92'
]; // Array of pink colors


  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Hansini Mirchandani.</h2>;
  const three = <h3 className="big-heading">
        I'm a{' '}
        <span className="typer" style={{ color: colors[wordIndex % colors.length] }}>
        <Typewriter
          words={typerStrings} // Use your typerStrings array
          loop={5}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
          onType={(index) => setWordIndex(index)} // Update word index to change color
        />
      </span>

</h3>
  const four = (
    <p>
      I am a third-year student at the University of Toronto, studying Computer Science, Statistics, and Mathematics. I’m passionate about using technology to address real-world challenges and thrive on creating impactful solutions. Beyond my academic and technical pursuits, I am deeply committed to fostering diversity and inclusion in STEM, particularly for women. When I’m not immersed in coding, I find balance and inspiration through painting, which allows me to tap into my creative side and bring a fresh perspective to my work.
    </p>
  );

  const items = [one, two, three, four];

  return (
    <section className="homepage-section">
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
              <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </section>
  );
};

export default HomePage;
