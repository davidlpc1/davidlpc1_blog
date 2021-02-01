import fs from 'fs';
import grayMatter from 'gray-matter';
import remark from 'remark';
import remarkHtml from 'remark-html';

export default function getAllPosts() {
  const allPostsFileNames = fs.readdirSync('./_posts');

  const posts = allPostsFileNames.map((filename) => {
    const fileContent = fs.readFileSync(`./_posts/${filename}`, 'utf-8');
    const { content, data: metadata } = grayMatter(fileContent);
    const htmlContent = remark()
      .use(remarkHtml)
      .processSync(content)
      .toString();

    return {
      metadata: {
        ...metadata,
        slug: filename.replace('.md', ''),
      },
      content: htmlContent,
    };
  });

  return posts;
}
