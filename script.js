

//create 1 div with a class so that it can be styled by css
function createBoard(size) {
    const boardGrid = document.querySelector('.board');

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
        divBlock.addEventListener('mouseover', () => {
            divBlock.style.backgroundColor = "grey";
        });
    

        const eraserButton = document.getElementById('eraser-button');
        eraserButton.addEventListener('click', () => {
            divBlock.addEventListener('mouseover', () => {
                divBlock.style.backgroundColor = "white";
            });
        });
        

        const colorButton = document.getElementById('color-button');
        colorButton.addEventListener('click', () => {
            divBlock.addEventListener('mouseover', () => {
                divBlock.style.backgroundColor = "grey";
            });
        });

        const resetButton = document.getElementById('reset-button');
        let divBlocks = boardGrid.querySelectorAll('div');
        resetButton.addEventListener('click', () => {
            divBlocks.forEach((div) => divBlock.style.backgroundColor = "white");
        })
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
