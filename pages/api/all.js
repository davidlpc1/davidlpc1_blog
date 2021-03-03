import getAllPostsPaths from '../../scripts/blog/getAllPostsPaths';
import getAllPostsContent from '../../scripts/blog/getAllPostsContent';

export default async function ListAllPosts(request, response) {
  const paths = getAllPostsPaths();
  const posts = getAllPostsContent();

  if (request.method === 'OPTIONS') {
    response.status(200).end();
    return;
  }

  response.setHeader('Access-Control-Allow-Credentials', true);
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader(
    'Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT',
  );

  response.json({ paths, posts });
}
