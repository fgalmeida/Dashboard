import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -webkit-osx-font-smoothing: grayscale;

    &::before, &::after {
      box-sizing: inherit;
    }
  }
  body,
   #root {
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    overflow-x: hidden;
    font-family: 'Poppins', sans-serif;
    background: var(--background);
  }
  
  html {
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
  }


  button {
    cursor: pointer;
  }
`
