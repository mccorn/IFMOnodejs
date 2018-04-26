function testTask_1(num1,num2,num3) {
    alert("Numbers : " + num1 + ' / ' + num2 + ' / ' + num3 + '\nResult minFromThree() : ' + minFromThree(num1,num2,num3));
};

function testTask_2(num) {
    if (num === undefined || num === NaN) {
        num = Math.floor(Math.random() * 2000 - 1000)
    };
    alert(num + ' : ' + getNumberDescription(num));
};

function testTask_3(num) {
    if (num === undefined || num === NaN) {
        num = Math.floor(Math.random() * 9)
    };
    alert(num + ' : ' + convertNumberToStringRu(num));
};

function testTask_4(num) {
    if (num === undefined || num === NaN) {
        num = Math.floor(Math.random() * 4 + 1)
    };
    alert(num + ' : ' + commentedRating(num));
};

function testTask_5(num1,num2,num3) {
    alert("Numbers : " + num1 + ' / ' + num2 + ' / ' + num3 + '\nResult isHaveTwoEqualsNumbers() : ' + isHaveTwoEqualsNumbers(num1,num2,num3));
};

function minFromThree(num1,num2,num3) {
    if (num1 < num2 && num1 < num3) {
        return num1;
    } else if (num2 < num1 && num2 < num3) {
        return num2;
    } else return num3;
};

function getNumberDescription(num) {
    let descript = 'число';
    if (num == 0) {
        descript = 'нулевое';
        return descript;
    }
    if (num % 2) descript = 'нечетное ' + descript;
        else descript = 'четное ' + descript;
    
    if (Math.floor(Math.abs(num) / 100)) {
        descript = 'трехзначное ' + descript;
    } else if (Math.floor(Math.abs(num) / 10)) {
        descript = 'двузначное ' + descript;
    } else { descript = 'однозначное ' + descript; }
    
    if (num > 0) descript = 'положительное ' + descript;
        else descript = 'отрицательное ' + descript;
    
    return descript;
};

function convertNumberToStringRu(num) {
    switch (num) {
        case 0: return 'Нуль';
        case 1: return 'Один';
        case 2: return 'Два';
        case 3: return 'Тройка';
        case 4: return 'Квартет';
        case 5: return 'Пятёрка';
        case 6: return 'Шесть';
        case 7: return 'Семь';
        case 8: return 'Восемь';
        case 9: return 'Девяточка';
        default: return 'No valid data';
    }
};

function commentedRating(num) {
     switch (num) {
        case 1: return 'Очень плохо';
        case 2: return 'Плохо';
        case 3: return 'Удовлетворительно';
        case 4: return 'Хорошо';
        case 5: return 'Отлично!';
        default: return 'No valid data';
     }
};

function isHaveTwoEqualsNumbers(num1,num2,num3) {
    return (num1 == num2 || num1 == num3 || num2 == num3);
};
