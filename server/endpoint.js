require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const moment = require('moment');
const app = express();
require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 6969;

const request = require('request'); // "Request" library
appp.listen(port, () => console.log(`Listening on port ${PORT}`));