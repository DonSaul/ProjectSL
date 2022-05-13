var userpassed = sessionStorage.getItem('Usuario');


require('jquery');
require('@popperjs/core');
require('bootstrap');
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database : 'dba_lenguaje'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

});


var $ = require( "jquery" );
require('bootstrap');


function Usuario(){

    console.log(userpassed);

}

document.getElementById("Nombre").innerHTML = userpassed;

if (userpassed == 'Admin'){
  console.log(userpassed);

  document.getElementById("btoculto").style.display = 'block';
}


else {
  document.getElementById("btoculto").style.display = 'none';
}
//  <a class="btn btn-primary btn-sm "  role="button" id="Usuario" onclick="Usuario()"> Prueba</a>
//<a class="btn btn-primary btn-sm " href="index.html" role="button" id="btnreg"> Regresar</a>

    
    


    



