var a = window.prompt("Enter 1st side: ")
var b = window.prompt("Enter 2nd side: ")
var c = window.prompt("Enter 3rd side: ")
if(a==b &&a==c) 
    {
        document.getElementById("triangles").innerHTML = ("It is an Equilateral Triangle")
    }
else if(a==b || b==c || a==c )
    {
        document.getElementById("triangles").innerHTML = ("It is an Isoceles Triangle") 
    }
else 
    {
        document.getElementById("triangles").innerHTML = ("It is a Scal Triangle")
    }