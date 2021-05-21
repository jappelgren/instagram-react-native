const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

// Passport Session Configuration //
app.use(sessionMiddleware);

// Route includes
const userRouter = require('./routes/user.route.js');
const signedUrl = require('./routes/signedUrlAws.route.js');


// ROUTES
app.use('/api/user', userRouter);
// app.use('/api/posts', postsRouter);
app.use('/api/signedUrl', signedUrl);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});

module.exports = app;
