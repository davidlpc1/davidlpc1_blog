/* eslint-disable react/prop-types */
import React from "react";
import { GetStaticProps, GetStaticPaths } from 'next'

import Link from "../../components/Link";

import getAllPostsPaths from "../../scripts/blog/getAllPostsPaths";
import getOnePostContent from "../../scripts/blog/getOnePostContent";

interface PostProps {
  dataOfFile: {
    metadata: {
      title: string;
      date: string;
      excerpt: string;
      slug: string;
    };
    content: string;
  };
}

export default function Post({ dataOfFile }: PostProps) {
  return (
    <div>
      <Link href="/">{"<--"} </Link>
      <h1>{dataOfFile.metadata.title}</h1>
      <p>Feito em {dataOfFile.metadata.date}</p>
      <div style={{ marginBottom: 20 }}>
        {/* eslint-disable-next-line jsx-a11y/html-has-lang */}
        {/*  eslint-disable-next-line react/no-danger */}
        <html
          dangerouslySetInnerHTML={{ __html: dataOfFile.content }}
          lang="pt-br"
        />
      </div>
    </div>
  );
}

export const getStaticPaths : GetStaticPaths = async() => {
  const paths = getAllPostsPaths();

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps : GetStaticProps = async({ params }) => {
  const dataOfFile = getOnePostContent(params.slug);
  return {
    props: {
      dataOfFile,
    },
  };
}
