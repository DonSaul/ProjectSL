

require('jquery');
require('@popperjs/core');
require('bootstrap');
var mysql = require('mysql');
var $ = require( "jquery" );
require('bootstrap');
// or the shorthand way
const dict = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','V','W','Y','X','Z'];
var calif = 0;
var test = 1;
var longi = Object.keys(dict).length
var numero = Math.floor(Math.random() * longi);

localStorage.setItem("someVarKey", test);
var test = localStorage.getItem("someVarKey");


document.getElementById("headerprueba").innerHTML = test;
console.log(dict[numero]);

var letra = dict[numero];
var valor = String(letra);
var correcto = valor;
function myFunction() {
    document.getElementById("myImg").src = "src/img/"+ valor +'.JPG';
  }
myFunction();

var boton =Math.floor(Math.random() * 4);
console.log(boton);


function llenar(){
    var temp1 = Math.floor(Math.random() * longi);
    var temp2 = Math.floor(Math.random() * longi);
    if (boton == 0 || boton == 1){
    
    console.log(correcto);
    document.getElementById('b1').value = correcto;
    document.getElementById("b2").value = dict[temp1];
    document.getElementById("b3").value = dict[temp2];

    }else{
        if (boton == 2 ){
            document.getElementById('b1').value = dict[temp1];
            document.getElementById("b2").value = correcto;
            document.getElementById("b3").value = dict[temp2];
    }else{
        if (boton == 3 ){
            document.getElementById('b1').value = dict[temp1];
            document.getElementById("b2").value = dict[temp2];
            document.getElementById("b3").value = correcto;}

    }

}
}
llenar();


    function updateDiv()
    { 
        console.log (`funciona?`);
        test =test+1;
        location.reload();

   
    } 


    function verificar(){
        var res = document.getElementById('b1').value;
        var res2 = document.getElementById('b2').value;
        var res3 = document.getElementById('b3').value;
         if(res == correcto || res2 == correcto || res3 == correcto){

            alert(`Muy Bien`);
         
            updateDiv();
         }else{
             alert("vuelve a intentarlo");
         }


    }