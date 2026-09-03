const frequentNum = arr =>
  arr.reduce((a, b, arr) =>
    arr.filter(v => v === b).length > arr.filter(v => v === a).length ? b : a
  );

console.log(frequentNum([1, 3, 2, 3, 4, 3, 5, 2])); 
