const express = require("express");
const { authorize } = require("./services/google-auth.js");

const app = express();
app.listen('3001', () => {
  authorize().then(() => {
    console.log('server listing to port 3001');
  });
})