const express = require('express');
const app = express();



// settings
app.set('port', process.env.PORT_SERVER || 3000);




module.exports = app;