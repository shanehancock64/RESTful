const express = require('express');
const app = express();
const mongoose = require('mongoose');
const sql = require('mysql2');

app.listen(3001, ()=> {
  console.log('Alive on port 3001');
});