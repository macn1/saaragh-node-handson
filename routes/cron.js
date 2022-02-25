const express = require('express');

const router = express.Router();

const cron = require('node-cron');


const nodeCron = require("node-cron");




const job = nodeCron.schedule("0 6 * * *", function jobYouNeedToExecute() {


    console.log('good morning');

    console.log(new Date().toLocaleString());
  });


module.exports = router;

