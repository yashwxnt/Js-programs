var a = 145
var b = 0
var temp = 0
var n = a
while(n!=0)
{
    b = n%10
    fact=1;
    for(i=1;i<=b;i++){
        fact*=i;
    }
    temp+=fact;
   n = parseInt(n/10)
}

if(temp==a){
    console.log("It is a stong number")
}
else{
    console.log("It is not a stong number")
}