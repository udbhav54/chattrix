import { compare } from "bcrypt";
import { User } from "../models/user_models.js";
import { sendToken } from "../utils/features.js";
import { TryCatch } from "../middlewares/error.js";
import { ErrorHandler } from "../utils/utility.js";

// Create a new user and save it to the database and save token in cookie
const newUser = async (req, res) => {

  // here we access the data from users
  const { name, bio, username, password } = req.body;
  console.log(req.body);

  const avatar = {
    public_id: "savgv",
    url: "dasdbghv",
  };

  const user = await User.create({
    name,
    bio,
    username,
    password,
    avatar,
  });

  // res.status(201).json({message: "User created successfully"})
  sendToken(res, user, 201, "User created successfully");

};


// login function
const login = TryCatch(async (req, res, next) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username }).select("+password");
  // console.log(user);
  // console.log(password);

  if (!user) return next(new ErrorHandler("Invalid Username or Password", 404));

  const isMatch = await compare(password, user.password);
  // console.log(isMatch);

  if (!isMatch) return next(new ErrorHandler("Invalid Username or Password", 404));;

  sendToken(res, user, 200, `Welcome Back, ${user.name}`);
});

const getMyProfile = (req, res) => {};

export { login, newUser, getMyProfile };
