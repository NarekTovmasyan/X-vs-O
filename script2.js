let message = document.querySelector(".message");

let btn = document.querySelector(".btn");

let array = [
    "", "", "",
    "", "", "",
    "", "", ""
];

let currentPlayer = "X"; //misht sksuma x@

let gameActive = true; //erb true e karox es xaxal

document.querySelectorAll(".sekcia").forEach(element => {
    return element.addEventListener("click", handleSekciaClick)
});

btn.addEventListener("click", function handleRestartButton() {
    array = [
        "", "", "",
        "", "", "",
        "", "", ""
    ];
    currentPlayer = "X";
    gameActive = true;
    message.innerHTML = currentPlayerTurn();
    document.querySelectorAll(".sekcia").forEach(element => {
        return element.innerHTML = "";
    });
});

function winingMessage() {
    return `Winner is ${currentPlayer}!:`
}

function noWiningMessage() {
    return `No winner!:`
}

function currentPlayerTurn() {
    return `It is ${currentPlayer} turn`
}

message.innerHTML = currentPlayerTurn();

function handleSekciaClick(event) {
    let clickedSekcia = event.target;
    let clickedSekciaIndex = Number(clickedSekcia.getAttribute("index"));
    if (!gameActive || array[clickedSekciaIndex] !== "") {
        return;
    }
    clickedSekcia.innerHTML = currentPlayer;
    array[clickedSekciaIndex] = currentPlayer;
    const arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    let winner = false;

    for (let i = 0; i <= 7; i++) {
        let a = array[arr[i][0]];
        let b = array[arr[i][1]];
        let c = array[arr[i][2]];

        if (a === "" || b === "" || c === "") {
            continue;
        }
        if (a === b && b === c) {
            winner = true;
            break;
        }
    }
    if (winner) {
        message.innerHTML = winingMessage();
        gameActive = false;
        return;
    }
    if (!array.includes("")) {
        message.innerHTML = noWiningMessage();
        return;
    }
    if (currentPlayer === "X") {
        currentPlayer = "O"
    } else {
        currentPlayer = "X"
    }
    currentPlayer.innerHTML = currentPlayerTurn();
}