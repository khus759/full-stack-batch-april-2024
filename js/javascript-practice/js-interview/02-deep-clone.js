function deepClone(value, seen = new WeakMap()) {
  if (value === null || typeof value !== "object") {
    return value;
  }

  if (seen.has(value)) {
    return seen.get(value);
  }

  if (value instanceof Date) {
    return new Date(value.getTime());
  }

  if (value instanceof RegExp) {
    return new RegExp(value.source, value.flags);
  }

  if (Array.isArray(value)) {
    const clone = [];
    seen.set(value, clone);

    for (const item of value) {
      clone.push(deepClone(item, seen));
    }

    return clone;
  }

  const clone = {};
  seen.set(value, clone);

  for (const key of Reflect.ownKeys(value)) {
    clone[key] = deepClone(value[key], seen);
  }

  return clone;
}

// Example
const original = {
  name: "Rahul",
  skills: ["JS", "React"],
  address: {
    city: "Patna"
  }
};

const copy = deepClone(original);

copy.address.city = "Delhi";

console.log(original.address.city); // Patna
console.log(copy.address.city);     // Delhi
