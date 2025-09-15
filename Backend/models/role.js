import mongoose from "mongoose";
const { Schema } = mongoose;

const roleSchema = Schema(
  {
    roleName: {
      type: String,
      enum: [
        "admin", // Superuser of hospital system
        "doctor", // Medical staff
        "nurse", // Assists doctors, patient care
        "receptionist", // Handles front desk, patients
        "lab_technician", // Manages tests and reports
        "pharmacist", // Medicine handling
        "accountant", // Billing and finance
        "patient", // End-user, hospital service consumer
      ],
      required: true,
      unique: true,
    },
    decription: {
      type: String,
      //optional
    },
  },
  { timestamps: true }
);

const Role = mongoose.model("Role", roleSchema);
export default Role;
