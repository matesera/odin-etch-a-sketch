
let color = "grey";
let click = true;
//create 1 div with a class so that it can be styled by css
function createBoard(size) {
    let boardGrid = document.querySelector('.board');
    
    while (boardGrid.firstChild) {
        boardGrid.removeChild(boardGrid.firstChild);
    }

    boardGrid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    boardGrid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        const divBlock = document.createElement('div');
        divBlock.classList.add('grid-square');
        boardGrid.appendChild(divBlock);
//set up an eventlistener so that when the mouse enters the div it changes color    
        divBlock.addEventListener('mouseover', colorSquare);
    }
}

const resizeButton = document.getElementById('resize-button');
resizeButton.addEventListener('click', () => {
    const gridSizeInput = document.getElementById('grid-size-input');
    const size = parseInt(gridSizeInput.value);

    if (size >= 1 && size <= 100) {
        createBoard(size);
    } else {
        console.log("Choose a number between 1 and 100!");
    }

})

function colorSquare() {
    if(click) {
        this.style.backgroundColor = color;
    }
}

function changeColor(choice) {
    color = choice;
}

function resetBoard() {
    let boardGrid = document.querySelector('.board');
    let divBlocks = boardGrid.querySelectorAll('div');
    divBlocks.forEach((div) => div.style.backgroundColor = "white");
}

document.querySelector("body").addEventListener('click', (e) => {
    if(e.target.tagName != 'BUTTON') {
        click = !click;
    if(click) {
        document.querySelector('.mode').textContent = "Mode: Coloring";
    } else {
        document.querySelector('.mode').textContent = "Mode: Not Coloring";
    }
    }
    
})

createBoard(16);






//make it so that when you hover over a div element it doesn't change immediately to grey, but slighty becomes more dark

//rgb transition steps

//start = rgb(255, 255, 255) //white
//transition1 = rgb(242, 242, 242)
//transition2 = rgb(230, 230, 230) 
//transition3 = rgb(217, 217, 217)
//transition4 = rgb(204, 204, 204)
//transition5 = rgb(191, 191, 191)
//transition6 = rgb(179, 179, 179)
//transition7 = rgb(166, 166, 166)
//transition8 = rgb(153, 153, 153)
//transition9 = rgb(140, 140, 140)
//end = rgb(128, 128, 128) // grey


//resize grid
