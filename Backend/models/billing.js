const billingSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "patient",
      required: true,
    },
    appointment: { type: mongoose.Schema.Types.ObjectId, ref: "appointment" },
    amount: { type: Number, required: true },
    status: { type: String, enum: ["paid", "pending"], default: "pending" },
    paymentMethod: {
      type: String,
      enum: ["cash", "card", "insurance"],
      default: "cash",
    },
  },
  { timestamps: true }
);

export default mongoose.model("billing", billingSchema);
