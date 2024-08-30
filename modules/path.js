import path from "path";
import url from "url";
  
// const filePath = "./folder1/folder2/folder3/data.txt";

// // baseName()
// console.log(path.basename(filePath));

// //dirName()
// console.log(path.dirname(filePath));

// //parse()
// console.log(path.parse(filePath));

// //extname()
// console.log(path.extname(filePath));

// const ___filename = url.fileURLToPath(import.meta.url);
// console.log(___filename);


const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);