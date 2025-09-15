import mongoose from "mongoose";

const { Schema } = mongoose;

const wardsSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    hospitalId: {
      type: mongoose.Schema.ObjectId,
      ref: "hospitals",
    },
    capacity: {
      type: Number,
      required: true,
    },
  },
  { Timestamps: true }
);

export default mongoose.model("wards", wardsSchema);
