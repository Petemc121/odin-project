
const playerFactory = (player) => {
    return {player}
}

const playerX = playerFactory('X');
const playerO = playerFactory('O');

const Status = (() => {
    const container = document.getElementById('status');
    const xIsNext = true;
    const message = () => {
        if (xIsNext)
        {
           return container.textContent = `It's player ${playerX.player}'s turn.`
        } else
        {
           return container.textContent = `It's player ${playerO.player}'s turn.`
        }
    };

    return  {
        container, 
        xIsNext,
        message: message()};
})();


const gameBoard = (() => {
    const board = document.getElementById('board');
    const buildBoard = () => {
        for (let i = 0; i < 3; i++)
        {   
            let row = document.createElement('div');
            row.id = `row ${i}`;
            row.classList.add('row');
            board.appendChild(row);
            for (let j = 0; j < 3; j++)
            {
            let square = document.createElement('div');    
            square.classList.add('square');
            square.addEventListener('click', (e) => {
                if (Status.xIsNext)
                {
                 square.textContent = playerX.player
                Status.xIsNext = false;
                } else
                {
                 square.textContent = playerO.player
                 Status.xIsNext = true;
                }


            })
            row.appendChild(square);
            }
        }
    }
    

    return {
        buildBoard: buildBoard()
    };

    
})();



console.log(Status.xIsNext)

