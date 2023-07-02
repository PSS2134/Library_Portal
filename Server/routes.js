const express = require("express");
const User = require("./models/userModel");
const router = express.Router();

router.post("/api/signup", async (req, res) => {
  const { name, contact, email, password, course, year, room } = req.body;
  const user_exist = await User.findOne({ email: email });
  if (user_exist) {
    return res.json("user exists");
  } else {
    const user = new User({
      name,
      contact,
      email,
      password,
      course,
      year,
      room,
    });
    await user.save();
    return res.json("new user");
  }
});

router.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  //  console.log(req.body);
  const email_exist = await User.findOne({ email: email });
  console.log(email_exist);
  if (email_exist) {
    const password_correct = await User.findOne({
      email: email,
      password: password,
    });
    // console.log(password_correct);
    if (password_correct) {
      // console.log(password_correct);
      return res.json("user exists");
    } else {
      return res.json("password incorrect");
    }
  } else {
    return res.json("user not found");
  }
});

router.get("/api/login", async (req, res) => {
  const email = req.query.email;
  const user = await User.findOne({ email: email });
  return res.json({ name: user.name });
});

module.exports = router;
