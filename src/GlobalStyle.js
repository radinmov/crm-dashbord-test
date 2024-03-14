import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body, button, input {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
body {
    background-color: #121212;
    margin: 0;
    color: #fff;
}
ul , ol {
    padding: 0;
    margin: 0;
    list-style: none;
}
*, *:after, *:before {
    box-sizing: border-box;
}
a {
    text-decoration: none;
}
`;