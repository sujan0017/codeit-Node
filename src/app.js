import express from "express";
import dotenv from "dotenv"

const app = express();

dotenv.config()
const PORT = process.env.PORT

app.get("/", (req, res) => {
//   res.send("Home Pages");
  res.json({
    appName: "nodejs-essential",
    version: "1.0.0",
    port: PORT,
  })
});


// app.get("/", (req, res) => {
//   res.send("Home Pages");
// });
// app.get("/about", (req, res) => {
//   res.send("About Pages");
// });
// app.get("/products", (req, res) => {
//   res.send("Products Pages");
// });

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}....`);
});

//HTTP Methods (CRUD)
// Read -- GET /products
// write (create) -- POST /products
// Update -- PUT / products/:id
// Delete -- DELETE /products/id
