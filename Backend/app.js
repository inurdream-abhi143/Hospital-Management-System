import e from "express";
import adminAuth from "./routers/adminAuth.js";
import hospitalRouter from "./routers/hospitalRouter.js";
import cors from "cors";
import dotenv from "dotenv";
import departmentRouter from "./routers/departmentRouter.js";
import userRouter from "./routers/userRouter.js";

dotenv.config();
const app = e();

app.use(e.json());
app.use(e.urlencoded({ extended: true }));

//for cors origion
app.use(cors());

// for admin
app.use("/admin-auth", adminAuth);

// for hospial registration
app.use("/hospital", hospitalRouter);

// for Depratment
app.use("/department", departmentRouter);

// for staff Purpose 

app.use("/user", userRouter);
app.get("/", (req, res) => {
  res.send("Api is Runing ");
});

export default app;
