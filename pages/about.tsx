import Head from "../components/Head";
import React from 'react';
import styled from 'styled-components';

import Link from '../components/Link';
import Subtitle from '../components/Subtitle';

const List = styled.ul`
  list-style: none;
  padding:0 10px;

  a {
    font-weight: 500;
    text-decoration: none;
  }
`;

const ImageContainer = styled.div`
 padding:0 10px;
 display:flex;
 gap:10px;

 img{
  border: 0.01px dashed var(--primary);
 }
`;

export default function About() {
  return (
    <>
      <Head>
        <title>About | Davidlpc1</title>
      </Head>
      <h1>
        <Link href="/">Davi Lucas</Link>
      </h1>
      <Subtitle>About Me</Subtitle>

      <p style={{ paddingLeft: 10 }}>
        Tenho 14 anos e sou interessado por programação (Linhares, ES).
        <br />
        Sou um desenvolvedor web apaixonado também pelo mundo Back-end.
      </p>

      <Subtitle>Technologies</Subtitle>
      <List>
        <li>Front - End com HTML, CSS, JS, Bootstrap, ReactJS, NextJS, TailwindCSS</li>
        <li>Mobile com React Native</li>
        <li>Outras - C e Python</li>
      </List>

      <Subtitle>What i know and i am studying:</Subtitle>

      <ImageContainer>

        <img alt="Html" height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
        <img alt="Css" height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
        <img alt="Javascript" height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
        <img alt="React" height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />
        <img alt="NodeJS" height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />
        <img alt="My Sql" height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png" />
        <img alt="Git" height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />

      </ImageContainer>

      <Subtitle>Contact Me</Subtitle>
      <List>
        <li><a target="_blank" href="https://www.linkedin.com/in/davi-lucas-93abb71b3/" rel="noreferrer">Linkedin</a></li>
        <li><a target="_blank" href="mailto:davilucasdlcreator@gmail.com" rel="noreferrer">E-mail</a></li>
        <li><a target="_blank" href="https://instagram.com/davidlpc1" rel="noreferrer">Instagram</a></li>
        <li><a target="_blank" href="https://twitter.com/ProgramadorDavi" rel="noreferrer">Twitter</a></li>
      </List>
    </>
  );
}
