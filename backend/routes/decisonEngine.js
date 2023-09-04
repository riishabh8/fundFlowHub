const router = require("express").Router();
//This file contains the functions which is used to set the preAssessment 
const businessUtils = require("./../businessUtils.js");
const requestModel = require("./../models/loanRequest.model.js");


/***
 * This is the route to stimulate the call to the decision engine
 */
router.post("/", async (req, res) => {
  try {

    //setting the preAssessment
    let preAssessment = 20;
    const sheet = req.body.sheet;
    const customer = await requestModel.find({ _id: req.body.customerId });
    if (businessUtils.hasMadeProfitLast12Months(sheet)) {
      preAssessment = 60;
    }
    if (businessUtils.isAverageAssetValueGreater(sheet, customer[0].amount)) {
      preAssessment = 100;
    }

    //calling the decison engine from here
    /**
     * Here We will make the call to the decision engine;
     * And then we can return that from the
     *
     */

    return res.status(200).json({
      status: "Submitted",
      customerData: customer[0],
      score: preAssessment,
    });
  } catch (err) {
    return res
      .status(500)
      .json({
        status: "Submission Unsuccessfull",
        error:err
      });
  }
});

module.exports = router;
