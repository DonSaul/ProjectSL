require('jquery');
require('@popperjs/core');
require('bootstrap');
const csv = require('csv-parser');
const fs = require('fs');
const productsList = document.querySelector("#userstab");
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database : 'dba_lenguaje'
  });
  
  con.connect(function(err) {
    if (err) throw err;

  
  });

  var data=[];
  
   function tabla(){
    con.query("SELECT * FROM dba_lenguaje.user", function (err, result, fields) {
        if (err) throw err;
       
        Object.keys(result).forEach(function(key) {
            var row = result[key];
            console.log(row.name)
          });
     

        
   
        });
    }
    tabla();

    
  