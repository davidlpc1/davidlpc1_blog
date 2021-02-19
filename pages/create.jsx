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
  const [markdownOfNewPost, setMarkdownOfNewPost] = React.useState();
  const mdParser = new MarkdownIt({
    breaks: true,
  });

  return (
    <>
      <Subtitle>Create a new Post</Subtitle>
      <MdEditor
        style={{ height: '500px', marginTop: 25 }}
        renderHTML={(text) => {
          console.log(markdownOfNewPost);
          setMarkdownOfNewPost(text);
          return mdParser.render(text);
        }}
      />
      <Footer />
    </>
  );
}
