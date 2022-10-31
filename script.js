// specify dimension = 16
const dimension = 16;

// create containing box
let containerZero = document.createElement('div');
document.body.appendChild(containerZero);
containerZero.classList.toggle('containerZero');

// create row box
let containerRow = [];

for (i = 0; i < 16; i++) {
    containerRow[i] = document.createElement('div');
    containerZero.appendChild(containerRow[i]);
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