import * as React from "react"
import GlobalStyle from '../styles/GlobalStyle'; 
import Nav from '../components/nav';  // Import Nav from sections folder
import { createGlobalStyle } from 'styled-components';
import variables from '../styles/variables'; // Import your CSS variables
import Footer from "../components/footer/footer"; // Import the footer component
import HomePage from "./HomePage";
import Projects from '../components/sections/projects'


const GlobalStyles = createGlobalStyle`
  ${variables}  // Apply the variables globally
`;

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />  {/* Inject global styles here */}
      <Nav/>
      <section id="about">
        <HomePage /> 
      </section>
      <section id="projects">
        <Projects /> 
      </section>
      <section id="contact">
        <Footer/> 
      </section>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
