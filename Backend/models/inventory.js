import mongoose from "mongoose";

const { Schema } = mongoose;

const inventorySchema = Schema(
  {
    itemName: {},
    quantity: {},
    category: {},
    // (medicines/equipment)
    expiryDate: {},
    hospitalId: {},
  },
  { Timestamps: true }
);

export default mongoose.model("inventory", inventorySchema);
