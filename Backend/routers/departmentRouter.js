import e from "express";
import { createDepartment } from "../controllers/departmentController.js";

const departmentRouter = e.Router();

// create department by hospital superAdmin only

departmentRouter.post("/createdepartment", createDepartment);

export default departmentRouter;
