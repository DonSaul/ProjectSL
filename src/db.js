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



//var query = 'SELECT IF ( EXISTS (SELECT * FROM dba_lenguaje.user WHERE user = ? and pass = ? ), 1, 0)'

function logintest(){
        con.query('SELECT * FROM dba_lenguaje.user', function (error, rows, fields) {
                if (error) throw error;

                    var user = document.getElementById("user").value;
                    var password = document.getElementById("pass").value;
                  
                    console.log(user + password);
                    var flag = 0;
                    for (let i = 0; i < rows.length; i++) {
                 
                        if (user === rows[i].user && password === rows[i].pass){
                        console.log('Existe');
                        sessionStorage.setItem("Usuario", user );
                        
                        document.location.href = 'Menu.html';
                        flag = 1;
                        }
                    }
                    if (flag === 0){
                        alert('Error: Usuario o clave invalida.')
                    }

                    
                });
          


            }