

// or the shorthand way
const dict = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','V','W','Y','X','Z'];

var longi = Object.keys(dict).length
var numero = Math.floor(Math.random() * longi);
document.getElementById("letra").innerHTML = dict[numero];
console.log(dict[numero]);
