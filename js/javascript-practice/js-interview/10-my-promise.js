class MyPromise {
  constructor(executor) {
    this.state = "pending";
    this.value = undefined;

    this.onFulfilled = [];
    this.onRejected = [];

    const resolve = (value) => {
      if (this.state !== "pending") return;

      this.state = "fulfilled";
      this.value = value;

      this.onFulfilled.forEach((fn) => fn(value));
    };

    const reject = (error) => {
      if (this.state !== "pending") return;

      this.state = "rejected";
      this.value = error;

      this.onRejected.forEach((fn) => fn(error));
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled) {
    return new MyPromise((resolve, reject) => {
      const handler = (value) => {
        try {
          const result = onFulfilled
            ? onFulfilled(value)
            : value;

          resolve(result);
        } catch (error) {
          reject(error);
        }
      };

      if (this.state === "fulfilled") {
        queueMicrotask(() => handler(this.value));
      } else if (this.state === "pending") {
        this.onFulfilled.push(handler);
      }
    });
  }

  catch(onRejected) {
    return new MyPromise((resolve, reject) => {
      const handler = (error) => {
        try {
          const result = onRejected(error);
          resolve(result);
        } catch (err) {
          reject(err);
        }
      };

      if (this.state === "rejected") {
        queueMicrotask(() => handler(this.value));
      } else if (this.state === "pending") {
        this.onRejected.push(handler);
      }
    });
  }
}

// Example
const promise = new MyPromise((resolve) => {
  setTimeout(() => {
    resolve("Hello");
  }, 1000);
});

promise
  .then((value) => {
    console.log(value);
    return value + " World";
  })
  .then((value) => {
    console.log(value);
  });
