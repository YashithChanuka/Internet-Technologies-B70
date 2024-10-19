console.log("Attributes Modifications file is loaded...");

// 1. getAttribute() - Gets the value of an attribute on the specified element.
const link = document.querySelector('a');
console.log(link.getAttribute('href'));

// 2. setAttribute() - Sets the value of an attribute on the specified element.
link.setAttribute('href', 'https://www.facebook.com');
console.log(link.getAttribute('href'));

link.setAttribute('target', '_blank');

// 3. removeAttribute() - Removes the specified attribute from an element.
link.removeAttribute('target');
