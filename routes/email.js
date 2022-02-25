const express = require('express');

const router = express.Router();


var nodemailer = require('nodemailer');


//write the proper mail id password below for the accurate result

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'work30151@gmail.com', 
    pass: 'athul@123'
  },
  tls :{
      rejectUnauthorized : false,
  },

});

var mailOptions = {
  from: 'awxq@gmail.com',
  to: 'athulraihan27@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'good morning'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

module.exports = router;
