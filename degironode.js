//node js

const DeGiro = require('degiro');

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

app.listen(8080, () => { console.log("Server online on http://localhost:8080"); });


var arraynumbers = [];

var arrayprices = [];
var arrayarray = [];
var arraynames = [];
var arrayvalues = [];
var arrayquantity = [];
var arrayinleg = [];


clear();

//setInterval(clear, 60000);




function clear()
{
    //empty values before fetching them again via the DeGiro API
     arraynumbers = [];
 arrayprices = [];
 arrayarray = [];
 arraynames = [];
 arrayvalues = [];
 arrayquantity = [];
 arrayinleg = [];
 arraywinst = [];
 d = [];
 totaleinleg = [];

 //only fetch when the values are empty to make sure no double arrays are displayed
if (arrayarray = [])
{
Giro();
}

}


function Giro(){

    

(async () => {const degiro = DeGiro.create({username: 'username', password: 'password'});




    await degiro.login();
  

     obj = JSON.stringify(await degiro.getPortfolio());
     
     jsonData = JSON.parse(obj);




for (var i = 0; i < jsonData.portfolio.length; i++) {
     
    portfoliodata = jsonData.portfolio[i];
    
    
    
     portfolionummers = jsonData.portfolio[i].id;
    var portfolionameoutput1 = await degiro.getProductsByIds(portfolionummers);
  
   
    var naamproducten = portfolionameoutput1.data[portfolionummers].name;



portfoliohoeveelheid = portfoliodata.value[2].value;
 portfolioprijzen = portfoliodata.value[3].value;
var portfoliovalues = portfoliodata.value[4].value;
portfoliowinst = portfoliodata.value[7].value;


//console.log(portfolionummers + " " + naamproducten + " " + portfoliovalues + " " + portfolioprijzen);

var array = [portfolionummers, naamproducten , portfoliovalues , portfolioprijzen];

arraynumbers.push(jsonData.portfolio[i].id);
arrayquantity.push(jsonData.portfolio[i].value[2].value);
arrayvalues.push(jsonData.portfolio[i].value[4].value);

arrayprices.push(jsonData.portfolio[i].value[3].value);

arrayinleg.push(Math.abs(jsonData.portfolio[i].value[6].value.EUR));


arraynames.push(portfolionameoutput1.data[portfolionummers].name);
arrayarray.push(array);
app.get("/", (req, res) => { res.render("index", { username: user, cart: arrayarray, prijzen: arrayprices, namen: arraynames, values: arrayvalues, datum: d, hoeveelheid: arrayquantity, inleg: arrayinleg }); });

}})()
console.log("data refresh!")
}


/*
function sum(input){
             
    if (toString.call(input) !== "[object Array]")
       return false;
         
               var total =  0;
               for(var i=0;i<input.length;i++)
                 {                  
                   if(isNaN(input[i])){
                   continue;
                    }
                     total += Number(input[i]);
                  }
                return total;
               }

*/

