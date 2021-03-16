import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    font-size: 10px;
    margin: 0;
    font-family: 'Hind', sans-serif;
  }
`;

export default GlobalStyle;
