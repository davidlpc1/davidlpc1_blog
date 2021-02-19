/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 :root {
    --primary: #fff62d;
    --secondary:#394679;
  }
  * {
    font-family: sans-serif;
    color: #999;
    box-sizing: border-box;
  }
  
  html,
  body {
    height:100%;
    margin: 0;
    padding: 0;
  }
  body {
    padding-left: 16px;
    padding-right: 16px;
    max-width: 700px;
    margin: auto;
    background-color: var(--secondary);
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  a {
    color: var(--primary);
  }
  button,
  a {
    transition: opacity .3s;
    &:focus,
    &:hover {
      opacity: .5;
    }
  }
`;

const theme = {
  colors: {
    primary: '#fff62d',
    secondary: '#394679',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
