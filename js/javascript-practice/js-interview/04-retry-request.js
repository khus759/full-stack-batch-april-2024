async function retry(fn, retries = 3, delay = 1000) {
  let lastError;

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;

      if (attempt === retries) {
        throw lastError;
      }

      await new Promise((resolve) => {
        setTimeout(resolve, delay);
      });

      delay *= 2; // Exponential backoff
    }
  }
}

// Example
let count = 0;

async function fetchData() {
  count++;

  console.log("Attempt:", count);

  if (count < 3) {
    throw new Error("API failed");
  }

  return {
    success: true,
    data: "User data"
  };
}

retry(fetchData, 4)
  .then(console.log)
  .catch(console.error);
