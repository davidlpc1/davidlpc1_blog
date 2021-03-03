import getAllPostsPaths from '../../scripts/blog/getAllPostsPaths';
import getAllPostsContent from '../../scripts/blog/getAllPostsContent';
import { NextApiRequest, NextApiResponse } from 'next'

export default async function ListAllPosts(request:NextApiRequest, response:NextApiResponse) {
  const paths = getAllPostsPaths();
  const posts = getAllPostsContent();

  if (request.method === 'OPTIONS') {
    response.status(200).json({});
    return;
  }

  response.setHeader('Access-Control-Allow-Credentials', 1);
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader(
    'Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT',
  );

  response.json({ paths, posts });
}
