var a = window.prompt("1st number");
var b = window.prompt("2nd number");
var c = window.prompt("3rd number");

if (a > b) {
    let temp = a;
    a = b;
    b = temp;
}

if (a > c) {
    let temp = a;
    a = c;
    c = temp;
}

if (b > c) {
    let temp = b;
    b = c;
    c = temp;
}

document.getElementById("biggest").innerHTML = `${a} < ${b} < ${c}`;
