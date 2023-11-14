
var a = window.prompt("1st number")
var b = window.prompt("2nd number")
var c = window.prompt("3rd number")
var d = window.prompt("4th number")
const ans = (a > b && a > c && a > d? a : b > c && b > d? b :c> d? c: d);
document.getElementById("biggest").innerHTML =(`Given numbers = ${a} ${b} ${c} ${d} biggrst number${ans}`)