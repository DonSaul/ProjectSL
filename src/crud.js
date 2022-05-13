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


  var contador = 0;
   function tabla(){
    con.query("SELECT * FROM dba_lenguaje.user", function (err, result, fields) {
        if (err) throw err;
    
        contador = result.length;
        Object.keys(result).forEach(function(key) {
            var row = result[key];
            
          
         
           
                $('#my_table').append(`<tr>
                    <td>${row.idUser}</td>
                      <td>${row.user}</td>
                      <td>${row.nombre}</td>
                      <td>${row.pass}</td>
                  </tr>`);

               
                
                  
        });

       
   
    
      
        
   
        });
    

    }

  
    tabla();

  
function Edicion(){

    var numero =  document.getElementById('selector').value;
    if (numero.length != 0){
    console.log(numero);
    con.query("SELECT * FROM dba_lenguaje.user WHERE idUser =? ",[numero], function (err, result, fields) {
    if (err) throw err;
   
    Object.keys(result).forEach(function(key) {
        var row = result[key];
        
      
       var id =  row.idUser;
       var usuario = row.user;
       var nombre = row.nombre;
       var contra = row.pass;
      
       document.getElementById("usernuevo").value = usuario;
       document.getElementById("nombrenuevo").value = nombre;
       document.getElementById("passnuevo").value = contra;
           
            
              
    });

    });

    }else{
        alert('Ecribe un id valido');
    }

}
function Cedicion(){
  
    var numero =  document.getElementById('selector').value;
    var usuario = document.getElementById("usernuevo").value;
    var nombre = document.getElementById("nombrenuevo").value;
    var contra = document.getElementById("passnuevo").value;
    con.query("UPDATE dba_lenguaje.user set user = ?,nombre =?,pass=?  WHERE idUser =? ",[usuario,nombre,contra,numero], function (err, result, fields) {
    if (err) throw err;
    else{
        alert('usuario actualizado');
        tabla();

    }

    });

}
    
function Edicion(){

    var numero =  document.getElementById('selector').value;
    if (numero.length != 0){
    console.log(numero);
    con.query("SELECT * FROM dba_lenguaje.user WHERE idUser =? ",[numero], function (err, result, fields) {
    if (err) throw err;
   
    Object.keys(result).forEach(function(key) {
        var row = result[key];
        
      
       var id =  row.idUser;
       var usuario = row.user;
       var nombre = row.nombre;
       var contra = row.pass;
      
       document.getElementById("usernuevo").value = usuario;
       document.getElementById("nombrenuevo").value = nombre;
       document.getElementById("passnuevo").value = contra;
           
            
              
    });

    });

    }else{
        alert('Ecribe un id valido');
    }

}
function borrar(){
    var numero =  document.getElementById('selector').value;
  
    con.query("DELETE  FROM dba_lenguaje.user WHERE idUser =? ",[numero], function (err, result, fields) {
    if (err) throw err;
    else{
        alert('usuario eliminado');
      

    }

    });

}

function registrar(){
   
    var indicenuevo = contador + 1;
    var usuario = document.getElementById("usernuevo").value;
    var nombre = document.getElementById("nombrenuevo").value;
    var contra = document.getElementById("passnuevo").value;
    con.query("INSERT INTO dba_lenguaje.user  (idUser,user ,nombre,pass,tipo,calif ) VALUES(?,?,?,?,'Usuario',0) ",[indicenuevo,usuario,nombre,contra], function (err, result, fields) {
    if (err) throw err;
    else{
        alert('usuario creado');
     

    }

    });

}