const mongoose = require("mongoose");

const List = new mongoose.Schema({
  name: { type: String },
  apiUrl: { type: String },
});

const model = mongoose.model("List", List);

module.exports = model;
