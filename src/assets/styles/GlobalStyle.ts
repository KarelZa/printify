import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset};
    
    * {
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${(props) => props.theme.colors.background};
        font-family: 'Roboto', 'sans-serif';
        min-height: 100vh;
    }   


`;
