const medicalRecordSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "patient",
      required: true,
    },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: "doctor" },
    diagnosis: String,
    prescriptions: [
      { type: mongoose.Schema.Types.ObjectId, ref: "prescription" },
    ],
    labTests: [{ type: mongoose.Schema.Types.ObjectId, ref: "labTest" }],
    notes: String,
  },
  { timestamps: true }
);

export default mongoose.model("medicalRecord", medicalRecordSchema);
