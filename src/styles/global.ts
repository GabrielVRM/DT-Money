import { createGlobalStyle } from 'styled-components'
import background from '../assets/background.png'
export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
  }
  body {
    background-image: url(${background});
    background-color:  #060B26 ;
     background-size: cover;

    color: ${(props) => props.theme['gray-100']};
    -webkit-font-smoothing: antialiased;

    height: 100vh;
  }
  body, input, textarea, button {
    font: 400 1rem Roboto, sans-serif;
  }
`
