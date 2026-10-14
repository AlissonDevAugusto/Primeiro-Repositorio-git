import { createGlobalStyle } from 'styled-components';

const globalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: "Poppins", sans-serif;
    }

    button, a {
        cursor: pointer;
    }

    html, body, #root {
        min-width: 0;
        overflow-x: hidden;
    }

    img {
        max-width: 100%;
    }
`

export default globalStyles;
