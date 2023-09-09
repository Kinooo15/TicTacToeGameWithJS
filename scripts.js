const tiles = document.querySelectorAll('.tile');
let currentPlayer = 'X';
let gameOver = false;

tiles.forEach(tile => {
    tile.addEventListener('click', () => {
        if (!tile.textContent && !gameOver) {
            tile.textContent = currentPlayer;
            tile.classList.add(currentPlayer === 'X' ? 'x' : 'o');
            
            if (checkWin()) {
                alert(currentPlayer + ' is the winner');
                gameOver = true;
            } else if (isBoardFull()) {
                alert('The match is a draw');
                gameOver = true;
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    });
});

function checkWin() {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (tiles[a].textContent && tiles[a].textContent === tiles[b].textContent && tiles[a].textContent === tiles[c].textContent) {
            tiles[a].classList.add('win');
            tiles[b].classList.add('win');
            tiles[c].classList.add('win');
            return true;
        }
    }

    return false;
}

function isBoardFull() {
    return [...tiles].every(tile => tile.textContent);
}
