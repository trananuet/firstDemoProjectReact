const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const router = require('./api/routers/router');

const app = express();

// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// Anti XSS
app.use(helmet());

// Header request
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE, OPTIONS');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range, Access-Token, Refresh-Token');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    } else {
        return next();
    }
});

router.routerConfig(app);
app.get('/', (req, res) => {
    res.send('server start');
})
// Start the server
app.listen(process.env.PORT || 8000, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server listening on port ${process.env.PORT}`);
});