const arr = [1, 4, 5];
let missing;

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i + 1] - arr[i] !== 1) {
    missing = arr[i] + 1;
    break;
  }
}

console.log(missing); // 3
