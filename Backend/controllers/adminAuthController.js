// for Signup function

// import users from "../models/users.js";

export const adminSignup = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const role = "admin";

    const existingUsers = await users.findOne({ email });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
