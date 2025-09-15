import e from "express";
import {
  createAdmin,
  hospitalLogin,
  hospitalPasswordUpdate,
  hospitalRegistration,
} from "../controllers/hospitalController.js";
import { checkHospitalToken } from "../middlewares/hospitalMiddleware.js";
import { addRole } from "../controllers/roleController.js";

const hospitalRouter = e.Router();

// for hopital registration
hospitalRouter.post("/registration", hospitalRegistration);

// for login purpose
hospitalRouter.post("/login", hospitalLogin);

// for updating password
hospitalRouter.patch(
  "/passwordUpdate",
  checkHospitalToken,
  hospitalPasswordUpdate
);

// create Admin
hospitalRouter.post("/create-admin", createAdmin);

// for adding the roles
hospitalRouter.post("/add-role", addRole);
export default hospitalRouter;
