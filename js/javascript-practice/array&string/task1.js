let description = "Write a function that takes an array of strings and returns a single string that concatenates all the strings in the array, separated by commas.";

let task = ""

for (let i = description.length - 1; i >= 0; i--) {
    task += description[i];
}

console.log(task);