

const container = document.querySelector('.container');

for(let i = 1; i <= 256; i++) {
    let makeDiv = document.createElement('div');
    //makeDiv.innerText = i;
    container.appendChild(makeDiv);
}