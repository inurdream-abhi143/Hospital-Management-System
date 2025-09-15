import mongoose from "mongoose";

const { Schema } = mongoose;

const ambulanceSchema = Schema(
  {
    hospitalId: {
      type: mongoose.Schema.ObjectId,
      ref: "hospitals",
    },
    vehicleNumber: {
      type: String,
      required: true,
      unique: true,
    },
    driverName: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["available", "on the way", "occupied"],
      default: "available",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("ambulance", ambulanceSchema);
