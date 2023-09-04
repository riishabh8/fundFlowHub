const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const seedAdmin = require('./seedAdmin');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

//mongoDB connnection setup
const uri = process.env.ATLAS_URI;

mongoose.set("strictQuery", true);
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongoDB success");
});

/**
 * This funtion seeds the admin to the mongoDb if there's no admin
 */
seedAdmin();

const userRouter = require("./routes/user.js");
app.use("/api/v1/user", userRouter);

const providerList = require("./routes/providerList.js");
app.use("/api/v1/accounting-provider", providerList);

const formRoute = require("./routes/form.js");
app.use("/api/v1/loan-request", formRoute);

const decisonEngine = require("./routes/decisonEngine.js");
app.use("/api/v1/decison-engine", decisonEngine);



app.listen(process.env.PORT, function () {
  console.log("App started on " + process.env.PORT);
});
