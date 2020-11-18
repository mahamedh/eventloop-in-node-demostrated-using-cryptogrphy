 
const fs = require("fs");
const crypto= require("crypto");

process.env.UV_THREADPOOL_SIZE = 2; // changing thread pool size

const start= Date.now(); // current date in millisecond

setTimeout(() => console.log("Timer 1 finished"),0);

setImmediate(() => console.log("Immediate 1 finished"),0);

fs.readFile("text-file.text", () => {

console.log("I/O finished");
console.log("-----------------------")

setTimeout(() => console.log("Timer 2 finished"),0);
setTimeout(() => console.log("Timer 3 finished"),3000);

setImmediate(() => console.log("Immediate 2 finished"),0);


process.nextTick(() => console.log("process.nextTick"));


crypto.pbkdf2('password','salt',100000,1024, 'sha512', () => {

console.log(Date.now()- start,"Password encrypted"); // give amount of milli second in-order to do this calculation

});

crypto.pbkdf2('password','salt',100000,1024, 'sha512', () => {

console.log(Date.now()- start,"Password encrypted"); // give amount of milli second in-order to do this calculation
     });


crypto.pbkdf2('password','salt',100000,1024, 'sha512', () => {
console.log(Date.now()- start,"Password encrypted"); // give amount of milli second in-order to do this calculation
         });

crypto.pbkdf2('password','salt',100000,1024, 'sha512', () => {
console.log(Date.now()- start,"Password encrypted"); // give amount of milli second in-order to do this calculation
       });   


});
 
console.log ("Hello from the top-level code");



//top level code excuted immediatly
//nextTick() is micro task queue which get excuted after each phase
//4 threads runing at same time

