const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const { urlencoded } = require('body-parser');

const nodemailer = require('nodemailer');


const app = express();

const imageRoutes = require('./routes/image');

const emailRoutes = require('./routes/email');

const cronRoutes = require('./routes/cron');



//enable cors
app.use(cors());

//parse application/json

app.use(bodyparser.urlencoded({
  extended: true
}));
app.use(bodyparser.json());





//serving static files
app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => {
  res.send('nodejs file upload rest apis')

});

app.use('/image', imageRoutes);

app.use('/email', emailRoutes);




app.use((req, res, next) => {
const error = new Error('not found');
error.status = 404;
next(error);
});
app.use((error, req, res, next) => {
res.status(error.status || 500);
res.json({
    error: {
        message: error.message
    }
});
});



module.exports = app;