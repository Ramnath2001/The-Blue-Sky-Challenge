const express = require("express")
const bodyParser = require("body-parser")
const fs = require('fs');


const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const results = []

app.get("/", function(req, res){
    let rawdata = fs.readFileSync('./public/data.json');
    let results = JSON.parse(rawdata);
    res.render('home', {results: results});
})


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}


app.listen(port, function(){
    console.log("Server started successfully");
})