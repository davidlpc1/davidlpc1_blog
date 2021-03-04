/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */

import React from 'react';
import styled from 'styled-components';
import { GetStaticProps } from 'next'

import Link from '../components/Link';
import Subtitle from '../components/Subtitle';

import getAllPostsContent from '../scripts/blog/getAllPostsContent';
import Head from 'next/head';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
  margin-bottom: 32px;
  img {
    max-width: 50px;
    border-radius: 100%;
    margin-right: 16px;
    border: .2px solid var(--primary);
    transition: 250ms ease-in-out; 

    &:hover{
      transform: translateY(-.2rem);
    }
  }
  h1 {
    margin: 0;
  }
`;
const Container = styled.section``;
const Post = styled.article`
  a {
    font-weight: bold;
    text-decoration: none;
  }
`;

interface HomeProps {
  repos:[
    {
      repo:number;
      owner:number;
      description:number;
      language:number;
      stars:number;
    }
  ],
  posts: [
    {
      metadata:{
        title:string;
        date:string;
        excerpt:string;
        slug:string;
      };
      content:string;
    }
  ]
}

export default function Home({ repos, posts }:HomeProps) {
  return (
    <div>
      <Head>
        <title>Home | Davidlpc1</title>
      </Head>
      <HeaderContainer>
        <a target="_blank" href="https://github.com/davidlpc1" rel="noreferrer">
          <img src="https://github.com/davidlpc1.png" alt="Davidlpc1" />
        </a>
        <Link href="/about">
          <h1>
            {'Davi\'s'}
            {' '}
            Blog
          </h1>
        </Link>
      </HeaderContainer>

      <Container>
        <Subtitle>Posts</Subtitle>

        {posts.map((post) => (
          <Post key={post.metadata.title}>
            <h2>
              <Link href={`/posts/${post.metadata.slug}`}>{ post.metadata.title }</Link>
            </h2>

            <p>
              {post.metadata.excerpt}
            </p>
          </Post>
        ))}
      </Container>

      <Container>
        <Subtitle>Repositórios favoritos</Subtitle>

        {repos.map(({
          repo, owner, description, language, stars,
        }) => (
          <Post key={`${repo}`}>
            <a target="_blank" href={`https://github.com/${owner}/${repo}`} rel="noreferrer">{repo}</a>

            <p>
              {description
                || `Projeto feito com ${language} e tem ${stars} estrela(s)`}
            </p>
          </Post>
        ))}
      </Container>
    </div>
  );
}

export const getStaticProps : GetStaticProps = async() => {
  const repos = await fetch(
    'https://gh-pinned-repos.now.sh/?username=davidlpc1',
  ).then((res) => res.json());

  const posts = getAllPostsContent();

  return {
    props: {
      repos,
      posts,
    },
  };
}
