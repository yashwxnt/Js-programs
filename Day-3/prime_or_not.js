var n = 70
count = 0
for(i=2;i<=n;i++)
{
    if(n%i==0){
        count++
    }
}
if(count==1){
    console.log("It is a prime number")
}
else{
        console.log("It is not a prime number")
    }