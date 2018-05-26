function Arena() {
    this.SIZE = 10;
    this._arrayShips = [];
    this._arrPositions = [];
    for (let i = 0; i < this.SIZE ** 2; i++) {
        this._arrPositions.push(null);    
    };
}

Arena.prototype.printNew = function() {
    let placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = '';
    for (let i = 0; i < this.SIZE; i++) {
        for(let j = 0; j < this.SIZE; j++) {
            let div = document.createElement('div'); 
            div.classList.add('ceil');
            div.setAttribute('id',`${i}${j}`);
            div.setAttribute('clickon', `atack(event,${i}${j})`);
            placeholder.append(div);
        }
    }
}

Arena.prototype.addShip = function(someship) {
    this._arrayShips.push(someship);
    do  {
        let pos = rndPosition(0,99);
        if (pos !== null) {
            this._arrPositions[pos] = pos;
            this._arrPositions[pos - 10] = pos;
            this._arrPositions[pos + 10] = pos;
            this._arrPositions[pos + 1] = pos;
            this._arrPositions[pos - 1] = pos;
            
            this._arrPositions[pos - 11] = pos;
            this._arrPositions[pos + 9] = pos;
            this._arrPositions[pos - 9] = pos;
            this._arrPositions[pos + 11] = pos;
        }
    } while (false);
}


function Ship() {
    this._size = arguments[0] || 1;
    this._isVertical = arguments[1] || false;
}

Ship.prototype.print = function(someCeilDiv) {
    someCeilDiv.classList.add('ceil_shippart');
    let idStart = (someCeilDiv.getAttribute('id'));
    console.log(idStart);
    for (let i = 1; i < this._size; i++) {
        if (this._isVertical) {
            console.log(document.getElementById(`${+idStart+10}`));
            let nextDiv = document.getElementById(`${+idStart+10}`);
            new Ship(this._size - 1, this._isVertical).print(nextDiv); 
        } else {
            let nextDiv = document.getElementById(`${+idStart+1}`);
            new Ship(this._size - 1, this._isVertical).print(nextDiv);      
        }
    }
}

Ship.prototype.printCeil = function(someCeilDiv) {
    someCeilDiv.classList.add('ceil_shippart');
}

function ShipSet() {
    this._set = []; 
}

function rndPosition(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

ShipSet.prototype.generate = function() {
    this._set.push(new Ship(1));
    this._set.push(new Ship(1));
    this._set.push(new Ship(1));
    this._set.push(new Ship(1));
    this._set.push(new Ship(2));
    this._set.push(new Ship(2));
    this._set.push(new Ship(2));
    this._set.push(new Ship(3));
    this._set.push(new Ship(3));
    this._set.push(new Ship(4));
 }


let warArena = new Arena();
let warShipSet = new ShipSet();  
let ship1 = new Ship(1, true);

window.onload = function() {
    let placeholder = document.getElementById('placeholder');
    warArena.printNew();
    placeholder.onclick = function(event) {
        atack(event, event.target);
    }
    
    function atack(somevent, someCeil) {
        someCeil.classList.add('ceil_actived');     
    }
}