function createPallete() {
    const colorPallete = document.getElementById("color-palette");
    for (let index = 0; index < 4; index += 1) {
        const makeSquare = document.createElement('td');
        makeSquare.className = "color";
        colorPallete.appendChild(makeSquare);
    }
}

function generateRandomColor() {
    const r = Math.ceil(Math.random() * 255);
    const g = Math.ceil(Math.random() * 255);
    const b = Math.ceil(Math.random() * 255);
    const color = `rgb(${r}, ${g}, ${b})`;
    return color;
}

function colorSquaresPallete() {
    const colors = ['black', generateRandomColor(), generateRandomColor(), generateRandomColor()];
    const squares = document.getElementsByClassName('color');
    for (let index = 0; index < squares.length; index += 1) {
        squares[index].style.backgroundColor = colors[index];
    }
    squares[0].className = 'color selected';
}

function criaBoard(number) {
    const pixelBoard = document.getElementById('pixel-board');
    for (let index = 0; index < number; index += 1) {
        const row = document.createElement('tr');
        pixelBoard.appendChild(row);
        for (let index2 = 0; index2 < number; index2 += 1) {
            const collum = document.createElement('td');
            collum.className = 'pixel';
            const lastRow = pixelBoard.lastChild;
            lastRow.appendChild(collum);
        }
    }
}

function selecionarColor(click) {
    const event = click.target;
    if (event.className === 'color') {
        const currentSelected = document.getElementsByClassName('selected')
        currentSelected[0].className = 'color';
        event.className = 'color selected';
    }
}

const colorSelecionada = document.getElementById('color-palette');
colorSelecionada.addEventListener('click', selecionarColor);

function getColorSelected() {
    const classSelected = document.getElementsByClassName('selected');
    const colorSelect = window.getComputedStyle(classSelected[0], null).getPropertyValue('background-color');
    return colorSelect;
}

function pintaCaixa(click) {
    const event = click.target;
    const colorSelecionada = getColorSelected();
    event.style.backgroundColor = colorSelecionada;
}

const pixelSelect = document.getElementById('pixel-board');
pixelSelect.addEventListener('click', pintaCaixa);

function limparCaixa() {
    const board = document.getElementsByClassName('pixel');
    for (let index = 0; index < board.length; index += 1) {
        board[index].style.backgroundColor = 'white';
    }
}

function removeTodosSquares() {
    const removeSquares = document.getElementById('pixel-board');
    while (removeSquares.firstChild) {
        removeSquares.removeChild(removeSquares.lastChild);
    }
}

function validoBoard() {
    const numberOfInput = document.querySelector('#board-size').value;
    if (numberOfInput === '') {
        alert('Board inválido!');
        return false;
    }
    return true;
}

function fazBoard() {
    let numberOfInput = document.querySelector('#board-size').value;
    if (validoBoard()) {
        if (numberOfInput < 5) {
            numberOfInput = 5;
            alert('Tamanho mínimo do Board: 5px');
            criaBoard(numberOfInput);
        } else if (numberOfInput > 50) {
            alert('Tamanho máximo do Board: 50px');
            numberOfInput = 50;
            criaBoard(numberOfInput);
        }
        removeTodosSquares();
        criaBoard(numberOfInput);
    }
}

function loadPage() {
    createPallete();
    colorSquaresPallete();
    criaBoard(5);
    limparCaixa();
}

window.onload = loadPage;