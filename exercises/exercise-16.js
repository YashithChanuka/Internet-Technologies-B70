let counter = 0;
let intervalId = setInterval(() => {
    counter++;
    console.log("Number : ", counter);
}, 1000);

setTimeout(() => {
    clearInterval(intervalId);
}, 10500);