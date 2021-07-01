const $ = ($node) => document.querySelector($node)
const $$ = ($nodes) => document.querySelectorAll($nodes)

let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
let doneCount = document.getElementById('doneCount');
let deletedCount = document.getElementById('deletedCount');
let doneCounter = 0;
let delCounter = 0;

addToDoButton.addEventListener('click', function() {

    let inValue = inputField.value.trim();

    const template = `
        <li class="">
            <span class="liText">${inValue}</span>
            <button class="done">Done</button>
            <button class="delete">Delete</button>
        </li>
    `

    if(inValue.length <= 3) {
        // alert("Длина должна быть больше 3");

        function show() {
            let popUp = document.getElementById('popUp');
            popUp.style.visibility = 'visible';
        }
 
        function hide() {
            let popUp = document.getElementById('popUp');
            popUp.style.visibility = 'hidden';
        }

        show();


        setTimeout(function () {
            hide();
            }, 2000);


    }
    else {
        toDoContainer.innerHTML += template
        inputField.value = "";
    }

    let doneBtns = $$('.done');
    let deleteBtns = $$('.delete');
    let liText = $$('.liText')
    let li = $$('li')

    doneBtns.forEach((doneButton, idx) => {
        doneButton.addEventListener('click', function() {

        if (liText[idx].style.textDecoration != "line-through") {
            liText[idx].style.textDecoration = "line-through";

            doneCount.innerText = `Done: ${++doneCounter}`;
            doneButton.style.backgroundColor = "grey";
        }

        
})
    }) 
    
    deleteBtns.forEach((deleteBtn, idx) => {
        deleteBtn.addEventListener('click', function() {
        li[idx].parentNode.removeChild(li[idx]);
        deletedCount.innerText = `Deleted: ${++delCounter}`;
        if (liText[idx].style.textDecoration == "line-through" && doneCounter > 0){
            doneCount.innerText = `Done: ${--doneCounter}`;
        }
})
    })

    
})
