let element = document.getElementById('new_board_btn');
element.addEventListener("click", residentsClick);

let save_btn = document.getElementById('save_btn');
save_btn.addEventListener("click", test_get);

let test_post_btn = document.getElementById('test_post_btn');
test_post_btn.addEventListener("click", test_post);

function residentsClick() {
    $("#residents_modal").modal('show');
}

function test_get() {
    let boardName = document.getElementById('inputBoardName').value;

    fetch("http://127.0.0.1:5000/get_test")
        .then(resp => resp.json())
        .then(resp => {
                     console.log(resp);
    })

   /* $.ajax('/add-board' , {
    method: 'POST',
    data: {
        boardName: boardName
    }
    })*/

    // .then(
    //     function success(name) {
    //         if (name !== newName) {
    //             alert('Something went wrong.  Name is now ' + name);
    //         }
    //     },
    //
    //     function fail(data, status) {
    //         alert('Request failed.  Returned status of ' + status);
    //     }
    // );
}

function test_post(){
fetch("http://127.0.0.1:5000/post_test", {
        method: "post",
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify({message: "Hello world"})
    })
    .then(res => res.json())
    .then(res => {
         console.log("post test result:");
         console.log(res);
     })

}