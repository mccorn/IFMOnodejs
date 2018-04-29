var par1 = 0;
var par2 = 0;
var messagestr = '';

function testTask_1() {
    var rndResolution = corn.confirmRnd();
    messagestr = '';
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
            case 1: result *= 10;break;
            case 2: result *= 0.001;break;
            case 4: result *= 1000;break;
            case 5: result *= 100;break;
            default: messagestr = "!ERROR!";break;
        }
        messagestr += `Result: ${result} m.`;
    } else {
        messagestr = 'Давай, до свидания!';
    }
    corn.alert(messagestr);
}

function testTask_5() {
    corn.alert('Error: и у меня тоже выходной!');
};

function testTask_6() {
    var rndResolution = corn.confirmRnd();
    messagestr = '';
    
    if (rndResolution) {
        par1 = corn.rndRound(3000,1);
        messagestr += `par1 (X) = ${par1}`;
        if (isBbssextile(par1)) {
            messagestr += "\nНе високосный"; 
        } else {
            messagestr += "\n Не високосный"; 
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
        if (par1 == par2 * 2) {
             messagestr += '\nТарелки вымыты. Моющее средство закончилось.'; 
        } else if (par1 > par2 * 2) {
             messagestr += (`\n\u2015\nAfter:\nКол-во невымытых тарелок = ${par1-par2*2}\n`);
        } else {
            messagestr += (`\n\u2015\nAfter:\nОсталось средства = ${(par2 - par1 * 0.5).toFixed(1)}\n`);
        }
    } else {
        messagestr = 'Давай, до свидания!';
    }
    
    corn.alert(messagestr);
};

function isBissextile(par1) {
    return par1 % 4 || (par1 % 400 && !(par1 % 100));
}