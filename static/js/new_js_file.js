////////HIDING CERTAIN CARD ELEMENTS

let board_len = document.getElementsByClassName('my_class').length;

for (let i=0; i<board_len; i++){
    dragula([document.getElementsByClassName('left')[i], document.getElementsByClassName('right')[i],  document.getElementsByClassName('right2')[i],  document.getElementsByClassName('left2')[i]]);
}

let btnHide = document.getElementById('btn-hide');
let hideDiv = document.getElementById('to-hide');
const createCard = function () {
    hideDiv.style.display === "block" ? hideDiv.style.display = "none" :
hideDiv.style.display = "block";
};
btnHide.addEventListener('click', createCard);