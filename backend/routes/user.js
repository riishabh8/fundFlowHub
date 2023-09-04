const router = require("express").Router();
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();



/**
 * Validating the admin and sending back the jwt token 
 */
router.route("/login").post(async (req, res) => {
  const user = await User.findOne({
    name: req.body.name,
  });
  if (!user) {
    return res
      .status(400)
      .json({ status: "error", error: "Email doesn't exists" });
  }

  let isPasswordValid = false;
  if (req.body.password == user.password) {
    isPasswordValid = true;
  }

  if (isPasswordValid) {
    const token = jwt.sign(
      {
        name: user.name,
      },
      process.env.SECRET
    );

    return res.status(200).json({ status: "ok", user: token, name: user.name });
  } else {
    return res.status(400).json({ status: "error", user: false });
  }
});

module.exports = router;
