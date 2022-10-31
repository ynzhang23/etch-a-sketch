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
}

// create grids * 16 in row box
// box 3 of row 5 = containerRow[5][3]
for (i = 0; i < 16; i++) {
    for (j = 0; j < 16; j++) {
        containerRow[i][j] = document.createElement('div');
        containerRow[i].appendChild(containerRow[i][j]);
        containerRow[i][j].classList.toggle('row' + i + 'box' + j);
        containerRow[i][j].classList.toggle('box');  
    }
}

// repeat row box 16 times