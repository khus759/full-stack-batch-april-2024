let num;
do {
    num = prompt("please enter your marks");
    if (isNaN(num)) { 
        console.log("please enter valid number") }

} while (isNaN(num));
num = Number(num);
switch (true) {
    case (num >= 90 && num <= 100):
        console.log("Your grade is A+");
        break;
    case (num >= 80 && num <= 89):
        console.log("Your grade is B");
        break;
    case (num >= 70 && num <= 79):
        console.log("Your grade is C");
        break;
    case (num >= 60 && num <= 69):
        console.log("Your grade is D");
        break;
    case (num <= 60):
        console.log("Your grade is F");
        break
    default:
        console.log ("please enter valid number");    

} 