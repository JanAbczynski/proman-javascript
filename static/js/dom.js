// It uses data_handler.js to visualize elements
import { dataHandler } from "./data_handler.js";
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
        btn.addEventListener('click', function () {
            dataHandler.createNewBoard('lol', dom.showBoards)
        })
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

        this._appendToElement(document.querySelector('#boards'), outerHtml);
    },
    loadCards: function (boardId) {
        // retrieves cards and makes showCards called
        dataHandler.getCardsByBoardId(boardId, function(){
            dom.showCards(cards);})

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
    // here comes more features
};
