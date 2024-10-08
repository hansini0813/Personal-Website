import React, {useState, useEffect} from 'react';
import { Link } from 'gatsby';
import { navLinks } from '../utils/config';
import styled from 'styled-components';

const StyledNav = styled.nav`
    position: fixed; /* Position it relative to the top-right corner */
    top: 40px; /* Adjust the top space */
    right: 50px; /* Adjust the right space */
    width: 100%;
    color: var(--lightest-pink); 
    counter-reset: item 0;
    font-size: var(--fz-xs); 
    font-family: 'Jost'; 
    padding: 1rem 2rem; 
    transition: top 0.3s ease-in-out; /* Smooth transition for hiding and showing */

    &.hidden {
      top: -100px; /* Hide the navbar off-screen */
    }

`;

const StyledLinks = styled.div`
    display: flex; 
    justify-content: flex-end;
    align-items: center; 

    // adjusting nav bar to smaller devices
    @media (max-width: 768px) {
        display: none;
      }

    // Styling ordered lists 
      ol {
        display: flex;
        justify-content: flex-end;  // This aligns the links to the right
        padding: 0;
        margin: 0;
        list-style: none;

        // Styling list items
        li {
          margin: 0 5px;
          position: relative;
          font-size: var(--fs-xs);
    
          // Stlying anchor tags 
          a {
            padding: 10px;
            color: var(--lightest-pink); // Make the links light pink
            text-decoration: none; 
    
            &:before {
              margin-right: 5px;
              font-size: var(--fs-xs);
              text-align: right;
            }
          }
        }
      }

      .resume-button {
        margin-left: 15px;
        font-size: var(--fz-s);
        font-family: 'Jost'; 
        color: lightpink; /* Set text color to light pink */
        background-color: transparent; /* No background, change this if you want a filled box */
        border: 2px solid lightpink; /* Creates a rectangular border */
        padding: 10px 15px; /* Adjusts padding for the box shape */
        text-decoration: none; /* Removes the underline */
        border-radius: 5px; /* Adds slight rounding to the box edges */
      }
      
      .resume-button:hover {
        background-color: lightpink; /* Optional: adds a hover effect */
        color: white; /* Changes text color on hover */
      }

`;

const Nav = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop && scrollTop > 100) {
        setIsNavVisible(false); // Hide navbar when scrolling down
      } else {
        setIsNavVisible(true); // Show navbar when scrolling up
      }

      setLastScrollTop(scrollTop);
    };

    const handleMouseMove = (e) => {
      if (e.clientY < 50) {
        setIsNavVisible(true); // Show navbar when mouse is near the top
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [lastScrollTop]);

  const ResumeLink = (
    <a className="resume-button" href="/Resume_HansiniMirchandani.pdf" target="_blank" rel="noopener noreferrer">
      Resume
    </a>
  );
    return (
      <StyledNav className={isNavVisible ? '' : 'hidden'}>
        <StyledLinks>
          <ol>
            {navLinks &&
              navLinks.map(({ url, name }, i) => (
                <li key={i}>
                  <Link to={url}>{name}</Link>
                </li>
              ))}
          </ol>
          <div>{ResumeLink}</div>
        </StyledLinks>
      </StyledNav>
    );
  };

export default Nav;