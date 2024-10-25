console.log("DOM selectors file is loaded...");

console.log(document);

// 1. Selects an element by ID
const heading = document.getElementById('heading');
console.log(heading);

// 2. Selects an element by class name - returns an HTMLCollection
const paragraphs = document.getElementsByClassName("paragraph");
console.log(paragraphs);

// 3. Selects an element by tag name
const tags = document.getElementsByTagName("p");
console.log(tags);

// 4. Selects the first element that matches a specified CSS selector(s).
const querySelectors = document.querySelector(".container .box p");
console.log(querySelectors);



// 5. Selects all elements that match a specified CSS selector(s). Returns a static NodeList.
const selectors = document.querySelectorAll(".paragraph");
console.log(selectors);