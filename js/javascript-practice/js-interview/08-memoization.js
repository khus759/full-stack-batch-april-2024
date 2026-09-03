function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      console.log("From cache");
      return cache.get(key);
    }

    console.log("Calculating...");

    const result = fn.apply(this, args);

    cache.set(key, result);

    return result;
  };
}

// Example
const factorial = memoize(function factorial(n) {
  if (n <= 1) {
    return 1;
  }

  return n * factorial(n - 1);
});

console.log(factorial(5));
console.log(factorial(5));
