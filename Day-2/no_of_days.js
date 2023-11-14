var year = parseInt(window.prompt("Enter the year:"));
var month = window.prompt("Enter the month name:").toLowerCase();

var monthNumber;

switch (month) {
    case "january":
        monthNumber = 1;
        break;
    case "february":
        monthNumber = 2;
        break;
    case "march":
        monthNumber = 3;
        break;
    case "april":
        monthNumber = 4;
        break;
    case "may":
        monthNumber = 5;
        break;
    case "june":
        monthNumber = 6;
        break;
    case "july":
        monthNumber = 7;
        break;
    case "august":
        monthNumber = 8;
        break;
    case "september":
        monthNumber = 9;
        break;
    case "october":
        monthNumber = 10;
        break;
    case "november":
        monthNumber = 11;
        break;
    case "december":
        monthNumber = 12;
        break;
    default:
        document.getElementById("no_of_days").innerHTML = "Invalid month name entered.";
}

var daysInMonth = 0;

if (monthNumber === 2) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        daysInMonth = 29;
    } else {
        daysInMonth = 28;
    }
} else if (monthNumber === 4 || monthNumber === 6 || monthNumber === 9 || monthNumber === 11) {
    daysInMonth = 30;
} else {
    daysInMonth = 31;
}

if (daysInMonth !== 0) {
    document.getElementById("no_of_days").innerHTML = `Number of days in the month: ${daysInMonth}`;
}
