import mongoose from "mongoose";

const { Schema } = mongoose;

const addressSchema = Schema(
  {
    address: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "users",
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    zipCode: {
      type: Number,
      required: true,
    },
  },
  { Timestamps: true }
);

export default mongoose.model("address", addressSchema);
