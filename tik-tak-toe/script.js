


let board = ["", "", "", "", "", "", "", "", ""];
let currentplayer = "x";
let cells = document.querySelectorAll('.cell');
let resetbutton = document.querySelector('#reset');
let messageelement = document.querySelector('#message');


cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
        if (board[index] === "" && !isGameOver()) {
            board[index] = currentplayer;
            cell.classList.add(currentplayer.toLowerCase());
            cell.innerHTML = currentplayer;
            if (isGameOver()) {
                messageelement.innerHTML = currentplayer + " wins!";
                cells.forEach((cell) => cell.removeEventListener("click", handlecellclick));
            }
            else if (!board.includes("")) {
                messageelement.innerHTML = "It's  a draw!";
            }
            else {
                currentplayer = currentplayer === "x" ? "0" : "x";
                messageelement.innerHTML = currentplayer + "'s turn"
            }

        }
    });
});
resetbutton.addEventListener("click", () => {
    board = ["", "", "", "", "", "", "", "", ""];
    currentplayer = "x";
    cells.forEach((cell) => {
        cell.classList.remove("x", "0");
        cell.innerHTML = "";
        
    });


    messageelement.innerHTML = "x's turn";
    cells.forEach((cell) => cell.addEventListener("click", handlecellclick));
    
})
function isGameOver() {
    const winningcombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    return winningcombos.some((combo) => {
        return (
            board[combo[0]] !== "" &&
            board[combo[0]] === board[combo[1]] &&
            board[combo[1]] === board
            [combo[2]]
        );
    });
}
function handlecellclick() {
    console.log("cell clicked");
}