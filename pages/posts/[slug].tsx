/* eslint-disable react/prop-types */
import React from "react";
import { GetStaticProps, GetStaticPaths } from 'next'

import getAllPostsPaths from "../../scripts/blog/getAllPostsPaths";
import getOnePostContent from "../../scripts/blog/getOnePostContent";

import dynamic from 'next/dynamic';
const Head = dynamic(() => import("../../components/Head"));
const Back = dynamic(() => import("../../components/Back"));

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
      <Head>
        <title>{dataOfFile.metadata.title} | Davidlpc1</title>
      </Head>
      <Back href="/" />
      <h1>{dataOfFile.metadata.title}</h1>
      <p>Feito em {new Date(dataOfFile.metadata.date).toDateString()}</p>
      <div style={{ marginBottom: 20 }}>
        {/* eslint-disable-next-line jsx-a11y/html-has-lang */}
        {/*  eslint-disable-next-line react/no-danger */}
        <html
          dangerouslySetInnerHTML={{ __html: dataOfFile.content }}
          lang="pt-br"
          style={{ overflowX:"scroll" }}
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
