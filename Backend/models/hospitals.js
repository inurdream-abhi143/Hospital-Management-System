import mongoose from "mongoose";

const { Schema } = mongoose;

const hospitalSchema = Schema(
  {
    hospitalName: {
      type: String,
      required: true,
      unique: true,
    },
    registrationId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    type: {
      type: String,
      enum: ["government", "private", "specialization"],
      required: true,
      default: "private",
    },
    addressStreet: {
      type: String,
      required: true,
    },
    addressCity: {
      type: String,
      required: true,
    },
    addressState: {
      type: String,
      required: true,
    },
    addressZip: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
      default: "India",
    },
    contact: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
    },
    website: {
      type: String,
    },
    establishedYear: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Hospital", hospitalSchema);
