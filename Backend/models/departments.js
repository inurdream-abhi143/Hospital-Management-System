import mongoose from "mongoose";

const { Schema } = mongoose;

const departmentSchema = Schema(
  {
    departmentName: {
      type: String,
      required: true,
      index: true,
    },
    hospitalId: {
      type: mongoose.Schema.ObjectId,
      ref: "Hospital",
    },
    hod: {
      type: mongoose.Schema.ObjectId,
      ref: "user",
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

const Department = mongoose.model("Department", departmentSchema);

export default Department;
