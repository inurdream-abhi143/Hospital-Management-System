const mongoose = require("mongoose");

const prescriptionSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "patient",
      required: true,
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "doctor",
      required: true,
    },
    medicines: [
      {
        name: String,
        dosage: String, // e.g. 1 tablet twice a day
        duration: String, // e.g. 5 days
      },
    ],
    notes: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("prescription", prescriptionSchema);
