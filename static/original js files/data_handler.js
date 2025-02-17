// this object contains the functions which handle the data and its reading/writing
// feel free to extend and change to fit your needs

// (watch out: when you would like to use a property/function of an object from the
// object itself then you must use the 'this' keyword before. For example: 'this._data' below)
import { dom } from "./dom.js";
import { sampleData } from "./sample_data.js"


export let dataHandler = {
    _data: {}, // it contains the boards and their cards and statuses. It is not called from outside.
    _api_get: function (url, callback) {
        // it is not called from outside
        // loads data from API, parses it and calls the callback with it

        fetch(url, {
            method: 'GET',
            credentials: 'same-origin'
        })
        .then(response => response.json())  // parse the response as JSON
        .then(json_response => callback(json_response));  // Call the `callback` with the returned object
    },
    _api_post: function (url, data, callback) {
        // it is not called from outside
        // sends the data to the API, and calls callback function

        fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => callback(response))
            .catch(error => console.error('Error:', error));

        dataHandler._api_post('/board/add', board, function (response) {
            callback([response])})

    },
    init: function () {
        // let data_div = document.getElementById('boards');
        // let list_data = document.getElementById('lool');
        let li_data = document.getElementsByTagName('li');
        let arr = Array.from(li_data);
        console.log(dataHandler._data);
        // let new_data = dataHandler._data.push({id: "3", title: "Board 3"})
        // this._api_get('/get-boards', (response) => {
        //     let string_data = JSON.stringify(response);
        //     console.log(string_data)});
        let new_data = dataHandler._data.push({id: "3", title: "Board 3"});
        dataHandler._api_post('/board/add', new_data)



    },
    getBoards: function (callback) {
        // the boards are retrieved and then the callback function is called with the boards

        // Here we use an arrow function to keep the value of 'this' on dataHandler.
        //    if we would use function(){...} here, the value of 'this' would change.
        this._api_get('/get-boards', (response) => {
            this._data = response;
            callback(response);
        });
    },
    getBoard: function (boardId, callback) {
        // the board is retrieved and then the callback function is called with the board
    },
    getStatuses: function (callback) {
        // the statuses are retrieved and then the callback function is called with the statuses
    },
    getStatus: function (statusId, callback) {
        // the status is retrieved and then the callback function is called with the status
    },
    getCardsByBoardId: function (boardId, callback) {
        // the cards are retrieved and then the callback function is called with the cards
        // this._api_get("/get-cards/"+ boardId, (response) => {
        //     this._data = response;
        //     callback(response);
        // });
    },
    getCard: function (cardId, callback) {
        // the card is retrieved and then the callback function is called with the card
    },
    createNewBoard: function (boardTitle, callback) {
        // creates new board, saves it and calls the callback function with its data
        let board = {
            'name': boardTitle
        };
        dataHandler._api_post('/board/add', board, function (response) {
            callback([response])


        });


    dom._appendToElement(document.querySelector('#lool'), outerHtml);


    },
    createNewCard: function (cardTitle, boardId, statusId, callback) {
        // creates new card, saves it and calls the callback function with its data
    }
    // here comes more features
};

