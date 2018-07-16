//node js
const DeGiro = require('degiro');

(async () => {const degiro = DeGiro.create({username: 'username', password: 'password'});


    await degiro.login();
  

     obj = JSON.stringify(await degiro.getPortfolio());
     jsonData = JSON.parse(obj);


var arraynumbers = [];
var arrayprices = [];
var arrayarray = [];
var arraynames = [];
var arrayvalues = [];

for (var i = 0; i < jsonData.portfolio.length; i++) {
     portfoliodata = jsonData.portfolio[i];
    
    
    
     portfolionummers = jsonData.portfolio[i].id;
    var portfolionameoutput1 = await degiro.getProductsByIds(portfolionummers);
  
   
    var naamproducten = portfolionameoutput1.data[portfolionummers].name;


 portfolioprijzen = portfoliodata.value[3].value;
var portfoliovalues = portfoliodata.value[4].value;

//console.log(portfolionummers + " " + naamproducten + " " + portfoliovalues + " " + portfolioprijzen);

var array = [portfolionummers, naamproducten , portfoliovalues , portfolioprijzen];

arraynumbers.push(jsonData.portfolio[i].id);
arrayvalues.push(jsonData.portfolio[i].value[4].value)
arrayprices.push(jsonData.portfolio[i].value[3].value);
arraynames.push(portfolionameoutput1.data[portfolionummers].name);

arrayarray.push(array);



}

var app = require("express")(); 
var bodyParser = require("body-parser"); 

//Set view engine to ejs
app.set("view engine", "ejs"); 

//Tell Express where we keep our index.ejs
app.set("views", __dirname + "/views"); 

//Use body-parser
app.use(bodyParser.urlencoded({ extended: false })); 

//Instead of sending Hello World, we render index.ejs
var user = "Ralph";



app.get("/", (req, res) => { res.render("index", { username: user, cart: arrayarray, prijzen: arrayprices, namen: arraynames, values: arrayvalues }); });


app.listen(8080, () => { console.log("Server online on http://localhost:8080"); });



})()