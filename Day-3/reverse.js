var a = 123;
var sum = 0;
var remainder;
while(a!=0)
{
    remainder =a%10;
    sum=sum*10+remainder;
    a=parseInt(a/10);
}
console.log(sum)