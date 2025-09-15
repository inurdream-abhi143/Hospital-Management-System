import hospitals from "../models/hospitals.js";
import mongoose from "mongoose";
import e from "express";
import bcrypt from "bcrypt";
import { genratePassword } from "../utils/passwordGenrator.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import User from "../models/users.js";
import employeeId from "../utils/employeeId.js";
import Role from "../models/role.js";

export const hospitalRegistration = async (req, res) => {
  try {
    const {
      hospitalName,
      type,
      addressStreet,
      addressCity,
      addressState,
      addressZip,
      country,
      contact,
      email,
      establishedYear,
    } = req.body;

    //genrate the hospitalId
    // get Last Id of hospital

    const lastHospital = await hospitals.findOne().sort({ createdAt: -1 });
    let newId = 1;

    if (lastHospital && lastHospital.registrationId) {
      const lastID = parseInt(lastHospital.registrationId.replace("HOSP", ""));
      newId = lastID + 1;
    }
    const registrationId = "HOSP" + newId.toString().padStart(5, "0");

    //check exsisting hospital's

    const checkExsistingHospital = await hospitals.findOne({ email });

    if (checkExsistingHospital) {
      return res.status(400).json({ message: "Hosptal elready exsists" });
    }
    const password = genratePassword(8);

    console.log(password);
    const hashPassword = await bcrypt.hash(password, 10);

    const newhospital = new hospitals({
      hospitalName: hospitalName,
      registrationId: registrationId,
      type: type,
      addressCity: addressCity,
      addressStreet: addressStreet,
      addressState: addressState,
      addressZip: addressZip,
      country: country,
      email: email,
      password: hashPassword,
      contact: contact,
      establishedYear: establishedYear,
    });
    await newhospital.save();

    res
      .status(201)
      .json({ messgae: "Hospital Registration Complete", password });
  } catch (err) {
    res
      .status(500)
      .json({ messgae: "Internal Server Error", err: err.message });
  }
};

// for login

export const hospitalLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    //check for if the hospital exsist's
    const exsistingHospital = await hospitals.findOne({ email });
    if (!exsistingHospital) {
      return res.status(404).json({ message: "No Account Found" });
    }
    //   match the password
    const matchPassword = await bcrypt.compare(
      password,
      exsistingHospital.password
    );
    if (!matchPassword) {
      return res.status(401).json({ message: "Password Does Not Match " });
    }
    const token = jwt.sign(
      {
        id: exsistingHospital._id,
        email: exsistingHospital.email,
        registrationId: exsistingHospital.registrationId,
      },
      process.env.SECRET_KEy,
      {
        expiresIn: "1h",
      }
    );
    //get address in one
    const address = `${exsistingHospital.addressStreet} ${exsistingHospital.addressCity} ${exsistingHospital.addressState} ${exsistingHospital.country} ${exsistingHospital.addressZip}`;
    // console.log(address);
    const hospitalInfo = {
      id: exsistingHospital._id,
      name: exsistingHospital.hospitalName,
      type: exsistingHospital.type,
      email: exsistingHospital.email,
      token,
      address,
    };
    res.status(200).json({ message: "Login Successfull", hospitalInfo });
  } catch {}
};

// for password Update
export const hospitalPasswordUpdate = async (req, res) => {
  try {
  } catch {}
};

// for admin creating function
export const createAdmin = async (req, res) => {
  try {
    const { email, hospitalId, firstName, lastName, contact, gender } =
      req.body;

    const roleName = "admin";
    // check if last name is null
    // const secondName = lastName || null;
    // check if user already exsist
    const exsistUser = await User.findOne({ email });

    if (exsistUser) {
      return res.status(409).json({ message: "User alreay Exsist" });
    }

    //get role Id
    const roleId = await Role.findOne({ roleName: "admin" });
    if (!roleId) {
      return res
        .status(404)
        .json({ message: "Role Id Did not match or Found" });
    }

    const empId = await employeeId({ roleName, roleId });

    // to genrate password
    const password = genratePassword(8);
    //convert password to hash password
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName: firstName,
      lastName: lastName,
      hospitalId: hospitalId,
      employeeId: empId,
      contact: contact,
      password: hashPassword,
      email: email,
      role: roleId._id,
      departmentId: null,
      gender: gender,
    });
    await newUser.save();
    res
      .status(201)
      .json({ message: "Admin created SuccessFully", newUser, password });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};
