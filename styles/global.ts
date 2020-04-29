import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    html {
        font-size: 62.5%;
    }
    body {
        background: ${(props) => props.theme.colors.color1};
        -webkit-font-smoothing: antialiased;
    }
    body, input, button {
        font-family: Questrial, sans-serif;
    }
    
    button {
        cursor: pointer;
    }
`;
