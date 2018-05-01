var par1 = 0;
var par2 = 0;
var messagestr = '';

function testTask_1() {
    var rndResolution = corn.confirmRnd();
    messagestr = ``;
    if (rndResolution) {
        par1 = corn.rnd(100);
        par2 = corn.rnd(80);
        messagestr += `Before:\npar1 (X) = ${par1}\npar2 (Y) = ${par2}`;
        if (par1 > par2) {
            var box = par2;
            par2 = par1;
            par1 = box;
        }
        messagestr += (`\n\u2015\nAfter:\npar1 (X) = ${par1}\npar2 (Y) = ${par2}`);
    } else {
        messagestr = 'Давай, до свидания!';
    }
    corn.alert(messagestr);
};

function testTask_2() {
    corn.alert('Error: у меня выходной!');
};

function testTask_3() {
    var rndResolution = corn.confirmRnd();
    messagestr = '';
    
    if (rndResolution) {
        par1 = corn.rndRound(12,1);
        messagestr += `par1 (X) = ${par1}`;
        if (par1 <13 && par1 >0) {
            switch (Math.floor(par1 / 3)) {
                case 1: messagestr +=`\nSpring melody`;break;
                case 2: messagestr +=`\nSummer time`;break;
                case 3: messagestr +=`\nAutumn rain`;break;
                default: messagestr +=`\nWinterzzzzzz..`;break;
            }
        } else  messagestr = 'Давай, до свидания! Сходи узнай, сколько месяцев в году!';
    } else {
        messagestr = 'Давай, до свидания!';
    }
    corn.alert(messagestr);
};

function testTask_4() {
    var rndResolution = corn.confirmRnd();
    messagestr = '';
    
    if (rndResolution) {
        par1 = corn.rndRound(5,1);
        par2 = corn.rndRound(10000);
        var result = par2;
        messagestr += `par1 (X) = ${par1}\npar2 (Y) = ${par2}\n`;
        switch (par1) {
            case 1: result *= 0.1;break;
            case 2: result *= 1000;break;
            case 4: result *= 0.001;break;
            case 5: result *= 0.01;break;
            default: messagestr = "!ERROR!";break;
        }
        messagestr += `Result: ${result} m.`;
    } else {
        messagestr = 'Давай, до свидания!';
    }
    corn.alert(messagestr);
};

function testTask_5() {
    var str = prompt("Add some string");
    messagestr = ``;
    
    messagestr = str + `\nResult:` + isPalindrome(str); 
    corn.alert(messagestr);
};

function testTask_6() {
    var rndResolution = corn.confirmRnd();
    messagestr = '';
    
    if (rndResolution) {
        par1 = corn.rndRound(3000,1);
        messagestr += `par1 (X) = ${par1}`;
        if (isBissextile(par1)) {
            messagestr += "\високосный"; 
        } else {
            messagestr += "\nне високосный"; 
        }
    } else {
        messagestr = 'Давай, до свидания!';
    }
    
    corn.alert(messagestr);
};


function testTask_7() {
    var rndResolution = corn.confirmRnd();
    messagestr = '';
    
    if (rndResolution) {
        par1 = corn.rndRound(100);
        par2 = corn.rndRound(100)/2;
        messagestr += `Before:\npar1 (X) = ${par1}\npar2 (Y) = ${par2}`;
        while (par2 > 0 && par1 > 0) {
            par2 -= 0.5;
            par1--;
        }
        if (par1 == 0 && par2 == 0) {
             messagestr += '\nТарелки вымыты. Моющее средство закончилось.'; 
        } else if (par1 > 0) {
             messagestr += (`\n\u2015\nAfter:\nКол-во невымытых тарелок = ${par1}\n`);
        } else {
            messagestr += (`\n\u2015\nAfter:\nОсталось средства = ${par2}\n`);
        }
    } else {
        messagestr = 'Давай, до свидания!';
    }
    
    corn.alert(messagestr);
};

function isBissextile(par1) {
    return !((par1 % 4) || (!(par1 % 100) && (par1 % 400)));
};

// TODO: Сделать корректно работающей с кириллицей
function isPalindrome(str) {
    //console.log(str);
    str = str.replace(/[\,\.\s]/g, "").toLowerCase();
    //console.log(str);
    var i = 0; 
    switch (str.length) {
        case 0:
        case 1: return true;break;
        case 2:
        case 3: return str[0] == str[str.length - 1];break;
        default:i = Math.floor(--str.length / 2);
    };
    while (i && str[i - 1] == str[str.length - i]) {
        i--;
    };
    
    return !i;
};