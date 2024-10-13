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

    //Change opacity when mouse hover
    const boxs = document.querySelectorAll('.boxs');

    boxs.forEach(function(box) {
        box.addEventListener('mouseenter', function(e){

            const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
            const r = randomBetween(0, 255);
            const g = randomBetween(0, 255);
            const b = randomBetween(0, 255);
            const rgb = `rgb(${r},${g},${b})`; // Collect all to a css color string     

            e.target.style.backgroundColor = rgb;
        });
    });

}
