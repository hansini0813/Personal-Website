import { createGlobalStyle } from 'styled-components';
import variables from './variables';
import fonts from './fonts'; 

const GlobalStyle = createGlobalStyle`
    ${variables};
    ${fonts}

    html, body {
        margin: 0;
        padding: 0;
        height: 100%;  /* Ensure the body takes up the full height of the viewport */
        background-color: var(--dark-maroon);  /* Use a background color defined in variables */
        background-size: cover;  /* Ensures background image (if any) covers the entire page */
        background-repeat: no-repeat;  /* Prevents repetition of background image */
        scroll-behavior: smooth;
    }

    #root, #app {
        height: 100%;  /* Make sure the root container takes full height */
      }
`;
export default GlobalStyle;