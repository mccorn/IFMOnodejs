var par1 = 0;
var par2 = 0;
var messagestr = '';

function testTask_1() {
    //messagestr = ``;
    
    var parstring = prompt('Print word');
    var arr = parstring.replace(/\D/g,'');
    var resultsum = 0;
    for (var i =0; i < arr.length; i++) {
        resultsum += parseInt(arr[i]);   
    };
    alert(`Сумма чисел внутри строки = ${resultsum}`);
};

function testTask_2() {
    var parstring = prompt('Print word');
    var char = prompt('Print char');
    var reg = new RegExp(char, 'g');
    var resultstr = parstring.replace(reg,'' + char + char);
    corn.alert(`Before: ${parstring}\nAfter: ${resultstr}`);
};

function testTask_3() {
    var parstring = corn.promptPassword('Print password');
    
    messagestr = corn.isValidPassword(parstring);
    corn.alert("Is valid? : " + messagestr);
};

