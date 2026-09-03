let range1;
let range2;
range1 = Number(prompt("Please enter the first number:"));
range2 = Number(prompt("Please enter the second number:"));

for (let i = range1; i <= range2; i++) {
    let isPrime = true;

    if (i <= 1) {
        isPrime = false;
    } else {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        console.log(i); 
    }
}
