

require('jquery');
require('@popperjs/core');
require('bootstrap');
var mysql = require('mysql');
var $ = require( "jquery" );
require('bootstrap');

const { stringify } = require('querystring');
// or the shorthand way

const dict = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','V','W','Y','X','Z'];
var calif = 0;
var test = 1;
var longi = Object.keys(dict).length
var numero = Math.floor(Math.random() * longi);






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

    switch(boton) {
        case 0:
          // code block
          document.getElementById('b1').value = correcto;
          document.getElementById("b2").value = dict[temp1];
          document.getElementById("b3").value = dict[temp2];
          break;
        case 1:
            document.getElementById('b1').value = correcto;
            document.getElementById("b2").value = dict[temp1];
            document.getElementById("b3").value = dict[temp2];
          // code block
          break;
        case 2:
            document.getElementById('b1').value = dict[temp1];
            document.getElementById("b2").value = correcto;
            document.getElementById("b3").value = dict[temp2];
            break;
        case 3:
            document.getElementById('b1').value = dict[temp1];
            document.getElementById("b2").value = dict[temp2];
            document.getElementById("b3").value = correcto;
                break;
        default:
            console.log('default');
          // code block
          break;
      }
    
    }



llenar();


    function updateDiv()
    { 
      
    
        
        
        location.reload();
    }
   
    

    
    function verificar1(){
        
      var res =document.getElementById('b1').value;
      if(res == correcto){
        alert(`Muy Bien`);
        updateDiv();

    }else{
        alert(`Vuelve a intentarlo`);
        updateDiv();
    }

    }

    function verificar2(){
        
        var res =document.getElementById('b2').value;
        if(res == correcto){
            alert(`Muy Bien`);
            updateDiv();

        }else{
            alert(`Vuelve a intentarlo`);
            updateDiv();
        }
  
      }
      function verificar3(){
        
        var res =document.getElementById('b3').value;
        if(res == correcto){
            alert(`Muy Bien`);
            updateDiv();

        }else{
            alert(`Vuelve a intentarlo`);
            updateDiv();
        }
  
      }