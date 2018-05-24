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

let water = new Product('water',10);
let choco = new Product();
let basket_1 = new BasketProducts();
basket_1.addProduct(choco);
basket_1.addProduct('milk', 100);

function Product(somename, someprice) {
    this._name = somename || 'Product._name';
    this._price = someprice || 1000;
    this.toPrint = function() {
        return `Product() {_name: "${this._name}", _price: ${this._price} $}`;
    }
}

function BasketProducts() {
    this.productsArray = [];
    this.getSize = function() {
        return this.productsArray.length;
    };
    this.getTotal = function() {
        let arrlength = this.productsArray.length;
        let result = 0;
        for (let i = 0; i < arrlength; i++) {
            result += this.productsArray[i]._price;
        }
        return result;
    };
    this.addProduct = function() {
        if (arguments[0] instanceof Product) {
            this.productsArray.push(arguments[0]);
        };   
    };
    this.toPrint = function() {
        let arrlength = this.productsArray.length; 
        let result = '';
        for (let i = 0; i < arrlength; i++) {
            result += i + ') ' +  this.productsArray[i].toPrint() + '\n ';
        }
        return result;
    }
}

function testTask_1() {
    
};

let human_1 = new Human();
let student_1 = new Student();

function Human() {
    this._name = arguments[0] || 'Human._name';
    this._age = arguments[1] || 0;
    this._sex = arguments[2] || 'W';
    this._hobbies = arguments[3] || [];
    this.toString = function() {
        let resstr = 'Human: ';
        for (key in this) {
            if (typeof(this[key]) !== 'function') resstr += `[${key}: ${this[key].toString()}], `;
        }
        return resstr.slice(0, -2);
    }
};

function Student() {
    Human.call(this, ...arguments);
    this._university = arguments[4] || 'Student._university';
    
    this.toString = function() {
        let resstr = 'Student: ';
        for (key in this) {
            if (typeof(this[key]) !== 'function') resstr += `[${key}: ${this[key].toString()}], `;
        }
        return resstr.slice(0, -2);
    }
};


function testTask_2() {
   
};

function User() {
    this._name; // : 'name'
    this._id ; //: 10000001,
    this._location; // : 'de',
    this._age;//  18; 
    this.setUser = function() {
        this._name = arguments[0] || 'User._name';
        this._id = arguments[1] || 10000002;
        this._location = arguments[2] || 'ru';
        this._age = arguments[3] || 20;
    };
    this.setAnonymousUser = function() {
        this._name = 'User._anonym';
        this._id = 10000003;
        this._location = arguments[2] || 'en';
        this._age = arguments[3] || 22;
    };
    this.toString = function(){
        return this._name;
    }
};

let user_1 = new User();
let user_2 = new User;
user_2.setAnonymousUser();
user_1.setUser('Mile', 10000018, 'us', 24);


function getCounter() {
    
};

function testTask_3() {
    
};

function testTask_4() {
    
};

function testTask_5() {
    
};