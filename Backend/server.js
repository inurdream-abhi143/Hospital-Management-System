// import e from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();


// connect mongoDb through atlas

mongoose
  .connect(process.env.MONGO_URL_ATLAS)
  .then(() => {
    console.info(" Connection is setup through Mongo Atlas");
    app.listen(process.env.PORT, () => {
      console.info(` Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error(` Connection failed: ${err.message}`);
    process.exit(1);
  });

