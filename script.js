//set up a 16x16 grid of divs usig JavaScript

//create 1 div with a class so that it can be styled by css
const divContainer = document.querySelector('.container');


for (let i = 0; i < 256; i++) {
    const divBlock = document.createElement('div');
    divBlock.classList.add('div-element');
    divContainer.appendChild(divBlock);
}

//set up an eventlistener so that when the mouse enters the div it changes color
//we already have it styled in css, just need to add the class in the eventlistener
const divElement = document.querySelector('.div-element');
divElement.addEventListener('mouseenter', () => {
    divElement.classList.add('div-element:hover');
});

divElement.addEventListener('mouseleave', () => {
    divElement.classList.remove('div-element:hover');
});