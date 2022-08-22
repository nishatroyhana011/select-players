const selectButtons = document.getElementsByClassName('btn-select');
const players = document.getElementById('players-list');
const playersArray = [];

//function for disable buttons
function disabledButton(btn) {
    btn.disabled = true;
    btn.style.backgroundColor = 'gray';
    btn.style.cursor = 'no-drop';
}

//function for cost summation
function sum(costForPlayer, costForManager, costForCoach) {
    return costForPlayer + costForManager + costForCoach;
}

//player selection
for (let button of selectButtons) {
    button.addEventListener('click', function (event) {

        let playerName = event.target.parentNode.children[0].innerText;

        if (playersArray.length < 5) {
            playersArray.push(playerName);
            let player = document.createElement('li');
            player.innerText = playerName;
            players.appendChild(player);
            disabledButton(event.target);
        } else {
            alert('You have selected 5 players.');
        }
    })
}

//player fee calculation
document.getElementById('btn-player-fee-total').addEventListener('click', function () {

    const playerFee = parseInt(document.getElementById('field-player-fee').value);
    if (isNaN(playerFee) === true || playerFee < 0) {
        alert('Please enter a valid number.');
        document.getElementById('field-player-fee').value = '';
    } else {
        let playersFeeTotal = playersArray.length * playerFee;
        document.getElementById('players-expense').innerText = playersFeeTotal;
    }
})

//total fee calculation
document.getElementById('btn-fee-total').addEventListener('click', function () {

    let playersFeeTotal = parseInt(document.getElementById('players-expense').innerText);
    let managerFee = parseInt(document.getElementById('manager').value);
    let coachFee = parseInt(document.getElementById('coach').value);

    if ((isNaN(managerFee)) || (isNaN(coachFee)) === true || playersFeeTotal < 0 || managerFee < 0 || coachFee < 0) {
        alert('Please enter a valid number.');
        document.getElementById('manager').value = '';
        document.getElementById('coach').value = '';
    } else {
        let totalFee = sum(playersFeeTotal, managerFee, coachFee);
        document.getElementById('total').innerHTML = totalFee;
    }
})

