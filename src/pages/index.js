import * as React from "react"
import GlobalStyle from '../styles/GlobalStyle'; 
import Nav from '../components/nav';  // Import Nav from sections folder
import { createGlobalStyle } from 'styled-components';
import variables from '../styles/variables'; // Import your CSS variables
import Footer from "../components/footer/footer"; // Import the footer component
import HomePage from "./HomePage";
import Projects from '../components/sections/projects'
import Experiences from '../components/sections/experiences'
import Favourites from '../components/sections/favourites'


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
      <section id="experiences">
        <Experiences/>
      </section>
      <section id="projects">
        <Projects /> 
      </section>
      <section id="favourites">
        <Favourites /> 
      </section>
      <section id="contact">
        <Footer/> 
      </section>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
