const selectButtons = document.getElementsByClassName('btn-select');
const players = document.getElementById('players-list');
const playersArray = [];

function disabledButton(btn){
    btn.disabled = true;
    btn.style.backgroundColor = 'gray';
    btn.style.cursor = 'no-drop';
}

//player selection
for(let button of selectButtons){
    button.addEventListener('click', function(event){

        let playerName = event.target.parentNode.children[0].innerText;

        if( playersArray.length < 5 ){           
            playersArray.push(playerName);
            let player = document.createElement('li');
            player.innerText = playerName;
            players.appendChild(player);
            disabledButton(event.target);
        }else{
            alert('You have selected 5 players.');
        }   
    })
}

//player fee calculation
document.getElementById('player-fee-total').addEventListener('click', function(){

    const playerFee = parseInt(document.getElementById('player-fee').value);
    if(isNaN(playerFee)===true){
        alert('Please enter a valid number.');
    }else{
        let playersFeeTotal = playersArray.length * playerFee;
        document.getElementById('player-expense').innerText = playersFeeTotal;
    } 
    document.getElementById('player-fee').value = '';
})

//total fee calculation
document.getElementById('fee-total').addEventListener('click', function(){

    let playersFeeTotal = parseInt(document.getElementById('player-expense').innerText);
    let managerFee = parseInt(document.getElementById('manager').value);
    let coachFee = parseInt(document.getElementById('coach').value);

    if((isNaN(managerFee)) || (isNaN(coachFee)) === true || playersFeeTotal < 0 || managerFee < 0 || coachFee < 0 ){
        alert('Please enter a valid number.');
    }else{
        let totalFee = sum(playersFeeTotal, managerFee, coachFee);
        document.getElementById('total').innerHTML = totalFee;
    }
    document.getElementById('manager').value = '';
    document.getElementById('coach').value = '';
})

function sum(costForPlayer, costForManager , costForCoach){
    return costForPlayer + costForManager + costForCoach;
}