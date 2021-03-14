import fs from "fs";

export default function getAllPostsPaths() {
  const allPostsFileNames = fs.readdirSync("./pages/fun");
  const allPostsPaths = allPostsFileNames.map((filename) => {
    const adaptedPath = filename.replace(/.tsx/, "");
    return {
        filename: adaptedPath,
    }
  });

  return allPostsPaths;
}
