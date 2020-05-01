import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

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
    body, input, button, textarea {
        font-family: Poppins, sans-serif;
    }
    
    button {
        cursor: pointer;
    }
`;
