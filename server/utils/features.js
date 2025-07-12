import mongoose from "mongoose";
import  jwt  from "jsonwebtoken";


// cookie
const cookieOption = {
  maxAge: 15 * 24 * 60 * 60 * 1000,
  sameSite: "none",
  httpOnly: true,
  secure: true,
};

// function that connect Database
const connectDB = (uri) => {
  mongoose
    .connect(uri, { dbName: "Chattrix" })
    .then((data) => console.log(`Connected to DB: ${data.connection.host}`))
    .catch((err) => {
      throw err;
    });
};

// function for token
const sendToken = (res, user, code, message) => {
  const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET);

  // console.log(token);
  

  // send to cookie
  return res.status(code).cookie("chattrix-token", token, cookieOption).json({
    success: true,
    message
  });
};


export { connectDB, sendToken };
