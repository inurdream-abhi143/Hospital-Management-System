import e from "express";
import { createUserAccount } from "../controllers/userController.js";

const userRouter = e.Router();

// for  creating staff/user for hospital except
userRouter.post("/create-account", createUserAccount);
export default userRouter;
