function m(){
var v = document.getElementById("s");

for(var x =1980;x<2022;x++){
    
    var n = document.createElement("option");
    n.innerHTML = x;
    v.appendChild(n);
}
}