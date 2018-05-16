var par1 = 0;
var par2 = 0;
var messagestr = 'abc123cba$#@!?20AC';

var arr_1 = [1, 1, 2, 3, 5, 8, 13, 21];
var arr_2 = [100, 2, 32, 5, 8, 113, 21];

let product = {
    article: 'article_122100',
    photoURL: '',
    properties: [],
    Product: function() {
        this.article = arguments[0];
        this.photoURL = arguments[1];
        this.properties = arguments[2].slice();
    }
};
let idTimer;


function testTask_1(student) {
    let i = 0;
    let placeholder = document.getElementById('placeholder');
    clearInterval(idTimer);
    placeholder.innerHTML = "";
    placeholder.setAttribute('class','timer');
    function showTime() {
        let datenow = new Date();
        hours = datenow.getHours();
        min = datenow.getMinutes();
        sec = datenow.getSeconds();
        placeholder.innerHTML = `<span style='color:red'>${hours}:</span><span style='color:green'>${min}:</span><span style='color:blue'>${sec}</span>`;
    }
    idTimer = setInterval(showTime, 1000);
};

function testTask_2() {
    let placeholder = document.getElementById('placeholder');
    clearInterval(idTimer);
    placeholder.innerHTML = '';
    let chocolateProduct = new product.Product('232300', 'img/choco.jpg', [12, 23, 'sweety']);
    showProduct('placeholder', chocolateProduct);
};
let count = 0;
function testTask_3() {
    clearInterval(idTimer);
    count = 0;
    let placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = '';
    placeholder.setAttribute('class','traffic-lights');
    showTrafficLights('placeholder');
    idTimer = setInterval(showNextLightSignal, 2000);
};

function testTask_4() {
    
};

function showProduct(somedivID, someproduct) {
    let somediv = document.getElementById(somedivID);
    somediv.innerHTML = "";
    somediv.setAttribute('class','product');
//    somediv.article = document.createElement('h3');
//    somediv.img = document.createElement('div');
//    somediv.properties = document.createElement('p');
//    somediv.article.innerHTML = (someproduct.article);
//    somediv.img.innerHTML =(someproduct.article);
//    somediv.properties.innerHTML =(someproduct.article);
//    document.appendChild(somediv);
    somediv.img = document.createElement('div');
    somediv.img.setAttribute('class','product-image');
    somediv.img.setAttribute('style',`background-image: url(${someproduct.photoURL})`);
    somediv.append(somediv.img);
    
    somediv.article = document.createElement('span');
    somediv.article.setAttribute('class','product-title');
    somediv.article.innerHTML = someproduct.article;
    somediv.append(somediv.article);
    
    somediv.properties = document.createElement('p');
    somediv.properties.setAttribute('class','product-description');
    somediv.properties.innerHTML = someproduct.properties.join(', ');
    somediv.append(somediv.properties);
    
    return somediv;
};

function showTrafficLights(somediv){
    let trafficLights = document.getElementById(somediv);
    trafficLights.innerHTML = '';
    trafficLights.redSignal = document.createElement('div');
    trafficLights.yellowSignal = document.createElement('div');
    trafficLights.greenSignal = document.createElement('div');
    trafficLights.append(trafficLights.redSignal);
    trafficLights.append(trafficLights.yellowSignal);
    trafficLights.append(trafficLights.greenSignal);
    trafficLights.redSignal.setAttribute('class', 'light-signal light-signal_actived');
    trafficLights.yellowSignal.setAttribute('class', 'light-signal');
    trafficLights.greenSignal.setAttribute('class', 'light-signal');
    
};

function showNextLightSignal(){
    let trafficLights = document.getElementById('placeholder');
    switch (count % 4) {
        case 1: 
            trafficLights.redSignal.setAttribute('class', 'light-signal');
            trafficLights.yellowSignal.setAttribute('class', 'light-signal  light-signal_actived');
            break;

        case 2: 
            trafficLights.greenSignal.setAttribute('class', 'light-signal light-signal_actived');
            trafficLights.yellowSignal.setAttribute('class', 'light-signal');
            break;

        case 3: 
            trafficLights.greenSignal.setAttribute('class', 'light-signal');
            trafficLights.yellowSignal.setAttribute('class', 'light-signal light-signal_actived');
            break;

        case 0: 
            trafficLights.redSignal.setAttribute('class', 'light-signal light-signal_actived');
            trafficLights.yellowSignal.setAttribute('class', 'light-signal');
            break;

    }
    count = count+1;
};