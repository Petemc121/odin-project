
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
          
           return container.textContent = `It's player ${playerX.player}'s turn.`
        } else
        {
          
           return container.textContent = `It's player ${playerO.player}'s turn.`
        }

    };
    const whosNext = (square) => {

       
        const block = document.querySelector('#block');

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
        
        if (winner())
        {
            block.style.display = 'block';
           return
           
        }

    
        
       


    }

    const winner = () => {
      
        const winningPatterns = 
        [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]
        const squares = document.getElementsByClassName('square');
        let xPositions = [];
        let oPositions = [];
        squaresFilled = 0;

        for (let i = 0; i < squares.length; i++)
        {
            if (squares[i].textContent == "X")
            {
                xPositions.push(parseInt(squares[i].id));
                squaresFilled++;
            } else 
            if (squares[i].textContent == "O")
            {
                oPositions.push(parseInt(squares[i].id));
                squaresFilled++;
            }
        }


     
    
        for (let i = 0; i < winningPatterns.length; i++)
        {
        

           if (xPositions.includes(winningPatterns[i][0]) == true && xPositions.includes(winningPatterns[i][1]) == true && xPositions.includes(winningPatterns[i][2]) == true)
           {
                container.textContent = `${playerX.player} wins.`
                return true;
           }

           if (oPositions.includes(winningPatterns[i][0]) == true && oPositions.includes(winningPatterns[i][1]) == true && oPositions.includes(winningPatterns[i][2]) == true)
           {
                container.textContent = `${playerO.player} wins.`
                return true;
           }
           
        }

        if (squaresFilled == 9)
        {
            container.textContent = "Draw!"
            block.style.display = "block";
            return false
        }

           return false;

    }

    return  {
        container, 
        xIsNext,
        message,
        whosNext,
        winner
    };
})();


const gameBoard = (() => {
    const board = document.getElementById('board');
    const reset = document.querySelector('#reset');
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
            square.addEventListener('click', () => {
                Status.whosNext(square)})
            row.appendChild(square);
            }
        }
    }

    reset.addEventListener('click', () => {
        window.location.reload();
    })
    

    return {
        buildBoard: buildBoard(),
        boardArray

    };

    
})();

