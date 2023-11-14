var a = 1234
var count = 0
var temp = a
var b = 0
var c
while(temp!=0)
{
    temp = parseInt(temp/10)
    count++
}
temp=a;
while(temp!=0){
    c = temp%10;
    b += c**count
    temp = parseInt(temp/10)
}
console.log(b)
 