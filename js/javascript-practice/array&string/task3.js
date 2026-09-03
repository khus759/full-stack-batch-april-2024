// let dublicates = [1,1,2,3,4,5,6,6,7,8,8,4];
// let unique = [];

// for (let i = 0; i<dublicates.length; i++) {
//     if (!unique.includes(dublicates[i])) {
//         unique.push(dublicates[i]);
//     }
// }
// console.log(unique);

let numbers = [1, 2, 2, 3, 4, 4, 5];
let unique = [...new Set(numbers)];
console.log(unique);
