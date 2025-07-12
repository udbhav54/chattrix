import express from "express"
import { login, newUser } from "../controllers/user_controllers.js";
import { singleAvatar } from "../middlewares/multer_middlewares.js";

const app = express.Router();

app.post("/new", singleAvatar,  newUser)
app.post("/login", login)



export default app;


// app.get("/login", login)
 // how actual URL look like(https//localhost:3000/user/a)
