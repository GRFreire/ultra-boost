import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior:smooth
  }

  body {
    background: ${props => props.theme.light.background};
    color: ${props => props.theme.light.text};
    font: 400 62.5% Roboto, sans-serif;
  }
`
