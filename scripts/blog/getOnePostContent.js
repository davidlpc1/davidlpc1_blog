import fs from 'fs';
import grayMatter from 'gray-matter';
import remark from 'remark';
import remarkHtml from 'remark-html'

export default function getAllPosts(slug){
    const fileContent = fs.readFileSync(`./_posts/${slug}.md`,'utf-8')
    const { content,data:metadata } = grayMatter(fileContent)
    const htmlContent = remark()
        .use(remarkHtml)
        .processSync(content)
        .toString()

    return {
        metadata:{
            ...metadata,
            slug
        },
        content: htmlContent
    }
}