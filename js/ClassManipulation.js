console.log("Class Manipulation file is loaded...");

const heading = document.getElementById('heading');
console.log(heading.classList);

// 1. classList.add() - Gets or sets the value of the class attribute of an element.
heading.classList.add('new-class');
console.log(heading.classList);

// 2. classList.remove() - Removes the specified class from an element.
heading.classList.remove('header');
console.log(heading.classList);

// 3. classList.toggle() - Toggles between a class name (If the class is already present in the classList, toggle() will remove it; if the class is not present, toggle() will add it)
heading.classList.toggle('active');
console.log(heading.classList);

heading.classList.toggle('active');
console.log(heading.classList);


