const express = require("express")
const bodyParser = require("body-parser")
const csv = require('csv-parser')
const fs = require('fs')



const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const results = []
fs.createReadStream('\public\\finalResults.csv').pipe(csv({})).on('data', (data) => results.push(data)).on('end', ()=>{
    // console.log(results);
    // console.log(results[0]['CO (Actual)']);
})


app.get("/", function(req, res){
    res.render('home', {results: results});
})


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}


app.listen(port, function(){
    console.log("Server started successfully");
})