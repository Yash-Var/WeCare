const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your title"],
  },
  Aadhar_number: {
    type: Number,
    required: [true, "please provide your firstName"],
  },
  phone_number: {
    type: Number,
    required: [true, "please provide your lastName"],
  },
  city: {
    type: String,
    required: [true, "please provide your DOB"],
  },
  gender: {
    type: String,
    required: [true, "please provide your lastName"],
  },
  upload: {
    type: String,
    required: [true, "Please enter an email"],
  },
});

const doctor = mongoose.model("doctor", userSchema);

module.exports = doctor;
