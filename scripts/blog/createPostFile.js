import fs from 'fs';

export default function CreatePostFile(body) {
  const { markdown, title } = body;
  return fs.writeFileSync(`_posts/${title}.md`, markdown);
}
