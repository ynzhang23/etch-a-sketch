// create largest container
let containerBody = document.createElement('div');
containerBody.classList.toggle('body');
document.body.appendChild(containerBody);

// ================================================================================================
// create tool box
let toolBox = document.createElement('div');
toolBox.classList.toggle('toolBox'); 
containerBody.appendChild(toolBox);

// create title
let title = document.createElement('div');
title.textContent = "ETCH-A-SKETCH"
title.classList.toggle('title');
toolBox.appendChild(title);

// create instructions
let instruction = document.createElement('div');
instruction.textContent = "Welcome! If you would like a 16 by 16 canvas, enter 16 into the box below."
instruction.classList.toggle('instruction');
toolBox.appendChild(instruction);

// create dimension adjustment container
let containerDimension = document.createElement('div');
containerDimension.classList.toggle('containerDimension');
toolBox.appendChild(containerDimension);

// create box for inputting dimension
let dimensionInputBox = document.createElement('input');
dimensionInputBox.setAttribute('placeholder', 'Resolution')
dimensionInputBox.classList.toggle('dimensionInput');
containerDimension.appendChild(dimensionInputBox);

// create button to receive input
let dimensionBtn = document.createElement('button');
dimensionBtn.classList.toggle('dimensionBtn');
containerDimension.appendChild(dimensionBtn);
dimensionBtn.textContent = "New Canvas";

// ================================================================================================
// generate default canvas
// create containing box
let containerCanvas = document.createElement('div');
containerBody.appendChild(containerCanvas);
containerCanvas.classList.toggle('containerCanvas');

// create row box
let containerRow = [];

for (i = 0; i < 16; i++) {
    containerRow[i] = document.createElement('div');
    containerCanvas.appendChild(containerRow[i]);
    containerRow[i].classList.toggle('containerRow' + i);
    containerRow[i].classList.toggle('row');
}

// create 16 boxes per row
// box 3 of row 5 = containerRow[5][3]
for (i = 0; i < 16; i++) {
    for (j = 0; j < 16; j++) {
        containerRow[i][j] = document.createElement('div');
        containerRow[i].appendChild(containerRow[i][j]);
        containerRow[i][j].classList.toggle('row' + i + 'box' + j);
        containerRow[i][j].classList.toggle('box');  
    }
}

// allow box to detect hover, changes its color on hover
// add event listener to all boxes
for (i = 0; i < 16; i++) {
    for (j = 0; j < 16; j++) {
        containerRow[i][j].addEventListener('mouseover', addHover)
    }
}

// adds an extra class on hover
function addHover(e) {
    e.target.classList.add('hover');
}

// ================================================================================================
// generate new canvas
// change dimension value
dimensionBtn.addEventListener('click', newCanvas);

function newCanvas() {
    // clear old canvas
    var x = document.getElementsByClassName('containerCanvas')[0];
    x.parentNode.removeChild(x);

    // create new canvas
    let dimension = document.querySelector('.dimensionInput').value;

    // create containing box
    let containerCanvas = document.createElement('div');
    containerBody.appendChild(containerCanvas);
    containerCanvas.classList.toggle('containerCanvas');

    // create row box
    let containerRow = [];

    for (i = 0; i < dimension; i++) {
        containerRow[i] = document.createElement('div');
        containerCanvas.appendChild(containerRow[i]);
        containerRow[i].classList.toggle('containerRow' + i);
        containerRow[i].classList.toggle('row');
    }

    // create 16 boxes per row
    // box 3 of row 5 = containerRow[5][3]
    for (i = 0; i < dimension; i++) {
        for (j = 0; j < dimension; j++) {
            containerRow[i][j] = document.createElement('div');
            containerRow[i].appendChild(containerRow[i][j]);
            containerRow[i][j].classList.toggle('row' + i + 'box' + j);
            containerRow[i][j].classList.toggle('box');  
        }
    }

    // allow box to detect hover, changes its color on hover
    // add event listener to all boxes
    for (i = 0; i < dimension; i++) {
        for (j = 0; j < dimension; j++) {
            containerRow[i][j].addEventListener('mouseover', addHover)
        }
    }

    // adds an extra class on hover
    function addHover(e) {
        e.target.classList.add('hover');
    }
}