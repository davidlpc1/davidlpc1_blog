import fs from 'fs';

interface CreatePostFileProps {
  markdown:string;
  title:string;
}

export default function CreatePostFile(body:CreatePostFileProps) {
  try {
    const { markdown, title } = body;
    if(!title || !markdown) throw new Error("> Function CreatePostFile requires two params: markdown and title")
    return fs.writeFileSync(`_posts/${title}.md`, markdown);
  }catch(err){
    console.error(err.message);
  }
}
