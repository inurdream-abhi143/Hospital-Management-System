import mongoose from "mongoose";

const { Schema } = mongoose;

const wardsSchema = Schema(
  {
    bedNumber: {
      type: Number,
      required: true,
    },
    hospitalId: {
      type: mongoose.Schema.ObjectId,
      ref: "hospitals",
    },
    wardId: {
      type: mongoose.Schema.ObjectId,
      ref: "pards",
    },
    status: {
      type: String,
      enum: ["available", "occupied", "maintenance"],
      default: "available",
    },
  },
  { Timestamps: true }
);

export default mongoose.model("beds", wardsSchema);
