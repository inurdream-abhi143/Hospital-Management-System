import User from "../models/users.js";

const employeeId = async ({ roleName, roleId }) => {
  try {
    const employeIdPrefix = {
      doctor: "DOC",
      nurse: "NUR",
      accountant: "ACC",
      receptionist: "REC",
      lab_technician: "LAB",
      pharmacist: "PHA",
      admin: "ADM",
    };

    const prefix = employeIdPrefix[roleName] || "EMP";

    //last users EmployeeId
    const lastUser = await User.findOne({ role: roleId._id })
      .sort({ createdAt: -1 })
      .select("employeeId");
    // console.log(lastUser);
    // console.log(lastUser.employeeId);

    let newNumber = 1;
    if (lastUser && lastUser.employeeId) {
      
      const lastNum = Number(lastUser.employeeId.replace(/\D/g, ""));
    //   console.log(lastNum);
      newNumber = lastNum + 1;
    }
    const empId = prefix + newNumber.toString().padStart(4, "0");
    // console.log(empId);
    return empId;
  } catch (err) {
    console.error("Error in Creating Employee Id ", err);
  }
};

export default employeeId;
