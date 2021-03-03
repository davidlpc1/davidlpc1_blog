import fs from 'fs';

export default function getAllPostsPaths() {
  const allPostsFileNames = fs.readdirSync('./_posts');
  const allPostsPaths = allPostsFileNames.map((filename) => ({
    params: { slug: filename.replace('.md', '') },
  }));

  return allPostsPaths;
}
