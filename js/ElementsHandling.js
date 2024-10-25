console.log("ElementsHandling.js loaded");

// 1. createElement() - Creates a new element with the specified tag name.
const newDiv = document.createElement('div');
newDiv.id = 'alert-success';
newDiv.className = 'alert alert-success';
newDiv.textContent = 'You have successfully registered!';
newDiv.style.backgroundColor = 'lightgreen';
newDiv.style.color = 'green';
newDiv.style.padding = '10px';
newDiv.style.borderRadius = '12px';

console.log(newDiv);

// 2. append() - Inserts a set of Node objects or DOMString objects after the last child of the ParentNode.
const card = document.querySelector('.card');
// card.append(newDiv);
// card.append(newDiv, 'Additional Text');

// 3. appendChild() - Appends a node as the last child of a node.
card.appendChild(newDiv);

// 4. insertBefore() - Inserts a node before a reference node as a child of a specified parent node.
// card.insertBefore(newDiv, card.firstChild);

// 5. removeChild() - Removes a child node from the DOM and returns the removed node.
// card.remov

const newDiv2 = document.createElement('div');
newDiv2.id = 'alert-dange';
newDiv2.className = 'alert alert-danger';
newDiv2.textContent = "Error Occured!";
newDiv2.style.backgroundColor = 'lightcoral';
newDiv2.style.color = 'red';
newDiv2.style.padding = '10px';
newDiv2.style.borderRadius = '12px';

// 6. replaceChild() - Replaces a child node within the specified parent node.
card.replaceChild(newDiv2, newDiv);

// 7. cloneNode() - Clones a node and returns the resulting node.
const clonedDiv = newDiv2.cloneNode(true);
card.appendChild(clonedDiv);

// 8. hasChildNodes() - Returns a Boolean value indicating whether a node has any child nodes.
console.log(card.hasChildNodes()); 

// 9. remove() - Removes the element from the DOM.
card.remove();
