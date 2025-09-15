// use for check the token is valid for hospital account

import jwt from "jsonwebtoken";

export const checkHospitalToken = (res, req, next) => {
  const { token } = req.header("Authorization");

  if (!token) {
    return res.status(404).json({ message: "No token found" });
  }
  try {
    const decodeToken = jwt.verify(
      token.split("Bearer ")[1],
      process.env.SECRET_Key
    );
    req.hospitalId === decodeToken._id;
    next();
  } catch {
    res.status(401).json({ message: "Invalid Token" });
  }
};
