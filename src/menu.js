var userpassed = sessionStorage.getItem('Usuario');



var $ = require( "jquery" );
require('bootstrap');


function Usuario(){

    console.log(userpassed);

}
document.getElementById("Nombre").innerHTML = userpassed;
//  <a class="btn btn-primary btn-sm "  role="button" id="Usuario" onclick="Usuario()"> Prueba</a>
//<a class="btn btn-primary btn-sm " href="index.html" role="button" id="btnreg"> Regresar</a>

    
    


    



