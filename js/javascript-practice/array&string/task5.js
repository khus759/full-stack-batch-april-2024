// let arr = [1, 2, 2, 3, 1, 2];
// let counts = {};

// for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];

//     if (counts[num]) {
//         counts[num] += 1; // already exists → add 1
//     } else {
//         counts[num] = 1;  // first time → set 1
//     }
// }

// console.log(counts);

const arr = [1, 2, 2, 3, 3, 3];
const counts = {};

for (const num of arr) {
  counts[num] = (counts[num] || 0) + 1;
}

console.log(counts); // {1: 1, 2: 2, 3: 3}

