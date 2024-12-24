const { error } = require("console");
const fs = require("fs");

// sync function returns things in variables
fs.writeFileSync("./test.txt", "Hello World")

// const result = fs.readFileSync("./contact.txt", "utf-8");
// console.log(result)

// Async function returns things with callback
fs.writeFile("./test_async.txt", "Hello World Async", (err) => {})

fs.readFile("./contact.txt", "utf-8", (err, result) => {
     if (err) {
          console.log("Error", err);
     } else {
          console.log(result);
     }
})