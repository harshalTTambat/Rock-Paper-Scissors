
//getting score stored in local storage
// we will get score as JSON object string, 
//need to convet back to javascript object
let score = JSON.parse(localStorage.getItem('scores'));

// if we reset score and refresh the page the previous score should not come 
// then it will show null and not able to find score object
if (score === null) {
    score = {
        wins: 0,
        losses: 0,
        Ties: 0
    };
}

updateScoreEle();

document.querySelector('.js-rock-button')
        .addEventListener('click', () => {
            playGame('Rock');
});

document.querySelector('.js-paper-button')
        .addEventListener('click', () => {
            playGame('Paper');
});

document.querySelector('.js-scissors-button')
        .addEventListener('click', () => {
            playGame('Scissors');
});

function playGame(playerMove) {
    const compMove = pickComputerMove();
    result = '';

    if (playerMove === compMove) {
        result = 'Tie.'
    }

    else if (playerMove === 'Scissors') {
        if (compMove === 'Rock') {
            result = 'You Lose.';
        }
        else if (compMove === 'Paper') {
            result = 'You Win.';
        }
    }

    else if (playerMove === 'Paper') {
        if (compMove === 'Rock') {
            result = 'You Win.';
        }
        else if (compMove === 'Scissors') {
            result = 'You Lose.';
        }
    }

    else if (playerMove === 'Rock') {
        if (compMove === 'Paper') {
            result = 'You Win.';
        }
        else if (compMove === 'Scissors') {
            result = 'You Lose.';
        }
    }

    if (result === 'You Win.') {
        score.wins += 1;
    }
    else if (result === 'You Lose.') {
        score.losses += 1;
    }
    else if (result === 'Tie.') {
        score.Ties += 1;
    }

    // storing the score inside local storage, then if we refresh it will show 
    // previous scores also
    // using localStorage class methods
    // localStorage.setItem('massage', 'value as string') 
    // convering javascript object score to JSON string object
    localStorage.setItem('scores', JSON.stringify(score));

    updateScoreEle();

    document.querySelector('.js-result').
        innerHTML = `Result : ${result}`;


    document.querySelector('.js-moves').
        innerHTML = ` You picked <img src="${playerMove}.png" class="move-icon">, 
        computer picked <img src="${compMove}.png" class="move-icon">`;


}

function updateScoreEle() {
    document.querySelector('.js-scores').
        innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Tie: ${score.Ties}`;
}

function pickComputerMove() {
    const randomNum = Math.random();
    let compMove = '';

    if (randomNum >= 0 && randomNum < 1 / 3) {
        compMove = 'Rock';
    }
    else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
        compMove = 'Paper';
    }
    else if (randomNum >= 2 / 3 && randomNum < 1) {
        compMove = 'Scissors';
    }

    return compMove;
}

