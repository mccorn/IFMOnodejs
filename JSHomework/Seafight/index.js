function Arena() {
    this.SIZE = 10;
    this._arrayShips = [];
    this._arrPositions = [];
    for (let i = 0; i < this.SIZE ** 2; i++) {
        this._arrPositions.push(-1);    
    };
}

Arena.prototype.show = function() {
    let placeholder = document.getElementById('placeholder');
    for (let i = 0; i < this.SIZE; i++) {
        for(let j = 0; j < this.SIZE; j++) {
            this.showCeil(10 * i + j);
        }
    }
}

Arena.prototype.showCeil = function(somePosition) {
    let ceilDiv = document.getElementById(somePosition);
    ceilDiv.classList.remove('hidden');
}

Arena.prototype.hide = function() {
    let placeholder = document.getElementById('placeholder');
    for (let i = 0; i < this.SIZE; i++) {
        for(let j = 0; j < this.SIZE; j++) {
            this.hideCeil(10 * i + j);
        }
    }
}

Arena.prototype.hideCeil = function(somePosition) {
    let ceilDiv = document.getElementById(somePosition);
    ceilDiv.classList.add('hidden');
}

Arena.prototype.printNew = function() {
    let placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = '';
    for (let i = 0; i < this.SIZE; i++) {
        for(let j = 0; j < this.SIZE; j++) {
            this.printCeil(10 * i + j);
        }
    }
}

Arena.prototype.render = function() {
    let placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = '';
    let lengthAP = this._arrPositions.length;
    for (let i = 0; i < lengthAP; i++) {
        this.printCeil(i);
    }
}

Arena.prototype.addCeil = function(somePosition) {
//    console.log(`Arena.prototype.addCeil(${somePosition})`);
    this._arrPositions[somePosition] = true;
    this.addPlugs(somePosition);
}

Arena.prototype.addShip = function(someShip) {
    this._arrayShips.push(someShip);
    this.setPositionForPrintShip(someShip);
    let length = someShip._coordinates.length;
    let posStart = someShip._coordinates[0];
    let shipSize = someShip._size;
    let step;
    if (someShip._isVertical) step = 10; else step = 1;
    for (let i = posStart; i < posStart + step * shipSize; i+= step) {
        this.addCeil(i);    
    }
}

Arena.prototype.setPositionForPrintShip = function(someShip) {
    let shipSize = someShip._size;
    let arenaSize = this._arrPositions.length - 1;
    let count = 0;
    let step;
    let posArr;
    do {
        posArr = [];
        let posStart = rndPosition(0, arenaSize);
        if (someShip._isVertical) step = 10; else step = 1;
        for (let i = posStart, j = 0; i < posStart + step * shipSize; i+= step, j++) {
            posArr.push(i);     
        };   
    } while (!this.hasResolutionForPrintShip(posArr, someShip._isVertical));
    if (this.hasResolutionForPrintShip(posArr, someShip._isVertical)) {
        someShip._coordinates = posArr.slice();
    }
    return someShip;
}

Arena.prototype.setPositionForPrintShipSet = function() {
    let lengthSS = this._arrayShips.length;
    for (let i = 0; i < lengthSS; i++) {
        this.setPositionForPrintShip(this._arrayShips[i]); 
    }
    return this._arrayShips;
}

Arena.prototype.addShipSet = function(someShipSet) {
    let lengthSS = someShipSet._set.length;
    for (let i = 0; i < lengthSS; i++) {
        this.addShip(someShipSet._set[i]);  
    }
    return this._arrayShips;
}

Arena.prototype.printShipSet = function() {
    let lengthSS = this._arrayShips.length;
    this.printShip(this._arrayShips[0], document.getElementById(this._arrayShips[0]._coordinates[0]));  
    return this._arrayShips;
}

Arena.prototype.printShip = function(someShip) {
    let idStart = someShip._coordinates[0];
    let step;
    if (someShip._isVertical) step = 10;else step = 1;
    for (let i = 0; i < someShip._size; i++) {
        let nextDiv = document.getElementById(`${+i}`);
        new this.printCeil(i);
        this._arrPositions[+i] = +i;
    }
}

Arena.prototype.hasResolutionForPrintShip = function(somePositions, isVertical) {
    let arr = [];
    let flag = true;
    for (key in somePositions) {
        arr.push(+this._arrPositions[somePositions[key]]); 
        if (!isVertical) flag &= !this.hasDifferentRows(somePositions[key], somePositions[0]);
    };
    return (flag && arr.every(function(el, inx, arr){
        return el === -1;
    }));
}

Arena.prototype.printCeil = function(somePosition) {
    if (!(somePosition in this._arrPositions)) return "Error: выход за пределы поля!";
    let div;
    let placeholder = document.getElementById('placeholder');
    if (!document.getElementById(somePosition)) {
        div = document.createElement('div'); 
        div.classList.add('ceil');
        div.setAttribute('id', `${somePosition}`);
         placeholder.append(div);  
    } else {
        div = document.getElementById(somePosition);
    }
    let key = arguments[1] || this._arrPositions[somePosition];
    switch (key) {
        case true: {
            div.classList.add('ceil_shippart');
            break;
        }
        case 'XXX': {
            div.classList.add('ceil_plug'); 
            break;
        }
        case -1: {
            div.classList.add('ceil'); 
            break;
        }
        default: {
            div.classList.add('ceil'); 
            break;    
        }
    }
    return div;
}

Arena.prototype.addPlug = function(somePosition) {
    if (somePosition >= this._arrPositions[0] && somePosition < this._arrPositions.length) {
        if (this._arrPositions[somePosition] === -1) this._arrPositions[somePosition] = 'XXX';     
    };
    return somePosition;
}

Arena.prototype.hasDifferentRows = function(somePosition, otherPosition){
    return ((Math.floor(somePosition / this.SIZE)) !== (Math.floor(otherPosition / this.SIZE)));
};

Arena.prototype.hasDifferentCols= function(somePosition, otherPosition){
    return ((somePosition % this.SIZE) !== (otherPosition % this.SIZE));
};

Arena.prototype.addPlugs = function(somePosition) {
    let size = this.SIZE;
    if (!this.hasDifferentRows(somePosition, somePosition + 1)) this.addPlug(somePosition + 1); 
    if (!this.hasDifferentRows(somePosition, somePosition - 1)) this.addPlug(somePosition - 1);
    
    if (!this.hasDifferentCols(somePosition, somePosition + size)) this.addPlug(+somePosition + 10);
    if (!this.hasDifferentCols(somePosition, (somePosition - size))) this.addPlug(+somePosition - 10);
    
    if (this.hasDifferentRows(somePosition, somePosition + size - 1) && this.hasDifferentCols(somePosition, somePosition + size - 1)) this.addPlug(somePosition + 9); // bot left
    if (this.hasDifferentRows(somePosition, somePosition - size + 1) && this.hasDifferentCols(somePosition, somePosition - size + 1)) this.addPlug(somePosition - 9); // work top right
    
    if ((somePosition % size !== size - 1) &&(this.hasDifferentRows(somePosition, somePosition + size + 1)) && (this.hasDifferentCols(somePosition, somePosition + size + 1))) this.addPlug(somePosition + size + 1); // worked right bot
    if ((somePosition % size) &&(this.hasDifferentRows(somePosition, somePosition - size - 1)) && (this.hasDifferentCols(somePosition, somePosition - size - 1))) this.addPlug(somePosition - size - 1); // worked left top
}

function ShipSet() {
    this._set = []; 
}

function Ship() {
    this._size = arguments[0] || 1;
    this._isVertical = arguments[1] || false;
    this._coordinates = [];
}

Ship.prototype.toString = function() {
    return `_size = ${this._size}; _isVertical = ${this._isVertical}; _coordinates = ${this._coordinates};`
}

ShipSet.prototype.generate = function() {
    let rndFlag = new RandomBoolean();
    this._set.push(new Ship(4, rndFlag));
    rndFlag= RandomBoolean();
    this._set.push(new Ship(3, rndFlag));
    rndFlag = RandomBoolean();
    this._set.push(new Ship(3, rndFlag));
    rndFlag= RandomBoolean();
    this._set.push(new Ship(2, rndFlag));
    rndFlag= RandomBoolean();
    this._set.push(new Ship(2, rndFlag));
    rndFlag= RandomBoolean();
    this._set.push(new Ship(2, rndFlag));
    rndFlag= RandomBoolean();
    this._set.push(new Ship(1, rndFlag));
    rndFlag= RandomBoolean();
    this._set.push(new Ship(1, rndFlag));
    rndFlag= RandomBoolean();
    this._set.push(new Ship(1, rndFlag));
    rndFlag= RandomBoolean();
    this._set.push(new Ship(1, rndFlag));
 }

function rndPosition(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function RandomBoolean() {
    return Boolean(rndPosition(1,100) % 2);   
}

let warArena = new Arena();
let warShipSet = new ShipSet();  


let warShip_4V = new Ship(4, true);
let warShip_4H = new Ship(4, false);

window.onload = function() {
    let placeholder = document.getElementById('placeholder');
    warShipSet.generate();
//    warArena.printNew();
    warArena.addShipSet(warShipSet);
//    warArena.addShip(warShip_4V);
//    warArena.addShip(warShip_4H);
    warArena.render();
//    warArena.setPositionForPrintShipSet();
//    warArena.printShipSet();
    placeholder.onclick = function(event) {
        atack(event, event.target);
    }
    
    function atack(somevent, someCeil) {
        someCeil.classList.add('ceil_actived');  
        someCeil.classList.remove('hidden');
    }
}