import e from "express";
import { adminSignup } from "../controllers/adminAuthController.js";

const adminAuth = e.Router();

adminAuth.post("/signup", adminSignup);

export default adminAuth;
