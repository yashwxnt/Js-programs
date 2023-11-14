//to print if a person is eligible to vote if their gender is male and age is 21 and above or gender is female and age is 18 and above
var age = window.prompt("Enter your age: ")
var Gender= window.prompt("What's your Gender")
if(Gender == "male"||"MALE"||"Male" && age >=21)
    {
         document.getElementById("if-else_ladder").innerHTML = ("You are eligible to vote")
    }
else if(Gender == "female"||"FEMALE"||"Female"&& age>=18) 
    {
        document.getElementById("if-else_ladder").innerHTML = ("You are eligible to vote")
    }
else
    {
        document.getElementById("if-else_ladder").innerHTML = ("You are not eligible to vote")
    }