import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    body{
        font-family: Arial, Helvetica, sans-serif;
        /* background-color: #F5F5F5; */
    }
    button {
        cursor: pointer;
    }
`;
