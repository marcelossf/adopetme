import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
        
    :root{
       
    }
    
    body {
        margin: 0;
        padding: 0;
    }

    button {
        cursor: pointer;
        &:hover {
        }
    }

    li,ul {
        list-style: none;
    }
`;

export default GlobalStyle;
