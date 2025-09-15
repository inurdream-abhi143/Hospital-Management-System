import Role from "../models/role.js";

export const addRole = async (req, res) => {
  try {
    const { roleName, description } = req.body;
    // check if that role exsist before inside Db
    const exsistRole = await Role.findOne({ roleName });
    if (exsistRole) {
      return res.status(409).json({ messgae: "This role already Exsists " });
    }
    const newRole = new Role({
      roleName: roleName,
      description: description,
    });
    await newRole.save();

    res.status(201).json({ message: "Roler created", newRole });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server Error", error: err.message });
  }
};
