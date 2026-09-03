function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const items = Array.from(promises);

    if (items.length === 0) {
      resolve([]);
      return;
    }

    const results = [];
    let completed = 0;

    items.forEach((item, index) => {
      Promise.resolve(item)
        .then((value) => {
          results[index] = value;
          completed++;

          if (completed === items.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}

// Example
const p1 = Promise.resolve("A");

const p2 = new Promise((resolve) => {
  setTimeout(() => resolve("B"), 1000);
});

const p3 = Promise.resolve("C");

promiseAll([p1, p2, p3])
  .then((result) => {
    console.log(result);
  });

// ["A", "B", "C"]
