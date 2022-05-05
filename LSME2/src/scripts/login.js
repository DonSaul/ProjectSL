const { ipcRenderer } = require('electron')

let btnlogin;
let usuario; 
let password;

window.onload = function() { 
  usuario = document.getElementById("usuario")
  password = document.getElementById("password")
  btnlogin = document.getElementById("login")

  btnlogin.onclick = function(){
    
   const obj = {email:email.value, password:password.value }

    ipcRenderer.invoke("login", obj)
  }
}