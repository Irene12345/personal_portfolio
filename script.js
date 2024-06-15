let meaowing = document.getElementById('meaow');
let catpic = document.getElementById('cat');

function showMeaow() {
    meaowing.style.visibility = 'visible';
}

function hideMeaow() {
    meaowing.style.visibility = 'hidden';
}

catpic.addEventListener('mousedown', showMeaow);


catpic.addEventListener('mouseup', hideMeaow);