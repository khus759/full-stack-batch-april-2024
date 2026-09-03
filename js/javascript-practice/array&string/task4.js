// let nested = [1, [2, [3]]];
// let flat = [];

// let stack = [...nested]; // copy array to a stack

// while (stack.length > 0) {
//     let item = stack.shift(); // take the first element

//     if (Array.isArray(item)) {
//         // if it's an array, add its elements to the front of the stack
//         stack = [...item, ...stack];
//     } else {
//         flat.push(item); // if not array, add to result
//     }
// }
// console.log(flat);

const arr = [1, [2, [3]]];

// Use .flat() with Infinity to fully flatten all levels
const flattened = arr.flat(Infinity);

console.log(flattened); // [1, 2, 3]

