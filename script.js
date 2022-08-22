const selectButtons = document.getElementsByClassName('btn-select');
for(let button of selectButtons){
    button.addEventListener('click', function(event){
        console.log(event.target.parentNode.childern[0].innerHtml);
    })
}