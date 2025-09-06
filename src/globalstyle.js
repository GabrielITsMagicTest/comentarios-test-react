import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto Mono", monospace, sans-serif;
        outline: none;
    }

    body {
        height: 100%;
        background: #3936C0;
        width: 100%;
    }
`

export default globalStyle;