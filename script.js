document.addEventListener('DOMContentLoaded', () => {

    var scoreDict = {
        'user1': 100,
        'user2': 100,
        'user3': 100,
    }
    var currentCharacter = '';
    var currentUserId = '';
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
    const managerPromptUpper = document.getElementById('managerPromptUpper')
    const managerDisplay = document.getElementById('managerScore');
    const decreaseButton = document.getElementById('decrease');
    const resetButton = document.getElementById('reset');
    const managerReturn = document.getElementById('managerReturn');
    
    const pageUser = document.getElementById('pageUser');
    const userPromptUpper = document.getElementById('userPromptUpper')
    const userDisplay = document.getElementById('userScore');
    const userPromptLower = document.getElementById('userPromptLower')
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
        currentUserId = selectUsername.options[selectUsername.selectedIndex].value;
        currentUsername = selectUsername.options[selectUsername.selectedIndex].textContent;
        currentScore = scoreDict[currentUserId];

        if (currentCharacter == 'manager') {
            managerDisplay.textContent = currentScore;
            pageManager.style.display = 'block';
            managerPromptUpper.textContent = `${currentUsername}目前的信用分是：`;
        } else if (currentCharacter == 'user') {
            userDisplay.textContent = currentScore;
            pageUser.style.display = 'block';
            userPromptUpper.textContent = `${currentUsername}目前的信用分是：`;

            if (currentScore < 95) {
                userDisplay.style.color = 'red';
                userPromptLower.textContent = `${currentUsername}不能使用宿舍区卫生间！`;
                userPromptLower.style.color = 'red';
            } else if (currentScore < 97) {
                userDisplay.style.color = 'orange';
                userPromptLower.textContent = `${currentUsername}在宿舍区只能使用一楼卫生间。`;
                userPromptLower.style.color = 'orange';
            } else {
                userDisplay.style.color = 'green';
                userPromptLower.textContent = `${currentUsername}可以自由使用所有卫生间～`;
                userPromptLower.style.color = 'green';
            }

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
        scoreDict[currentUserId] = currentScore;
        managerDisplay.textContent = currentScore;
    });

    resetButton.addEventListener('click', () => {
        currentScore = 100;
        scoreDict[currentUserId] = currentScore;
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
