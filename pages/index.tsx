/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GetStaticProps } from "next";

import getAllPostsContent from "../scripts/blog/getAllPostsContent";
import getAllFunRoutes from "../scripts/fun/getAllFunRoutes";

import Confetti from "react-canvas-confetti";

import dynamic from "next/dynamic";
const Head = dynamic(() => import("../components/Head"));
const Link = dynamic(() => import("../components/Link"));
const Subtitle = dynamic(() => import("../components/Subtitle"));

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
  margin-bottom: 32px;
  img {
    /* max-width: 50px; */
    border-radius: 100%;
    margin-right: 16px;
    border: 0.2px solid var(--primary);
    transition: 250ms ease-in-out;

    &:hover {
      transform: translateY(-0.2rem);
    }
  }
  h1 {
    margin: 0;
  }
`;
const Container = styled.section``;
const Post = styled.li`
  list-style: none;
  a {
    font-weight: bold;
    text-decoration: none;
    text-transform: capitalize;
  }
  p {
    color: #eeeeee;
  }
`;

interface HomeProps {
  repos: [
    {
      repo: number;
      owner: number;
      description: number;
      language: number;
      stars: number;
    }
  ];
  posts: [
    {
      metadata: {
        title: string;
        date: string;
        excerpt: string;
        slug: string;
      };
      content: string;
    }
  ];
  funRoutes: [{ filename: string }];
}

export default function Home({ repos, posts, funRoutes }: HomeProps) {
  const [fire, setFire] = useState(false);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    setFire(true);
    setTimeout(() => {
      setReset(true);
      setFire(false);
    }, 4 * 1000);
  }, []);

  return (
    <div>
      <Head>
        <title>Home | Davidlpc1</title>
      </Head>
      <Confetti
        style={{ position: "fixed", width: "100%", height: "100%", zIndex: -1 ,top:0,left:0}}
        fire={fire}
        reset={reset}
        particleCount={350}
      />
      <HeaderContainer>
        <a target="_blank" href="https://github.com/davidlpc1" rel="noreferrer">
          <img
            width={50}
            height={50}
            src="/images/davidlpc1.jfif"
            alt="Davidlpc1"
          />
        </a>
        <Link href="/about">
          <h1>{"Davi's"} Blog</h1>
        </Link>
      </HeaderContainer>

      <Container>
        <Subtitle>Posts</Subtitle>

        <ul style={{ padding: 0 }}>
          {posts.map((post) => (
            <Post title={post.metadata.title} key={post.metadata.title}>
              <h2>
                <Link href={`/posts/${post.metadata.slug}`}>
                  {post.metadata.title}
                </Link>
              </h2>

              <p>{post.metadata.excerpt}</p>
            </Post>
          ))}
        </ul>
      </Container>

      <Container>
        <Subtitle>Fun Routes</Subtitle>

        <ul style={{ padding: 0 }}>
          {funRoutes.map(({ filename }) => (
            <Post title={filename} key={filename}>
              <h2>
                <Link href={`/fun/${filename}`}>{filename}</Link>
              </h2>
            </Post>
          ))}
        </ul>
      </Container>

      <Container>
        <Subtitle>Repositórios favoritos</Subtitle>

        <ul style={{ padding: 0 }}>
          {repos.map(({ repo, owner, description, language, stars }) => (
            <Post title={String(repo)} key={`${repo}`}>
              <a
                target="_blank"
                href={`https://github.com/${owner}/${repo}`}
                rel="noreferrer"
              >
                {repo}
              </a>

              <p>
                {description ||
                  `Projeto feito com ${language} e tem ${stars} estrela(s)`}
              </p>
            </Post>
          ))}
        </ul>
      </Container>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const repos = await fetch(
    "https://gh-pinned-repos.egoist.sh/?username=davidlpc1"
  ).then((res) => res.json());

  const posts = getAllPostsContent();
  const funRoutes = getAllFunRoutes();

  return {
    props: {
      repos,
      posts,
      funRoutes,
    },
  };
};
