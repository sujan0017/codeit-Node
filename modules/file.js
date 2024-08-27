import fs from "fs/promises";

// Sync TYPE

// const data = fs.readFileSync("./data.txt", "utf-8") // Only use if the file is small is size.
// console.log(data)

// fs.writeFileSync("./data.txt", "Hello Ramu kaka") // write value to file

// Async type - callback , promise and async-await

// callback --Callback hell and to hard to fix th error
// fs.readFile("./data.txt", "utf8", (error, data) => {
//   if (error) return console.log(error);

//   fs.readFile(data, "utf8", (error1, data1) => {
//     if (error1) return console.log(error1);

//     fs.readFile(data1, "utf8", (error2, data2) => {
//       if (error2) return console.log(error2);
//       console.log(data2);
//     });
//   });
// });

// Promise (preferred)
// fs.readFile("./data.txt", "utf8")
//   .then((data) => {
//     fs.readFile(data, "utf8")
//     .then((data2) => {
//         fs.readFile(data2, "utf8")
//         .then((data3)=>{
//             console.log(data3);
//         }).catch((error) => {console.log(error);});
//     })
//     .catch((error)=> {
//         console.log(error);
//     })
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//   async-await (most preferred)
// async function readMyFile() {
//   try {
//     const data = await fs.readFile("./data.txt", "utf8");

//     const data1 = await fs.readFile(data, "utf8");

//     const data2 = await fs.readFile(data1, "utf8");

//     console.log(data2);
//   } catch (error) {
//     console.log(error);
//   }
// }
// readMyFile();

// async function writeMyFile(){
//     try {
//         fs.writeFile("./data2.txt", "Ramu kaka ko Ghara Fire")
//     } catch (error) {
//         console.log(error);
//     }
// }

// writeMyFile();

// fs.appendFile("./data2.txt", "bhag khancha bhag") // append to existing file
// fs.appendFile("./data2.txt", "\nbhag khancha bhag") // append in next line
