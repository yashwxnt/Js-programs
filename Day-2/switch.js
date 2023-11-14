var num = Number(window.prompt("Enter a number: "))
switch(num)
    {
        case 0: document.getElementById("weekday").innerHTML = ("Monday");
        break;
        case 1: document.getElementById("weekday").innerHTML = ("Tuesday");
        break;
        case 2: document.getElementById("weekday").innerHTML = ("Wedneday");
        break;
        case 3: document.getElementById("weekday").innerHTML = ("Thursday");
        break;
        case 4: document.getElementById("weekday").innerHTML = ("Friday");
        break;
        case 5: document.getElementById("weekday").innerHTML = ("Saturday");
        break;
        case 6: document.getElementById("weekday").innerHTML = ("Sunday");
        break;
        default: document.getElementById("weekday").innerHTML = ("Invalid");
    }