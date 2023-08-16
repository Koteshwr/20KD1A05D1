const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const getData = require("./Routes/getTrainData.js")

const port = 5000;

app.use('/getData',getData);
app.listen(port,()=>{
    console.log(`server running at port ${port}`);
})