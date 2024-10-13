//ADD BUTTON
const borderContainer = document.querySelector('.border-container');
const button = document.createElement('button');
button.innerText = "Change Grid";
button.classList.add('change-grid');

//ADD FORM INPUT
const formInput = document.createElement('form');
const inputField = document.createElement('input');
inputField.setAttribute('type', 'text');
inputField.setAttribute('placeholder', 'Max Grid = 100');
formInput.appendChild(inputField);

//ADD CONTAINER BUTTON & INPUT
const smallContainer = document.createElement('div');
smallContainer.classList.add('small-container');
borderContainer.insertAdjacentElement('beforebegin', smallContainer);
smallContainer.appendChild(formInput);
smallContainer.appendChild(button);

const container = document.querySelector('.container');

//Create a grid box
// for(let i = 0; i < (16 * 16); i++) {
//     const createDiv = document.createElement('div');
//     createDiv.classList.add('boxs');
//     container.appendChild(createDiv);
// }




//Create function to made custom grid
function createGrid(grid) {
    // grid = inputField.value;
    // inputField.value = '';


    for(let i = 0; i < (grid * grid); i++) {
        const createDiv = document.createElement('div');
        createDiv.classList.add('boxs');
        container.appendChild(createDiv);
        createDiv.style.width = (498 / grid) + 'px';
        createDiv.style.height = (498 / grid) + 'px';
    }


}
