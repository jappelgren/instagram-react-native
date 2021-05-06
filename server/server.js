const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// const sessionMiddleware = require('./modules/session-middleware');
// const passport = require('./strategies/user.strategy');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// ROUTES







const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});