var n = 1001
var p = n
var rev = 0
var temp = ""
while(p!=0)
{
    rev = p%10
    temp += rev
    p=parseInt(p/10);
}
if(temp==n){
    console.log("It is a palindrome")
}
else {
    console.log("It is not a palindrome")
}