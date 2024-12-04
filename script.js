document.addEventListener('DOMContentLoaded', () => {

    var scoreDict = {
        'user1': 100,
        'user2': 100,
        'user3': 100,
    }
    var currentCharacter = '';
    var currentUsername = '';
    var currentScore = 0;

    const pageLogin = document.getElementById('pageLogin');
    const managerButton = document.getElementById('manager');
    const userButton = document.getElementById('user');

    const pageUsername = document.getElementById('pageUsername');
    const selectUsername = document.getElementById('usernames');
    const usernameConfirm = document.getElementById('usernameConfirm');
    const usernameReturn = document.getElementById('usernameReturn');

    const pageManager = document.getElementById('pageManager');
    const managerDisplay = document.getElementById('managerScore');
    const decreaseButton = document.getElementById('decrease');
    const resetButton = document.getElementById('reset');
    const managerReturn = document.getElementById('managerReturn');
    
    const pageUser = document.getElementById('pageUser');
    const userDisplay = document.getElementById('userScore');
    const userReturn = document.getElementById('userReturn');

    managerButton.addEventListener('click', () => {
        changePage();
        pageUsername.style.display = 'block';
        currentCharacter = 'manager';
    });

    userButton.addEventListener('click', () => {
        changePage();
        pageUsername.style.display = 'block';
        currentCharacter = 'user'
    });

    usernameConfirm.addEventListener('click', () => {
        changePage();
        currentUsername = selectUsername.options[selectUsername.selectedIndex].value;
        currentScore = scoreDict[currentUsername];
        if (currentCharacter == 'manager') {
            managerDisplay.textContent = currentScore;
            pageManager.style.display = 'block';
        } else if (currentCharacter == 'user') {
            userDisplay.textContent = currentScore;
            pageUser.style.display = 'block';
        } else {
            pageUsername.style.display = 'block';
        }        
    });

    usernameReturn.addEventListener('click', () => {
        changePage();
        pageLogin.style.display = 'block';
    });

    decreaseButton.addEventListener('click', () => {
        currentScore--;
        scoreDict[currentUsername] = currentScore;
        managerDisplay.textContent = currentScore;
    });

    resetButton.addEventListener('click', () => {
        currentScore = 100;
        scoreDict[currentUsername] = currentScore;
        managerDisplay.textContent = currentScore;
    });

    managerReturn.addEventListener('click', () => {
        changePage();
        pageUsername.style.display = 'block';
    });

    userReturn.addEventListener('click', () => {
        changePage();
        pageUsername.style.display = 'block';
    });

    function changePage(){
        document.querySelectorAll('.page').forEach(page => {
            page.style.display = 'none';
        });
    };

});
