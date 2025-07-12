import { User } from "../models/user.models.js";
import { sendToken } from "../utils/features.js";

// Create a new user and save it to the database and save in cookie
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

const login = (req, res) => {
  res.send("Hello World");
};

export { login, newUser };
