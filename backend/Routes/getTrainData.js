const axios = require("axios");

const router = require('express').Router();



router.route('/').get((req, res) => {
    const headers = { authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTIyMDAzNTksImNvbXBhbnlOYW1lIjoiMjBLRDFBMDVEMSBDZW50cmFsIiwiY2xpZW50SUQiOiJjM2IzZWZiOC1iNjc5LTRkYTQtOWY5YS03MzQ2ZGM5MTQ2ZDIiLCJvd25lck5hbWUiOiIiLCJvd25lckVtYWlsIjoiIiwicm9sbE5vIjoiMjBLRDFBMDVEMSJ9.oBYO6TDGuo4rT5dkLDpd9btjjoaHbjsT5QamPUNS9Lk" }
    const url = "http://20.244.56.144/train/trains"
    const data = axios.get(url, { headers })
        .then((result) => res.json(result.data))
        .catch((err) => console.log("error"));
    ;
});


module.exports = router