import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
        
    :root{
       --orange: #F2AE2F;
       --green: #83B200;
       --red: #F22222;
       --petroleumBlue: #4DB1B3;
       --white: #F2F2F2;
    }  
    
    body {
        margin: 0;
        padding: 0;
        font-family: 'Comfortaa';
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
