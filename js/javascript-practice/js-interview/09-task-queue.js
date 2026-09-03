class TaskQueue {
  constructor(concurrency = 2) {
    this.concurrency = concurrency;
    this.running = 0;
    this.queue = [];
  }

  add(task) {
    return new Promise((resolve, reject) => {
      this.queue.push({
        task,
        resolve,
        reject
      });

      this.next();
    });
  }

  next() {
    if (
      this.running >= this.concurrency ||
      this.queue.length === 0
    ) {
      return;
    }

    const { task, resolve, reject } = this.queue.shift();

    this.running++;

    Promise.resolve()
      .then(task)
      .then(resolve)
      .catch(reject)
      .finally(() => {
        this.running--;
        this.next();
      });

    this.next();
  }
}

// Example
const queue = new TaskQueue(2);

const task = (id, time) => () =>
  new Promise((resolve) => {
    console.log("Start:", id);

    setTimeout(() => {
      console.log("Done:", id);
      resolve(id);
    }, time);
  });

queue.add(task(1, 1000)).then(console.log);
queue.add(task(2, 500)).then(console.log);
queue.add(task(3, 700)).then(console.log);
queue.add(task(4, 300)).then(console.log);
