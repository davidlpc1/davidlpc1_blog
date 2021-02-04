/* eslint-disable react/prop-types */
import React from 'react';

import Link from '../../components/Link';

import getAllPostsPaths from '../../scripts/blog/getAllPostsPaths';
import getOnePostContent from '../../scripts/blog/getOnePostContent';

export default function Post({ dataOfFile }) {
  return (
    <div>
      <Link href="/">
        {'<--'}
        {' '}
      </Link>
      <h1>{ dataOfFile.metadata.title }</h1>
      <p>
        Feito em
        {' '}
        { dataOfFile.metadata.date }
      </p>
      <div>
        {/* eslint-disable-next-line jsx-a11y/html-has-lang */}
        {/*  eslint-disable-next-line react/no-danger */}
        <html dangerouslySetInnerHTML={{ __html: dataOfFile.content }} lang="pt-br" />
      </div>

    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostsPaths();

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const dataOfFile = getOnePostContent(params.slug);
  return {
    props: {
      dataOfFile,
    },
  };
}
