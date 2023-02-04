import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
        margin: 0;
        padding:0;
        box-sizing:border-box;
        outline:0;
        border:0;
        font-family: 'Rubik',sans-serif;
    }

    button {
        cursor: pointer;
    }
`

export default GlobalStyle