import mongoose from "mongoose";

const { Schema } = mongoose;

const specializationSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { Timestamps: true }
);

export default mongoose.model("specialization", specializationSchema);
