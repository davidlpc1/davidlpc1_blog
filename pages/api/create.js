import CreatePostFile from '../../scripts/blog/createPostFile';

export default function createPost(request, response) {
  if (request.method === 'OPTIONS') {
    response.status(200).end();
    return;
  }

  response.setHeader('Access-Control-Allow-Credentials', true);
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  const reponseApi = CreatePostFile(JSON.parse(request.body));

  response.json(reponseApi);
}
