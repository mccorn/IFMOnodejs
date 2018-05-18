var par1 = 0;
var par2 = 0;
var messagestr = 'abc123cba$#@!?20AC';

var arr_1 = [1, 1, 2, 3, 5, 8, 13, 21];
var arr_2 = [100, 2, 32, 5, 8, 113, 21];

let idTimer;
let count = 0;



let product = {
    article: '232300',
    photoURL: 'img/choco.jpg',
    properties: [12, 23, 'sweety'],
};


function testTask_1() {
    let placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = "";
    for (var i = 0; i < 4; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'square');
        div.onclick = toggleSquaresClass;
        placeholder.append(div);    
    }
};

function toggleSquaresClass(event) {
    this.classList.toggle('square-actived');
    this.classList.toggle('square');
};


let counter = getCounter(); 

function testTask_2(event) {
    event.target.textContent = 'Task #2: clickCounter() : ' + counter();
};

function getCounter() {
    let count = 0;
    return function() {
        return ++count;
    };
};

function testTask_3() {
    
};

function testTask_4() {
    
};