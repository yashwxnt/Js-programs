var num = 1234
var temp = ""
var a 
while (num!=0) {
a = num%10
switch (a) {
    case 1: temp = "O" +temp
    break;
    case 2: temp = "T" +temp
    break;
    case 3: temp = "T" +temp
    break;
    case 4: temp = "F" +temp
    break;
    case 5: temp = "F" +temp
    break;
    case 6: temp = "S" +temp
    break;
    case 7: temp = "S" +temp
    break;
    case 8: temp = "E" +temp
    break;
    case 9: temp = "N" +temp
    break;
    default:
        break;
}

num = parseInt(num/10)
}

console.log(temp)

