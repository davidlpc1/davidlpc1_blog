import React
// { useState } 
from 'react';

// import dynamic from 'next/dynamic';
// import MarkdownIt from 'markdown-it';
import 'react-markdown-editor-lite/lib/index.css';

import styled from 'styled-components';
import Subtitle from '../components/Subtitle';
// import Button from '../components/Button';
import Head from "../components/Head";

const Input = styled.input`
  display: block; 

  padding: 0.7rem;
  font-size: 0.8rem;

  border: 0;
  outline: 0;
  border-radius: 3px;

  background: var(--primary);
  color:var(--secondary);
`;

// const MdEditor = dynamic(() => import('react-markdown-editor-lite'), {
//   ssr: false,
// });

export default function Create() {
  // const [markdownOfNewPost, setMarkdownOfNewPost] = useState('');
  // const [titleOfNewPost, setTitleOfNewPost] = useState('');

  // const mdParser = new MarkdownIt({
  //   breaks: true,
  // });

  return (
    <>
      <Head>
        <title>Create a New Post | Davidlpc1</title>
      </Head>
      <Subtitle>Create a new Post</Subtitle>
      {/* <Input
        type="text"
        placeholder="Nome do post"
        maxLength={70}
        value={titleOfNewPost}
        onChange={(event) => setTitleOfNewPost(event.target.value)}
      />
      <MdEditor
        style={{ height: '500px', marginTop: 25 }}
        renderHTML={(text:string) => {
          setMarkdownOfNewPost(text);
          return mdParser.render(text);
        }}
      />
      <Button
        type="button"
        disabled={markdownOfNewPost.length === 0}
        onClick={() => {
          fetch('/api/create', {
            method: 'POST',
            body: JSON.stringify({
              markdown: markdownOfNewPost,
              title: titleOfNewPost,
            }),
          });
        }}
      >
        Criar
      </Button> */}
    </>
  );
}
