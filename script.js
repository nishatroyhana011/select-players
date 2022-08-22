const selectButtons = document.getElementsByClassName('btn-select');
const players = document.getElementById('players-list');
const playersArray = [];

function disabledButton(btn){
    btn.disabled = true;
    btn.style.backgroundColor = 'gray';
    btn.style.cursor = 'no-drop';
}
for(let button of selectButtons){
    button.addEventListener('click', function(event){

        let playerName = event.target.parentNode.children[0].innerText;
        playersArray.push(playerName);

        if( playersArray.length <= 5 ){
            let player = document.createElement('li');
            player.innerText = playerName;
            players.appendChild(player);
            disabledButton(event.target);
        }else{
            alert('You have selected 5 players.');
        }
        
    })
}