const router = require("express").Router();
const requestModel = require("./../models/loanRequest.model");
const List = require("./../models/providerList.model");
const axios = require("axios");
const sheet = require("./../balanceSheet.js");

/**
 * Here we are storing the the request and based upon the accounting provider we will make the futher calls
 *
 * For making further calls we will query the database with name "List" for the api endpoint
 */
router.post("/", async (req, res) => {
  try {
    const newRequest = new requestModel({
      name: req.body.businessName,
      amount: req.body.loanAmount,
      accountingProvider: req.body.accountingProvider,
    });

    
    await newRequest.save();

    //Querying to the database to find apiEndpoint with name as accountingProvider
    const provider = await List.find({
      name: req.body.accountingProvider,
    }).exec();

    //stimulating the request to the accounting provider
    axios
      .post(provider[0].apiUrl, newRequest)
      .then(function (response) {
        const data = { sheet: sheet, id: newRequest._id };
        return res.status(200).json({ data });
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (err) {
    return res.status(500).json({ err });
  }
});

module.exports = router;
