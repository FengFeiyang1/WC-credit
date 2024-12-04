document.addEventListener('DOMContentLoaded', () => {

    let score = 0;


    const scoreDisplay = document.getElementById('score');


    // const increaseButton = document.getElementById('increase');


    const decreaseButton = document.getElementById('decrease');


    const resetButton = document.getElementById('reset');


    const customScoreInput = document.getElementById('custom-score');


    const setScoreButton = document.getElementById('set-score');


    // increaseButton.addEventListener('click', () => {


    //     score++;


    //     scoreDisplay.textContent = score;


    // });


    decreaseButton.addEventListener('click', () => {


        score--;


        scoreDisplay.textContent = score;


    });


    resetButton.addEventListener('click', () => {


        score = 100;


        scoreDisplay.textContent = score;


    });


    setScoreButton.addEventListener('click', () => {


        const customScore = parseInt(customScoreInput.value);


        if (!isNaN(customScore)) {


            score = customScore;


            scoreDisplay.textContent = score;


        }


    });


});
