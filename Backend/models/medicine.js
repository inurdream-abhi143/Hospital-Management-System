const medicineSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    manufacturer: String,
    stock: Number,
    expiryDate: Date,
    price: Number,
  },
  { timestamps: true }
);

export default mongoose.model("medicine", medicineSchema);
