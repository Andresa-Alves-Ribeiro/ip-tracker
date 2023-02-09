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

    button{
        cursor:pointer;
    }

    body{
        height:100vh;
        width:100%;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
    }

    .leaflet-container{
        width:100%;
        height:100%;
        transition:1s;
    }

`;


export default GlobalStyle;