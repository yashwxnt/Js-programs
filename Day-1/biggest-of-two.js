//biggest of two
var a,b
a = 10
b = 20
if(a>b && a%2==0){
     document.getElementById("biggest").innerHTML = (`${a} is the biggest and an even number`)     
}
else{
    document.getElementById("biggest").innerHTML =(`${b} is biggest and an odd number`)
}