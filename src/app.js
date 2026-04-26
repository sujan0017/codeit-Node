import express from "express";
import dotenv from "dotenv";
import products from "./routes/products.js";
import auth from "./routes/auth.js";
import bodyParser from "body-parser";
import connectDB from "./database.js";
import cookieParser from "cookie-parser";
import logger from "./middleware/logger.js";

const app = express();

dotenv.config();

connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:5173",
      process.env.APP_URL,
    ],
    credentials: true,
  }),
);

app.use(logger);
app.use(cookieParser());

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  //   res.send("Home Pages");
  res.json({
    appName: "nodejs-essential",
    version: process.env.VERSION,
    port: PORT,
  });
});

app.use("/api/products", products);

app.use("/api/auth", auth);

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}....`);
});

//HTTP Methods (CRUD)
// Read -- GET /products
// write (create) -- POST /products
// Update -- PUT / products/:id
// Delete -- DELETE /products/id

// app.get("/", (req, res) => {
//   res.send("Home Pages");
// });
// app.get("/about", (req, res) => {
//   res.send("About Pages");
// });
// app.get("/products", (req, res) => {
//   res.send("Products Pages");
// });
