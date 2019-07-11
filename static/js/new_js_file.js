/////////////////////// DATA MENAGER IT MIGHT BE A DIFF JS FILE
//////////////// TO FINSIH

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


/////////////////////////////////////////////////// DRAGULA

let board_len = document.getElementsByClassName('my_class').length;

for (let i = 0; i < board_len; i++) {
    dragula([document.getElementsByClassName('left')[i], document.getElementsByClassName('right')[i], document.getElementsByClassName('right2')[i], document.getElementsByClassName('left2')[i]]);
}


/////////////////////NEW BOARD GENERATOR

// function createBoard(object) {
//     let newDiv = document.createElement('div');
//     let mainDiv = document.getElementById('boardsList');
//     newDiv.setAttribute('id', `B00${object.id}`);
//     newDiv.setAttribute('class', "col-md-10 border rounded-lg border-info");
//     newDiv.innerHTML = `
//
//
//             <div id="boardHeader" class="row">
//                 <div id="boardName" class="col-md-9 rounded-lg bg-info">
//                     ${object.title}
//                 </div>
//                 <div id="buttons" class="col-md-2">
//                     <button id="newC001" nclass="btn btn-info btn-sm">+ New card</button>
//                     <button id="btn-hide${object.id}" class="btn btn-info btn-sm"></button>
//                 </div>
//             </div>
//
//
//             <div id="board-main${object.id}" class="row bg">
//
//
//                 <div class="col" align="center">
//                     <div class="col text-center">
//                         New
//                     </div>
//
//
//                 <div class="col" align="center">
//                     <div class="col text-center">
//                         In Progres
//                     </div>
//                     <div id="1_inProgress" class="col text-center rounded-lg bg-info"  style=" min-height: 80px;">
//
//                     </div>
//                 </div>
//
//
//                 <div class="col" align="center">
//                     <div class="col text-center">
//                         Testing
//                     </div>
//                     <div id="1_testing" class="col text-center rounded-lg bg-info"  style=" min-height: 80px;">
//                         CARD 1
//                     </div>
//                 </div>
//
//
//                 <div class="col" align="center">
//                     <div id="1_done" class="col text-center">
//                         Done
//                     </div>
//                     <div class="col text-center rounded-lg bg-info"  style=" min-height: 80px;">
//                         <div>
//                             CARD 1
//                         </div>
//                     </div>
//                 </div>
//
//
//             </div>
//



//     mainDiv.appendChild(newDiv);
//
// }


const toggleBoard = function () {
    let hideDiv = document.getElementById(`board-main`);
    hideDiv.style.display === "" ? hideDiv.style.display = "none" :
        hideDiv.style.display = "";
};

//
// let btnBoard = document.getElementById('c-board');
// btnBoard.addEventListener('click', (e) => {
//     //stworz nowy board
//     let new_data = createEmptyBoard();
//     createBoard(new_data);
//     //wziac id boarda
//     let newId = 'btn-hide' + new_data.id;
//     //przypnij event do nowego boarda
//     let toggleBoardBtn = document.getElementById(newId);
//     toggleBoardBtn.addEventListener('click', () => {
//         toggleBoard(new_data)
//     })
// });

let toggleBoardBtn = document.getElementById('btn-hide');
    toggleBoardBtn.addEventListener('click', toggleBoard);

// const createEmptyBoard = function () {
//     let newId = createNewId();
//
//     let data = {
//         'id': newId,
//         'title': 'costam'
//     };
//     return data
// };

const createNewId = function () {
    /// IT SHOULD BE RANDOM STRING
    ///NUMBER + THIS SHOULD BE SAVE TO DB AS A BOARD ID
    return 'newawesomeid'

};

// let ButtonCreatingCardId = 'newC001';
let ButtonCreatingCard = document.getElementById('newC001');
ButtonCreatingCard.addEventListener('click', (e) => {

    createCard(randomNumber());

});

const addCard = function () {
    //////let newCardId = createNewID();

    let cardData = {
        'board id': 'B001',
        'id': 1,
        'title': 'costam',
        'status': 'status'
    };

    //send_data(cardData);
    return cardData
};

function createCard(number) {
    let newDiv = document.createElement('div');
    let mainDiv = document.getElementById('New');
    newDiv.setAttribute('id', number);
    newDiv.setAttribute('class', "col text-center rounded-lg bg-info");
    mainDiv.appendChild(newDiv);
    newDiv.innerHTML = prompt('Please fill the card');


}

const randomNumber = function(){
    let number = Math.floor(Math.random()* 200)
    return number
};

console.log(randomNumber());


// function editCard(){
//     let theDiv = document.getElementById('C1');
//     theDiv.addEventListener('click', ()=>{
//         theDiv.innerHTML = prompt('Please fill the card')
//     })
// }








////////////////////// NEW CARD GENERATOR

// newC001.addEventListener('click', add_card());
//
// document.getElementById("newC001").addEventListener("click", function(){
//   add_card()
// });
//
//
// function add_card() {
//
//     // let boardId = 001;
//     let title = 'New card';
//     let status = 1;
//     let cardData = {
//         'id' : boardId,
//         'title' : title,
//         'status' : status
//     };
//
//     send_data(cardData)
// }