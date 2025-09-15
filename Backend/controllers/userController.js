import Role from "../models/role.js";
import User from "../models/users.js";
import employeeId from "../utils/employeeId.js";
import { genratePassword } from "../utils/passwordGenrator.js";
import bcrypt from "bcrypt";

export const createUserAccount = async (req, res) => {
  try {
    const {
      email,
      role,
      firstName,
      lastName,
      hospitalId,
      contact,
      departmentId,
      gender,
    } = req.body;

    // check if the user Exsist or email is unique or not

    const exsistingUser = await User.findOne({ email });

    if (exsistingUser) {
      return res.status(409).json({ message: "User Already Exsist's" });
    }
    // find roleId

    const roleId = await Role.findOne({ role });
    if (!roleId) {
      return res.status(404).json({ message: `${role} Dosen't Exsist` });
    }
    // get the EmployeeId
    const empId = await employeeId({ role, roleId });

    // genrate Password
    const password = genratePassword(8);

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName: firstName,
      lastName: lastName,
      hospitalId: hospitalId,
      employeeId: empId,
      password: hashPassword,
      contact: contact,
      email: email,
      gender: gender,
      role: role,
      departmentId: departmentId,
    });
    await newUser.save();
    res.status(201).json({ message: `New ${role} is created` });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};
