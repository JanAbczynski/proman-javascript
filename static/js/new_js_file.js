////////HIDING CERTAIN CARD ELEMENTS
let btnHide = document.getElementById('btn-hide');
let hideDiv = document.getElementById('to-hide');
const createCard = function () {
    hideDiv.style.display === "block" ? hideDiv.style.display = "none" :
hideDiv.style.display = "block";
};
btnHide.addEventListener('click', createCard);



// newC001.addEventListener('click', add_card());

document.getElementById("newC001").addEventListener("click", function(){
  add_card()
});


function add_card() {

    let boardId = 001;
    let title = 'New card';
    let status = 1;
    let cardData = {
        'id' : boardId,
        'title' : title,
        'status' : status
    };

    send_data(cardData)
}



function send_data(cardData) {
    console.log(cardData);
    fetch('/addCard', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(cardData), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((fetch_result) => {
            console.log('returned', cardData);
            return fetch_result;
        })
        .catch(() => {
        })
}