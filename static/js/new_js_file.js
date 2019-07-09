////////HIDING CERTAIN CARD ELEMENTS
let btnHide = document.getElementById('btn-hide');
let hideDiv = document.getElementById('to-hide');
const createCard = function () {
    hideDiv.style.display === "block" ? hideDiv.style.display = "none" :
hideDiv.style.display = "block";
};
btnHide.addEventListener('click', createCard);