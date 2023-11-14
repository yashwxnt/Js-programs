//leap year or not
var a = window.prompt("Enter a year: ")
if(a%4==0) 
  {
    if(a%100==0 && a%400==0)
        { 
            document.getElementById("leap-year").innerHTML = (`${a} is a leap year`)
        }
    else
        {
            document.getElementById("leap-year").innerHTML = (`${a} is not a leap year`)
        }
  }
else 
  {
    document.getElementById("leap-year").innerHTML = (`${a} is not a leap year`)
  }

    