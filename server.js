const express = require("express");
var satelize = require("satelize");
var bodyParser = require('body-parser')


var app = express();


// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))




app.get("/", (req, res) => {
    res.status(200).send("WHATABYTE: Food For Devs");
  });


app.get("/country", async (req, res) => {
    await satelize.satelize({ip:'119.157.72.152'}, function(err, payload) {
        console.log(payload)
        res.status(200).send(payload);
    });

})
  

app.listen(5000, function () {

console.log("Started application on port %d", 5000);

});