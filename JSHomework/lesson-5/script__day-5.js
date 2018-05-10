var par1 = 0;
var par2 = 0;
var messagestr = '';

var arr_1 = [1, 1, 2, 3, 5, 8, 13, 21];
var arr_2 = [100, 2, 32, 5, 8, 113, 21];

const STUDENT = {
    name: "Andrew",
    surname: "Markeev",
    age: 24,
    hobbie: "IT scince",
    isGod: false
}

function testTask_1(student) {
    var printingStudent = student || STUDENT;
    messagestr = '--- Student: ---'
    for (key in printingStudent) {
        messagestr += `\n${key}: ${printingStudent[key]}`;
    };
    messagestr += `\n- --- --- --- --- -`;
    alert(messagestr);
};

function testTask_2() {
    messagestr = `Array 1: ${arr_1}`;
    messagestr += `\nArray 2: ${arr_2}`;
    
    var result = [];
    for (var i = 0; i < arr_1.length; i++) {
        if (result.indexOf(arr_1[i]) === -1) {
            result.push(arr_1[i]);
        }
    }
    for (var i = 0; i < arr_2.length; i++) {
        if (result.indexOf(arr_2[i]) === -1) {
            result.push(arr_2[i]);
        }
    }
     messagestr += `\nResult: ${result}`;
    alert(messagestr);
};

function testTask_3() {
    var count = arguments[0] || 9;
    messagestr = `Fibonacci series:\n`;
    messagestr += printFibonacciSeries(count);
    
    alert(messagestr);
};


function testTask_4() {
    var dateNow;
    var nextNewYearsDay;
    dateNow = new Date();
//    alert(`${dateNow.getFullYear()} YYYY - ${dateNow.getMonth()} MM - ${dateNow.getDate()} DD`);
    nextNewYearsDay = new Date(dateNow.getFullYear() + 1, 0, 1);
//    alert(`${nextNewYearsDay.getFullYear()} YYYY - ${nextNewYearsDay.getMonth()} MM - ${nextNewYearsDay.getDate()} DD`);
    
    var result = {};
    result.milliseconds = nextNewYearsDay - dateNow;
    console.log(result);
    result.day = (Math.floor(result.milliseconds / 3600000 / 24));
    result.milliseconds -= result.day * 3600000 * 24;
    result.hours = Math.floor(result.milliseconds / 3600000);
    result.milliseconds -= result.hours * 3600000;
    result.minutes = Math.floor(result.milliseconds / 60000);
    messagestr = `До Нового года осталось:`;
    messagestr += addDaysToNY(result.day);
    messagestr += addCountPositionToSring(result.hours, 'час', 'часа', 'часов');
    messagestr += addCountPositionToSring(result.minutes, 'минута', 'минуты', 'минут');
     
    
    alert(messagestr);
};

function printFibonacciSeries(count) {
    switch (count) {
        case 0: return null;break;
        case 1: return '1';break;
        case 2: return '1, 1';break;
        default: {
            var result = [1,1]; 
            for (var i = 2; i < count; i++) {
                result.push(result[i - 1] + result[i - 2]);
            }
            return result.join(', ');
        }
    }
    return;
};

function addDaysToNY(par1) {
    let resultday = par1;
    messagestr = `\n ${resultday} `;
    if (resultday % 10 === 1) {
        if (resultday % 100 === 11) {
            messagestr += ' дней ';
        } else {
            messagestr += ' день ';
        }
    } else if (resultday % 10 < 5 && resultday % 10 !== 0) {
        if (resultday % 100 < 15 && resultday % 100 > 11) {
            messagestr += ' дней ';
        } else {
            messagestr += ' дня ';
        }           
    } else messagestr += ' дней ';
    return messagestr;
}

function addHoursToNY(par1) {
    let resulthours = par1;
    messagestr = `${resulthours} `;
    if (resulthours % 10 === 1) {
        if (resulthours % 100 === 11) {
            messagestr += ' часов ';
        } else {
            messagestr += ' час ';
        }
    } else if (resulthours % 10 < 5 && resulthours % 10 !== 0) {
        if (resulthours % 100 < 15 && resulthours % 100 > 11) {
            messagestr += ' часов ';
        } else {
            messagestr += ' часа ';
        }           
    } else messagestr += ' часов ';
    return messagestr;
}

function addMinutesToNY(par1) {
    let resultminutes = par1;
    messagestr = `${resultminutes} `;
    if (resultminutes % 10 === 1) {
        if (resultminutes % 100 === 11) {
            messagestr += ' минут ';
        } else {
            messagestr += ' минута ';
        }
    } else if (resultminutes % 10 < 5 && resultminutes % 10 !== 0) {
        if (resultminutes % 100 < 15 && resultminutes % 100 > 11) {
            messagestr += ' минут ';
        } else {
            messagestr += ' минуты ';
        }           
    } else messagestr += ' минут ';
    return messagestr;
}

function addCountPositionToSring() {
    let resultminutes = arguments[0];
    messagestr = ` ${resultminutes}`;
    if (resultminutes % 10 === 1) {
        if (resultminutes % 100 === 11) {
            messagestr += ` ${arguments[3]}`;
        } else {
            messagestr += ` ${arguments[1]}`;
        }
    } else if (resultminutes % 10 < 5 && resultminutes % 10 !== 0) {
        if (resultminutes % 100 < 15 && resultminutes % 100 > 11) {
            messagestr += ` ${arguments[3]}`;
        } else {
            messagestr += ` ${arguments[2]}`;
        }           
    } else messagestr += ` ${arguments[3]}`;
    return messagestr;
}