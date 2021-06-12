
const playerFactory = (player) => {
    return {player}
}

const playerX = playerFactory('X');
const playerO = playerFactory('O');

const Status = (() => {
    const container = document.getElementById('status');
    let xIsNext = true;
    const message = () => {
        if (xIsNext)
        {
           console.log(xIsNext)
           return container.textContent = `It's player ${playerX.player}'s turn.`
        } else
        {
           console.log(xIsNext)
           return container.textContent = `It's player ${playerO.player}'s turn.`
        }

    };
    const whosNext = (square) => {
        if(!winner(square))
        {
        if (square.textContent == "")
        {
            if (xIsNext)
            {
            square.textContent = playerX.player
            xIsNext = false;
            message();
            } else
            {
            square.textContent = playerO.player
            xIsNext = true;
            message();
            }
        }
        }
    }

    const winner = (square) => {
      

        for (let i = 0; i < gameBoard.boardArray.length; i++)
        {
            for (let j = 0; j < gameBoard.boardArray[i].length; j++)
            {
              
            }
        }
    }

    return  {
        container, 
        xIsNext,
        message,
        whosNext
    };
})();


const gameBoard = (() => {
    const board = document.getElementById('board');
    const boardArray = [[1,2,3],[4,5,6],[7,8,9]];
    const buildBoard = () => {
        for (let i = 0; i < boardArray.length; i++)
        {   
            let row = document.createElement('div');
            row.id = `row ${i}`;
            row.classList.add('row');
            board.appendChild(row);
            for (let j = 0; j < boardArray[i].length; j++)
            {
            let square = document.createElement('div');    
            square.classList.add('square');
            square.id = boardArray[i][j];
            square.addEventListener('click', (e) => {
                Status.whosNext(square);
            })
            row.appendChild(square);
            }
        }
    }
    

    return {
        buildBoard: buildBoard(),
        boardArray

    };

    
})();

console.log(Status.xIsNext)

