import CreatePostFile from '../../scripts/blog/createPostFile';
import { NextApiRequest, NextApiResponse } from 'next'

export default function createPost(request:NextApiRequest, response:NextApiResponse) {
  response.setHeader('Access-Control-Allow-Credentials', 1);
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  const reponseApi = CreatePostFile(JSON.parse(request.body));

  response.json(reponseApi);
}
