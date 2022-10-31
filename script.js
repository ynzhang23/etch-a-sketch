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
    containerRow[i].classList.toggle('containerRow');
}

// create grids * 16 in row box
// repeat row box 16 times