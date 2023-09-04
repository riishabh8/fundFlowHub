const mongoose = require("mongoose");
const loanRequest = new mongoose.Schema({
  name: { type: String },
  amount: { type: String },
  accountingProvider: { type: String }
});
const requestModel = new mongoose.model("LoanRequest", loanRequest);

module.exports = requestModel;
