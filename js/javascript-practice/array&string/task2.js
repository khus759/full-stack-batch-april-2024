// let numbers = [5, 2, 9, 1, 7];
// let first = -Infinity;
// let second = -Infinity;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > first) {
//         second = first;
//         first = numbers[i];
//     } else if (numbers[i] > second && numbers[i] < first) {
//         second = numbers[i];
//     }
// }

// console.log(second);

let numbers = [5, 2, 9, 1, 7];
let first = 0;
let second = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > first) {
        second = first;
        first = numbers[i];
    } else if (numbers[i] > second && numbers[i] < first) {
        second = numbers[i];
    }
}

console.log(second);

