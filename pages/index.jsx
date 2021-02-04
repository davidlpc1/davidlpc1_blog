/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */

import React from 'react';
import styled from 'styled-components';

import Link from '../components/Link';
import Fotter from '../components/Footer';
import Subtitle from '../components/Subtitle';

import getAllPostsContent from '../scripts/blog/getAllPostsContent';
import getTheLastThreeInstagramPosts from '../scripts/blog/getTheLastThreeInstagramPosts';

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

export default function Home({ repos, posts, lastThreeInstagramPosts }) {
  return (
    <div>
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

      <Container>
        <Subtitle>Ultimos posts do instagram</Subtitle>

        {lastThreeInstagramPosts.map(({
          src,
        }) => (
          <img key={`instagramPost--${src}`} src={src} alt="Post do instagram" height={280} />
        ))}
      </Container>

      <Fotter />
    </div>
  );
}

export async function getStaticProps() {
  const repos = await fetch(
    'https://gh-pinned-repos.now.sh/?username=davidlpc1',
  ).then((res) => res.json());

  const posts = getAllPostsContent();
  const lastThreeInstagramPosts = await getTheLastThreeInstagramPosts();

  return {
    props: {
      repos,
      posts,
      lastThreeInstagramPosts,
    },
  };
}
