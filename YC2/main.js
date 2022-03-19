const btnCreate = document.querySelector('.btn-create');
const btnMore = document.querySelector('#btn-more');
const arrayInitialization = document.querySelector('.array-initialization');
const end = document.querySelector('.end');
const sortUp = document.querySelector('#btn-sort-up');
const sortDown = document.querySelector('#btn-sort-down');
const value = document.querySelector('#value');
const located = document.querySelector('#located');


btnCreate.addEventListener('click', tao_mang);

let array = [];
function tao_mang() {
    for (let i = 0; i < 10; i++) {
        array[i] = Math.floor(Math.random() * 100);
    }
    arrayInitialization.innerHTML = array;
    end.innerHTML = array;
    console.log(array);
}

//Get value of selected radio button
//https://stackoverflow.com/questions/15839169/how-to-get-value-of-selected-radio-button-in-javascript
function sap_xep(){
    if (document.getElementById('btn-sort-up').checked) {
        sap_tang();
    } else {
        sap_giam();
    }
}
// function sort up and sort down
function sap_tang() {
    array.sort();
    end.textContent = array;
}
function sap_giam() {
    array.sort().reverse();
    end.innerHTML = array;
}
//Click button sort up or sort down and print result
sortUp.addEventListener('click', sap_xep);
sortDown.addEventListener('click', sap_xep);


btnMore.addEventListener('click', them);
//function them: add elements to array with located value
function them(){
    let newValue = value.value;
    let newLocated = located.value;
    array.splice(newLocated, 0, newValue);
    end.innerHTML = array;
}