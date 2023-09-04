const router = require("express").Router();
const mongoose = require("mongoose");
const List = require("../models/providerList.model");
require("dotenv").config();
const jwt = require("jsonwebtoken");

/**
 * In Future when we need to add more accounting provider then we can after validating the admin through token
 * 
 * Here we are storing the name and the api to the the accounting provider so that we an call in future if required
 */

router.route("/").post(async (req, res) => {
  try {
    var decoded = jwt.verify(req.headers["x-access-token"], process.env.SECRET);
    const newProvider = new List({
      name: req.body.name,
      apiUrl: req.body.apiUrl,
    });
    await newProvider.save();
    return res.status(200).json({ message: "Added" });
  } catch (err) {
    return res.status(500).json(err);
  }
});




/**
 * Retreiving the list of accounting provider in the database but sending only the names not the stored api url
 */

router.route("/").get(async (req, res) => {
  const results = await List.find({}, "name");
  return res.status(200).json({ data: results, message: "Success" });
});



module.exports = router;
