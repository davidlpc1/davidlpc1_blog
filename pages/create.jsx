import React from 'react';

import dynamic from 'next/dynamic';
import MarkdownIt from 'markdown-it';
import 'react-markdown-editor-lite/lib/index.css';

import Footer from '../components/Footer';
import Subtitle from '../components/Subtitle';

const MdEditor = dynamic(() => import('react-markdown-editor-lite'), {
  ssr: false,
});

export default function Create() {
  const [markdownOfNewPost, setMarkdownOfNewPost] = React.useState('');
  const [titleOfNewPost, setTitleOfNewPost] = React.useState('');

  const mdParser = new MarkdownIt({
    breaks: true,
  });

  return (
    <>
      <Subtitle>Create a new Post</Subtitle>
      <input
        style={{ display: 'block' }}
        type="text"
        placeholder="Nome do post"
        maxLength="70"
        value={titleOfNewPost}
        onChange={(event) => setTitleOfNewPost(event.target.value)}
      />
      <MdEditor
        style={{ height: '500px', marginTop: 25 }}
        renderHTML={(text) => {
          setMarkdownOfNewPost(text);
          return mdParser.render(text);
        }}
      />
      <button
        type="button"
        disabled={markdownOfNewPost.length === 0}
        onClick={() => {
          fetch('/api/create', {
            method: 'POST',
            body: JSON.stringify({ markdown: markdownOfNewPost, title: titleOfNewPost }),
          });
        }}
      >
        Criar
      </button>
      <Footer />
    </>
  );
}
