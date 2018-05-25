let product = {
    article: '232300',
    photoURL: 'img/choco.jpg',
    properties: [12, 23, 'sweety'],
};

// !!! Task #1: Product() and BasketProducts():: Prototype-style

function Product(somename, someprice) {
    this._name = somename || 'Product._name';
    this._price = someprice || 1000;  
}

Product.prototype.toPrint = function() {
    return `Product() {_name: "${this._name}", _price: ${this._price} $}`;
}

function BasketProducts() {
    this.productsArray = []; 
};

BasketProducts.prototype.getSize = function() {
    return this.productsArray.length;
};

BasketProducts.prototype.toPrint = function() {
    let arrlength = this.productsArray.length; 
    let result = '';
    for (let i = 0; i < arrlength; i++) {
        result += i + ') ' +  this.productsArray[i].toPrint() + '\n ';
    };
    return result;
};

BasketProducts.prototype.addProduct = function() {
    if (arguments[0] instanceof Product) {
        this.productsArray.push(arguments[0]);
    };   
};

BasketProducts.prototype.getTotal = function() {
    let arrlength = this.productsArray.length;
    let result = 0;
    for (let i = 0; i < arrlength; i++) {
        result += this.productsArray[i]._price;
    }
    return result;
};

let water = new Product('water',10);
let choco = new Product();
let basket_1 = new BasketProducts();
basket_1.addProduct(choco);
basket_1.addProduct(water);


// ^^^ Task #1: Product() and BasketProducts():: Prototype-style


// !!! Task #2: Human() and Student():: Prototype-style
function Human() {
    this._name = arguments[0] || 'Human._name';
    this._age = arguments[1] || 0;
    this._sex = arguments[2] || 'W';
    this._hobbies = arguments[3] || [];
};

Human.prototype.toString = function() {
    let resstr = 'Human: ';
    for (key in this) {
        if (typeof(this[key]) !== 'function') resstr += `[${key}: ${this[key].toString()}], `;
    }
    return resstr.slice(0, -2);
};

function Student() {
    Human.call(this, ...arguments);
    this._university = arguments[4] || 'Student._university';  
};

Student.prototype.toString = function() {
    let resstr = 'Student: ';
    for (key in this) {
        if (typeof(this[key]) !== 'function') resstr += `[${key}: ${this[key].toString()}], `;
    }
    return resstr.slice(0, -2);
};

Student.prototype.__proto__ = Human.prototype;

//let studentSasha = new Student('Sasha', 30, 'M', ['NodeJS', 'VueJS', 'Trolling']);
//let humanSasha = new Human('Sashechka', 10, 'M', ['TotalTrolling', 'BadTrolling', 'Trolling']);

//studentSasha.toString();
//humanSasha.toString();

// ^^^ Task #2: Human() and Student():: Prototype-style

function Table() {
    this._width = 0;
    this._height = 0;
    this._rows = [];
};

Table.prototype.addRow = function(someRow) {
    this._rows.push(someRow);
    if (this._rows.length === 1) {
        this._width = someRow._width;
        this._height = 1;    
    } else this._height++;;   
};

Table.prototype.addRows = function(someRowsArray) {
    for (let i = 0; i < someRowsArray.length; i++) {
         this.addRow(someRowsArray[i]);
    }  
};

Table.prototype.print = function() {
    let divTable = document.createElement('div');
    divTable.classList.add('table');
    let place = document.getElementById('placeholder');
    place.innerHTML = '';
    this._rows.forEach(function(someRow){
        someRow.print(divTable);    
    });
    place.append(divTable);
};

Table.prototype.render = function() {
    let place = document.getElementById('placeholder');
    place.innerHTML = '';
    this.print();
};

Table.prototype.sort = function(key) {
    let flag = true;
    let col = this._rows[0]._ceils.indexOf(key);
    console.log(col);
    for (let i = 1; i < this._height; i++) {
//        console.log(this._rows[i]._ceils);    
    }
}

function Row() {
    this._width = 0;
    this._ceils = [];
};



Row.prototype.addCeil = function(someCeil) {
    this._ceils.push(someCeil);
    this._width++;
};

Row.prototype.addCeils = function(someCeilsArray) {
    for (let i = 0; i < someCeilsArray.length; i++) {
         this.addCeil(someCeilsArray[i]);
    }   
};

Row.prototype.print = function(divTable) {
    let divRow = document.createElement('div');
    divRow.classList.add('row');
    this._ceils.forEach(function(someCeil, idx, arr){
        someCeil.print(divRow, false, 100 / arr.length);    
    });
    divTable.append(divRow);
}

function TitleRow() {
    Row.call(this, ...arguments);
};

TitleRow.prototype.print = function(divTable) {
    let divRow = document.createElement('div');
    divRow.classList.add('row');
    divRow.classList.add('title__row');
    divRow.id = ('title__row');
    this._ceils.forEach(function(someCeil, idx, arr){
        someCeil.print(divRow, true, 100 / arr.length);    
    });
    divTable.append(divRow);
}

function Ceil() {
    this._value = arguments[0];
};

Ceil.prototype.print = function(divRow, flag, size) {
    let divCeil = document.createElement('div');
    divCeil.classList.add('ceil');
    if (flag) {
        divCeil.classList.add('title__ceil');
        divCeil.id = `title__ceil-${this._value}`;
        divCeil.setAttribute('data-info', `${this._value}`);
    }
    divCeil.setAttribute('style', `width: ${size}%`);
    divCeil.textContent = this._value;
    divRow.append(divCeil);
};

Ceil.prototype.__proto__ = Row.prototype;
TitleRow.prototype.__proto__ = Row.prototype;
Row.prototype.__proto__ = Table.prototype;

let ceil_Name1 = new Ceil('AaBb');
let ceil_Name2 = new Ceil('BbAa');
let ceil_Name3 = new Ceil('BaAb');
let ceil_Name4 = new Ceil('aBbA');

let ceil_Price1 = new Ceil(1000);
let ceil_Price2 = new Ceil(100);
let ceil_Price3 = new Ceil(101);
let ceil_Price4 = new Ceil(500);

let ceil_isInStock1 = new Ceil(true);
let ceil_isInStock2 = new Ceil(true);
let ceil_isInStock3 = new Ceil(false);
let ceil_isInStock4 = new Ceil(true);

let ceil_Title1 = new Ceil('Name');
let ceil_Title2 = new Ceil('Price');
let ceil_Title3 = new Ceil('isHas');
//let ceil_Price4 = new Ceil(500);

let titleRow = new TitleRow();
let row_1 = new Row();
let row_2 = new Row();
let row_3 = new Row();
let row_4 = new Row();

row_1.addCeils([ceil_Name1, ceil_Price1, ceil_isInStock1]);
row_2.addCeils([ceil_Name2, ceil_Price2, ceil_isInStock2]);
row_3.addCeils([ceil_Name3, ceil_Price3, ceil_isInStock3]);
row_4.addCeils([ceil_Name4, ceil_Price4, ceil_isInStock4]);
titleRow.addCeils([ceil_Title1, ceil_Title2, ceil_Title3]);

let testTable = new Table();
testTable.addRows([titleRow, row_1, row_2, row_3, row_4]);

window.onload = function() {
    testTable.print();   
    title__row.onclick = function(event) {
//        etarget = event.target;  
//        console.dir(this.childNodes);
//        console.log(this.index(etarget));
//        testTable.sort(etarget.dataset['info']);
    }
};

function testTask_3() {
    
};

function testTask_4() {
    
};

function testTask_5() {
    
};