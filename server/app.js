import express from "express";
import userRoute from "./routes/user.routes.js"
import {connectDB} from "./utils/features.js"
import dotenv from "dotenv"

dotenv.config({
  path: "./.env"
})
const mongoURI = process.env.MONGO_URI;
const port = process.env.PORT || 5000
connectDB(mongoURI);

const app = express();

// Using Middlewares Here
app.use(express.json()) // to access in json formate
// app.use(express.urlencoded()) // to access form data from postman

app.use("/user", userRoute);


// how to make route

// ----------------OR------------------//
// 2nd way
// const fun = (req, res) => {
//   res.send("Hello World");
// }; // these things store in controller folder

// app.get("/", fun); // these things in route

// 1st way

app.get("/", (req, res) => {
  res.send("Hello World");
})




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
