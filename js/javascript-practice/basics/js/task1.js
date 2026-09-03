//  task 1

let num1 = Number(prompt("Please enter the first number:"));
let num2 = Number(prompt("Please enter the second number:"));

for (let i = num1; i<=num2; i++) {
    
    if ((i % 4 === 0 && i % 6 === 0)) {
        console.log("Quad")
    }
    else if (i % 4 === 0){
        console.log("Hex");
    }
    else if (i % 6 === 0){
        console.log("QuadHex");
    }
    else {
        console.log(`${i}`)
    }

}




