require('jquery');
require('@popperjs/core');
require('bootstrap');
const csv = require('csv-parser');
const fs = require('fs');

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



function userExport(){
    con.query('SELECT * FROM dba_lenguaje.user', function (error, rows, fields) {
      if (error) throw error;

      var data=[];

      for (let i = 0; i < rows.length; i++) {

        var id=rows[i].idUser;
        var user=rows[i].user;
        var name=rows[i].nombre;
        var pass=rows[i].pass;
        var tipo=rows[i].tipo;
        var calif=rows[i].calif;

        var item= {
          "idUser": id,
          "user": user,
          "name": name,
          "pass": pass,
          "tipo": tipo,
          "calif": calif
        }

        data.push(item);

      }

      const createCsvWriter = require('csv-writer').createObjectCsvWriter;

      const csvWriter = createCsvWriter({
          path: 'users.csv',
          header: [
            {id: 'idUser', title: 'idUser'},
            {id: 'user', title: 'user'},
            {id: 'name', title: 'name'},
            {id: 'pass', title: 'pass'},
            {id: 'tipo', title: 'tipo'},
            {id: 'calif', title: 'calif'},
          ]
      });

      csvWriter
        .writeRecords(data)
        .then(()=>  alert('Archivo de respaldo exportado'));

    });
}

  function userImport(){

    fs.createReadStream('users.csv')
      .pipe(csv())
      .on('data', (row) => {
        console.log(row);
        var query = "INSERT INTO dba_lenguaje.user VALUES("+row.idUser+",'"+row.user+"','"+row.name+"','"+row.pass+"','"+row.tipo+"',"+row.calif+")";
        console.log(query);
        con.query("INSERT INTO dba_lenguaje.user VALUES("+row.idUser+",'"+row.user+"','"+row.name+"','"+row.pass+"','"+row.tipo+"',"+row.calif+")",function (error, rows, fields) {
          if (error) throw error;

        
        });

      })

      .on('end', () => {
        alert('Archivo de respaldo importado');
        
      });
  }