console.log("TimerFunction.js loaded...");

// setTimeout(function, delay) - Executes a function, after waiting a specified number of milliseconds.
const timeoutId = setTimeout(() => {
    console.log("Hello World!");
}, 5000);
// clearTimeout(timeoutId);

// setInterval(function, interval) - Repeatedly executes a function at regular intervals.
const intervalId = setInterval(() => {
    console.log("Hey There!");
}, 1000);
clearInterval(intervalId);