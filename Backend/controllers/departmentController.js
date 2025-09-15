import Department from "../models/departments.js";
import hospitals from "../models/hospitals.js";

export const createDepartment = async (req, res) => {
  try {
    const { departmentName, hospitalId, description } = req.body;

    //check hospital first
    const hospitalExsist = await hospitals.findOne({ _id: hospitalId });

    if (!hospitalExsist) {
      return res.status(404).json({ message: "Hospital not found" });
    }

    //check if department already exsist  or not

    const exsistDep = await Department.findOne({ departmentName, hospitalId });
    if (exsistDep) {
      return res
        .status(409)
        .json({ messgae: "This Department already Exsist" });
    }
    // check if description in empty
    const newDescription = description || null;
    const newDepartment = await new Department({
      departmentName: departmentName,
      hospitalId: hospitalId,
      description: newDescription,
    });
    await newDepartment.save();

    res
      .status(201)
      .json({ message: "Department is created", department: newDepartment });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};
