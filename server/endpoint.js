const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });
const express = require("express");
const bodyParser = require("body-parser");
const moment = require("moment");
const app = express();
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 8000;
const winston = require("winston");
app.use(cookieParser());
app.use(cors());
app.use(express.json());
const axios = require("axios");
const utils = require("./utils.js");
const CLEARBIT_GATEWAY =
  "https://company.clearbit.com/v2/companies/find?domain=";
const CLEARBIT_TOKEN = process.env.CLEARBIT_TOKEN;
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "equitysys.log" }),
  ],
});

app.get("/company", async (req, res) => {
  try {
    const sanitizedInput = req.body?.domain;
    if (sanitizedInput) {
      const companyData = await axios.get(CLEARBIT_GATEWAY + sanitizedInput, {
        headers: {
          Authorization: `Bearer ${CLEARBIT_TOKEN}`,
        },
      });
      res.send(companyData);
    }
  } catch (ex) {
    logger.error(
      moment().format("DD/MM/YYYY, h:m") +
        ": error in: " +
        req.url +
        ex.toString()
    );
    throw ex;
  }
});

if (process.env.NODE_ENV === "production") {
  // serve the static files (html,css,etc...)
  app
    .use(express.static(path.join(__dirname, "../client/build")))
    .use(cors())
    .use(cookieParser());
  app.use(express.static("client/build"));

  // If the route not recognized by different gateways
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
