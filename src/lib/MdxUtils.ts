// import { promises } from 'fs';
// import { join } from 'path';

// export async function getFileSlugArray(type) {
//   return getFileList(join(process.cwd(), 'src', 'contents', type)).then(
//     (paths) =>
//       paths.map((path) =>
//         path
//           .replace(join(process.cwd(), 'src', 'contents', type) + '/', '')
//           .replace('.mdx', '')
//           .split('/')
//       )
//   );
// }

// const getFileList = async (dirName: string) => {
//   let files: string[] = [];
//   const items = await promises.readdir(dirName, { withFileTypes: true });

//   for (const item of items) {
//     if (item.isDirectory()) {
//       files = [...files, ...(await getFileList(`${dirName}/${item.name}`))];
//     } else {
//       files.push(`${dirName}/${item.name}`);
//     }
//   }

//   return files;
// };

import fs from 'fs';
import path from 'path';

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), 'src/app/tes');

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));
