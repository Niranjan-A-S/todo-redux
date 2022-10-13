import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    body{
        font-family: Arial, Helvetica, sans-serif;
        height: 100%;
        background-color: #F5F5F5;
        position: relative;
    }
    button {
        cursor: pointer;
    }
`;
