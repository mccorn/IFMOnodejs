function Arena() {
    this.FLAGSHIPPART = true;
    this.FLAGPLUG = 'XXX';
    this.FLAGCEIL = -1;
    
    this.PLACEIDDIV = arguments[0] || 'placeholder';
    this.SIZEARENA = arguments[1] || 10;
    this._arrayShips = [];
    this._arrPositions = [];
    for (let i = 0; i < this.SIZEARENA ** 2; i++) {
        this._arrPositions.push(-1);    
    };
}

Arena.prototype.show = function() {
    let placeholder = document.getElementById(this.PLACEIDDIV);
    for (let i = 0; i < this.SIZEARENA; i++) {
        for(let j = 0; j < this.SIZEARENA; j++) {
            this.showCeil(10 * i + j);
        }
    }
}

Arena.prototype.showCeil = function(somePosition) {
    let ceilDiv = document.getElementById(somePosition);
    ceilDiv.classList.remove('hidden');
}

Arena.prototype.hide = function() {
    let placeholder = document.getElementById(this.PLACEIDDIV);
    for (let i = 0; i < this.SIZEARENA; i++) {
        for(let j = 0; j < this.SIZEARENA; j++) {
            this.hideCeil(10 * i + j);
        }
    }
}

Arena.prototype.hideCeil = function(somePosition) {
    let ceilDiv = document.getElementById(somePosition);
    ceilDiv.classList.add('hidden');
}

Arena.prototype.printNew = function() {
    let placeholder = document.getElementById(this.PLACEIDDIV);
    placeholder.innerHTML = '';
    for (let i = 0; i < this.SIZEARENA; i++) {
        for(let j = 0; j < this.SIZEARENA; j++) {
            this.printCeil(10 * i + j);
        }
    }
}

Arena.prototype.render = function() {
    let placeholder = document.getElementById(this.PLACEIDDIV);
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
    let shipSIZEARENA = someShip._SIZEARENA;
    let step;
    if (someShip._isVertical) step = 10; else step = 1;
    for (let i = posStart; i < posStart + step * shipSIZEARENA; i+= step) {
        this.addCeil(i);    
    }
}

Arena.prototype.setPositionForPrintShip = function(someShip) {
    let shipSIZEARENA = someShip._SIZEARENA;
    let arenaSIZEARENA = this._arrPositions.length - 1;
    let count = 0;
    let step;
    let posArr;
    do {
        posArr = [];
        let posStart = rndPosition(0, arenaSIZEARENA);
        if (someShip._isVertical) step = 10; else step = 1;
        for (let i = posStart, j = 0; i < posStart + step * shipSIZEARENA; i+= step, j++) {
            posArr.push(i);     
        };   
    } while (!this.hasResolutionForPrintShip(posArr, someShip._isVertical));
    if (this.hasResolutionForPrintShip(posArr, someShip._isVertical)) {
        someShip._coordinates = posArr.slice();
    }
//    console.log(`setPositionForPrintShip(${someShip.toString()}) = ${posArr}`);
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
    for (let i = 0; i < someShip._SIZEARENA; i++) {
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
//    console.log(`hasResolutionForPrintShip() = ${somePositions}`);
    return (flag && arr.every(function(el, inx, arr){
        return el === -1;
    }));
}

Arena.prototype.printCeil = function(somePosition) {
    if (!(somePosition in this._arrPositions)) return "Error: выход за пределы поля!";
    let div;
    let placeholder = document.getElementById(this.PLACEIDDIV);
    if (!document.getElementById(somePosition)) {
        div = document.createElement('div'); 
        div.classList.add('ceil');
        div.setAttribute('id', `${somePosition}`);
        div.setAttribute('style', `width: ${100 / this.SIZEARENA}%; height: ${100 / this.SIZEARENA}%;`);
        placeholder.append(div);  
    } else {
        div = document.getElementById(somePosition);
    }
    let key = arguments[1] || this._arrPositions[somePosition];
    switch (key) {
        case this.FLAGSHIPPART: {
            div.classList.add('ceil_shippart');
            break;
        }
        case this.FLAGPLUG: {
            div.classList.add('ceil_plug'); 
            break;
        }
        case this.FLAGCEIL: 
        default: {
            div.classList.add('ceil'); 
            break;    
        }
    }
    return div;
}

Arena.prototype.addPlug = function(somePosition) {
    if (somePosition >= 0 && somePosition < this._arrPositions.length) {
        if (this._arrPositions[somePosition] === -1) this._arrPositions[somePosition] = 'XXX';     
    };
//    console.log(`addPlug() = ${somePosition}`);
    return somePosition;
}

Arena.prototype.hasDifferentRows = function(somePosition, otherPosition){
    return ((Math.floor(somePosition / this.SIZEARENA)) !== (Math.floor(otherPosition / this.SIZEARENA)));
};

Arena.prototype.hasDifferentCols= function(somePosition, otherPosition){
    return ((somePosition % this.SIZEARENA) !== (otherPosition % this.SIZEARENA));
};

Arena.prototype.addPlugs = function(somePosition) {
    let SIZEARENA = this.SIZEARENA;
    if (!this.hasDifferentRows(somePosition, somePosition + 1)) this.addPlug(somePosition + 1); 
    if (!this.hasDifferentRows(somePosition, somePosition - 1)) this.addPlug(somePosition - 1);
    
    if (!this.hasDifferentCols(somePosition, somePosition + SIZEARENA)) this.addPlug(+somePosition + this.SIZEARENA);
    if (!this.hasDifferentCols(somePosition, (somePosition - SIZEARENA))) this.addPlug(+somePosition - this.SIZEARENA);
    
    if (this.hasDifferentRows(somePosition, somePosition + SIZEARENA - 1) && this.hasDifferentCols(somePosition, somePosition + SIZEARENA - 1)) this.addPlug(somePosition + this.SIZEARENA - 1); // bot left
    if (this.hasDifferentRows(somePosition, somePosition - SIZEARENA + 1) && this.hasDifferentCols(somePosition, somePosition - SIZEARENA + 1)) this.addPlug(somePosition - this.SIZEARENA + 1); // work top right
    
    if ((somePosition % SIZEARENA !== SIZEARENA - 1) &&(this.hasDifferentRows(somePosition, somePosition + SIZEARENA + 1)) && (this.hasDifferentCols(somePosition, somePosition + SIZEARENA + 1))) this.addPlug(somePosition + SIZEARENA + 1); // worked right bot
    if ((somePosition % SIZEARENA) &&(this.hasDifferentRows(somePosition, somePosition - SIZEARENA - 1)) && (this.hasDifferentCols(somePosition, somePosition - SIZEARENA - 1))) this.addPlug(somePosition - SIZEARENA - 1); // worked left top
}

function ShipSet() {
    this._set = []; 
}

function Ship() {
    this._SIZEARENA = arguments[0] || 1;
    this._isVertical = arguments[1] || false;
    this._coordinates = [];
}

Ship.prototype.toString = function() {
    return `_SIZEARENA = ${this._SIZEARENA}; _isVertical = ${this._isVertical}; _coordinates = ${this._coordinates};`
}

ShipSet.prototype.generate = function() {
    let rndFlag;
    rndFlag = RandomBoolean();
    this._set.push(new Ship(4, rndFlag));
    rndFlag = RandomBoolean();
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
    warShipSet.generate();
//    warArena.printNew();
    warArena.addShipSet(warShipSet);
//    warArena.addShip(warShip_4V);
//    warArena.addShip(warShip_4H);
    warArena.render();
//    warArena.setPositionForPrintShipSet();
//    warArena.printShipSet();
    placeholder.onclick = function(event) {
        if (event.ctrlKey) atack(event, event.target);
        
    }
    
    function atack(someevent, someCeil) {
        someCeil.classList.add('ceil_actived');  
        someCeil.classList.remove('hidden');
    }
}