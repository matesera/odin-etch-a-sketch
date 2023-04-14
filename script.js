//set up a 16x16 grid of divs usig JavaScript

//create 1 div with a class so that it can be styled by css
for (let i = 0; i < 16; i++) {
    const divContainer = document.querySelector('.container');

    const divBlock = document.createElement('div');
    divBlock.classList.add('div-element');
    divContainer.appendChild(divBlock);
}