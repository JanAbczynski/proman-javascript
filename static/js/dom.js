// It uses data_handler.js to visualize elements
import { dataHandler } from "./data_handler.js";
import { sampleData} from "./sample_data.js";

import { sampleData } from "./sample_data.js"
export let dom = {
    _appendToElement: function (elementToExtend, textToAppend, prepend = false) {
        // function to append new DOM elements (represented by a string) to an existing DOM element
        let fakeDiv = document.createElement('div');
        fakeDiv.innerHTML = textToAppend.trim();

        for (let childNode of fakeDiv.childNodes) {
            if (prepend) {
                elementToExtend.prependChild(childNode);
            } else {
                elementToExtend.appendChild(childNode);
            }
        }

        return elementToExtend.lastChild;
    },
    init: function () {
        let btn = document.getElementById('new_board');
        btn.addEventListener('click', dataHandler.createNewBoard);
        dom.loadCards()
    },
    loadBoards: function () {
        // retrieves boards and makes showBoards called
        dataHandler.getBoards(function(boards){
            dom.showBoards(boards);
            dataHandler.init();

        });
    },
    showBoards: function (boards) {
        // shows boards appending them to #boards div
        // it adds necessary event listeners also

        let boardList = '';
        for(let board of boards){
            boardList += `
                <li class="cards_li">${board.title}</li>
            `;
        }

        const outerHtml = `
            <ul class="board-container" id="lool">
                ${boardList}
            </ul>
        `;

        //this._appendToElement(document.querySelector('#boards'), outerHtml);
    },

    loadCards: function (boardId) {
        // let load = document.getElementById("saveCards");
        let samData = sampleData;
        // let samData = { "name":"John", "age":30, "city":"New York"};
        // var samData={"name":"binchen"};
        // JSON.stringify(j);
        sendData(samData);
        // let samData = [ "John", "Peter", "Sally", "Jane" ];
        // let jj = JSON.stringify(samData);
        // console.log(jj);
        // load.addEventListener("click", function () {
            // let par = document.getElementById("xxx");
            // console.log(samData.boards[1].id);
            // par.innerHTML= samData.boards[1].id;
            // sendData(samData);
            // console.log(samData)
        // })
    },
    showCards: function (cards) {
             // shows the cards of a board
        // it adds necessary event listeners also
        let cardsList = '';
        for(let card of cards){
            cardsList += `
                <li>${card.title}</li>
            `;
        }

        const outerHtml = `
            <ul class="cards-container" id="lool">
                ${cards}
            </ul>
        `;

        this._appendToElement(document.querySelector('.cards_li'), outerHtml);
    },



};





function sendData(samData) {
    console.log(samData)
    var dataexp = 4;


//     $.post( "/savedata", {
//     javascript_data: dataexp
// });


//     $.ajax({
//     dataType: "json",
//     url: 'https://api.github.com/repos/atom/atom',
//     success: function(response) {
//         console.log(response['stargazers_count'])
//     }
// });

    fetch('/save2', {
                  method: 'POST', // or 'PUT'
                  body: JSON.stringify(samData), // data can be `string` or {object}!
                  headers:{
                    'Content-Type': 'application/json'
                  }
                })
        .then((fetch_result)=>{
            console.log(samData);
            return fetch_result;
        })
        .catch(()=> {})

    /*
    fetch('/save2')  // set the path; the method is GET by default, but can be modified with a second parameter
        .then((response) =>
            response + "costam"

        ).then((ro)=>
        {
            ro = ro + " costam2";
            console.log(ro);
            return ro;
        })
        */

    // parse JSON format into JS object
        // .then((data) => {
        //     console.log(data);
        //f })
}



//     var request = new XMLHttpRequest();  // instantiate a new Request
//     request.addEventListener('load', function () { // add an event listener to the load event of the request
//         let responseData = JSON.parse(this.response);  // parse JSON format into JS object
//         console.log('responseData: ', typeof(responseData));
//      });
//     request.open('POST', '/savedata');  // set the method and the path
//     request.send(JSON.stringify(samData));  // actually fire the Request
// }




// $(document).ready(function() {
//     $('form').on('submit', function(event) {
//         $.ajax({
//             data : {
//                 name : $('#nameInput').val(),
//                 email : $('#emailInput').val()
//             },
//             type : 'POST',
//             url : '/process'
//         })
//         .done(function(data) {
//             if (data.error) {
//                 $('#errorAlert').text(data.error).show();
//                 $('#successAlert').hide();
//             }
//             else if(data.dupsko) {
//                 $('#errorAlert').text('DUPSKO').show();
//                 $('#successAlert').hide();
//
//             }
//             else {
//                 $('#successAlert').text(data.name).show();
//                 $('#errorAlert').hide();
//             }
//         });
//         event.preventDefault();
//     });
// });