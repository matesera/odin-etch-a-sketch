//set up a 16x16 grid of divs usig JavaScript

//create 1 div with a class so that it can be styled by css
const boardGrid = document.querySelector('.board');
boardGrid.style.gridTemplateColumns = 'repeat(16, 1fr)';
boardGrid.style.gridTemplateRows = 'repeat(16, 1fr)';


for (let i = 0; i < 256; i++) {
    const divBlock = document.createElement('div');
    divBlock.classList.add('grid-square');
    boardGrid.appendChild(divBlock);

//set up an eventlistener so that when the mouse enters the div it changes color    
    divBlock.addEventListener('mouseover', () => {
        divBlock.style.backgroundColor = "grey";
    });
}







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
