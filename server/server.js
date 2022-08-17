const express = require('express');
const app = express();
var cors = require('cors');
app.use(cors());
require('dotenv').config();
require("./Config/db");
const port = 3001;  



app.use(express.json())

const userRouters = require('./Routers/users')
app.use('/goldon/users', userRouters)

const selfWorthRouters = require('./Routers/selfWorth')
app.use('/goldon/selfworth', selfWorthRouters)

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})