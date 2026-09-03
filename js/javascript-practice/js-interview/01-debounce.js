function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// Example
const search = debounce((query) => {
  console.log("Searching:", query);
}, 500);

search("j");
search("ja");
search("jav");
search("java");

// Output after 500ms:
// Searching: java
