import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = Schema(
  {
    hospitalId: {
      type: mongoose.Schema.ObjectId,
      ref: "Hospital",
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    employeeId: {
      type: String,
      required: true,
      index: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: mongoose.Schema.ObjectId,
      ref: "Role",
    },
    departmentId: {
      type: mongoose.Schema.ObjectId,
      ref: "Department",
      default: null,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
