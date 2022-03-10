const express = require("express");
const axios = require("axios");
const app = express();
const path = require("path");
const cors = require("cors");

const PORT = process.env.PORT || 5005;
const requestopts = {
  convert: "USD",
  headers: {
    "X-CMC_PRO_API_KEY": "74b45c73-d6a3-4807-9b51-203d974ad3cb",
  },
};

app.use([express.json({ extended: false }), cors()]);

app.get("/top", (req, res) => {
  axios
    .get(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=HNT`,
      requestopts
    )
    .then(function (response) {        
      res.json(response.data);
    })
    .catch(function (error) {
      res.json(error);
    });
});

if (process.env.NODE_ENV === "production") {
  //Set Static folder
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}


//App listen to PORT
app.listen(PORT, function () {
  console.log(`Express server listening on port ${PORT}`);
});
