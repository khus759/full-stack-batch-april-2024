async function runWithConcurrency(tasks, limit) {
  const results = new Array(tasks.length);
  let nextIndex = 0;

  async function worker() {
    while (true) {
      const currentIndex = nextIndex++;

      if (currentIndex >= tasks.length) {
        return;
      }

      try {
        results[currentIndex] = await tasks[currentIndex]();
      } catch (error) {
        results[currentIndex] = {
          error
        };
      }
    }
  }

  const workers = Array.from(
    { length: Math.min(limit, tasks.length) },
    () => worker()
  );

  await Promise.all(workers);

  return results;
}

// Example
const createTask = (id, time) => {
  return () =>
    new Promise((resolve) => {
      console.log("Started:", id);

      setTimeout(() => {
        console.log("Finished:", id);
        resolve(id);
      }, time);
    });
};

const tasks = [
  createTask(1, 1000),
  createTask(2, 500),
  createTask(3, 800),
  createTask(4, 300),
  createTask(5, 700)
];

runWithConcurrency(tasks, 2)
  .then(console.log);
