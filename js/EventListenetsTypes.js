console.log("Event Listeners Types file is loaded...");

const box = document.querySelector('.box');

// single click event
box.addEventListener('click', function () { 
    console.log('You clicked the box!');
})

// double click event
box.addEventListener('dbclick', function () { 
    console.log('You double clicked the box!');
})

// mouse-down event
box.addEventListener('mousedown', function () { 
    console.log('Mouse pressed...');
})

// mouse-up event
box.addEventListener('mouseup', function () { 
    console.log('Mouse released...');
})

// mouse-move event
box.addEventListener('mousemove', function () { 
    console.log('Mouse moved...');
})

// mouse-over event
box.addEventListener('mouseover', function () {
    console.log('Mouse over...');
})

// mouse-over event
box.addEventListener('mouseout', function () { 
    console.log('Mouse out...');
})