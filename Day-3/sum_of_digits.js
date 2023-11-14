var  a = 0
var sum = 0
while(a>0)
{
   sum += a%10
   a = parseInt(a/10)
}
console.log(`${sum} is the sum of digits`)