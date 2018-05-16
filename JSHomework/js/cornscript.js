;var corn = function(){
    let cornObject = {};
    // Вспомогательные функции: рандомайзеры
    // см.ниже по коду
    
    // par1 - дииапозон разброса результата
    // par2 - стартовая точка диапозона
    // par3 - отброс хвоста после par3 знака после запятой
    this.rnd = function(par1,par2,par3) {
        if (isNaN(par1) || parseInt(par1) <= 0) par1 = 1;
        if (isNaN(par2)) par2 = 0;
        if (isNaN(par3)) par3 = 2;
        
        return +((Math.random()*(par1 - par2) + par2).toFixed(par3));
    },
    
    cornObject.rndRound = function(par1,par2) {
        if (isNaN(par1) || parseInt(par1) <= 0) par1 = 1;
        if (isNaN(par2)) par2 = 0;

        return Math.round(Math.random()*(par1 - par2) + par2);
    },
    
    // Собственные функции вывода
    // см.ниже по коду
//    this.alert = function(messagestr) {
//        alert(messagestr);
//        console.log(messagestr);
//    },
    
    this.confirmRnd = function() {
        return confirm('Вы согласны воспользоваться РАНДОМАЙЗЕРОМ?\nВыбрав "нет" мы принудим Вас,многоуважаемый, вводить данные вручную');
    },
    
    this.setParameters = function(count) {
        var count = count || 1;
        for (var i = 0; i < count; i++) {
            
        }
    },
    
    this.promptFloat = function() {
        var min; if (min !== 0) min = min || -Infinity;
        var max; if (max !== 0) max = max || Infinity;
        var result;
        var inx = 0;
        do {
            inx++;
            result = parseFloat(prompt(`Set float from ${min} to ${max}`));
            if (inx == 5) {
                alert('Number set equal 0');
                return 0;
            };
        } while (isNaN(result) || result < min || result > max);
        alert(result);
        if (inx == 5) return 0;
        return result;
    },
    
    this.promptInteger = function(min, max) {
        var min; if (min !== 0) min = min || -Infinity;
        var max; if (max !== 0) max = max || Infinity;
        var result;
        var inx = 0;
        do {
            inx++;
            result = parseInt(prompt(`Set integer from ${min} to ${max}`));
            if (inx == 5) {
                alert('Number set equal 0');
                return 0;
            };
        } while (isNaN(result) || result < min || result > max);
        alert(result);
        if (inx == 5) return 0;
        return result;
    },
    
   this.isValidPassword = function(parstring) {
       var arr = [];
       arr.push(parstring.length >= 9);
       arr.push(Boolean(parstring.match(/[a-z]/g)) && Boolean((parstring.match(/[A-Z]/g))));
       arr.push(Boolean(parstring.replace(/\D/g,'').length > 2));
       arr.push(Boolean(parstring.match(/[!$#%]/g)));
//       return arr.join(' / ');
       return arr[0] && arr[1] && arr[2] && arr[3];
   },
    
    this.promptPassword = function(messagestr) {
        var result = "";
        var inx = 0;
        do {
            inx++;
            result = prompt(`Set password: `);
            if (inx == 5) {
                alert('Password set equal "0123%Qwerty"');
                return "0123%Qwerty";
            };
        } while (result.replace(/[a-zA-Z0-9$%#!]/g,'').length > 0 || result.length == 0);
        console.log(result);
        return result;
    }, 
    
    this.sort = function(parArray1) {
        var array1 = parArray1.slice();
        let maxindex = parArray1.length;
        let result = [];
        let temp = 0;

        for (var i = 0; i < maxindex; i++) {
            array1[i] = parseFloat(array1[i]); // Преобразование к числу - для удобства сравнивания
        }

        for (var i = 0; i < maxindex; i++) {
            temp = 0; // Сбрасываем счетчик, предполагая,что минимальный из элементов стоит в начале
            for (var j = 1; j < array1.length; j++) { // Запускаем цикл для поиска минимального элемента в хвосте массива
                if (array1[j] < array1[temp]) { // Проверяем, не является рассматриваемый элемент меньше предполагаемого минимума
                    temp = j; // Заменяем индекс предполагаемого минимума на более актуальный
                }
            };
            result[i] = array1[temp]; // Добавляем истинный минимум оставшегося Хвоста Массива в Результирующий Массив
            array1.splice(temp,1); // Удаляем истинный минимум оставшегося Хвоста Массива        
        }; 
        
        return result;
    },
    
//    this.alert = function(messagestr,flag) {
//        try {
//            //corn.unknownfunction();
////            alert(`corn.alert() work!\nMessage: ${messagestr}`);
//            $('.modal-message__icon').addClass(`modal-message__icon-${flag}`);
//            $('.modal-message__text').empty();
//            $('.modal-message__text').append(`<span>${messagestr}</span>`);
//            $('.modal-screen').removeClass("superhiddenclass");
//        } catch (error) {
//            alert(`${messagestr}\n${error.message}`);
//        }
//        
//    },


    isRightTriangle = function(par1, par2, par3) {
        var arr = [par1, par2, par3];
        arr.sort(function(a,b){return parseInt(a) > parseInt(b);});
        return arr[2] == arr[1] + arr[0];
    },


    isBissextile = function(par1) {
        return !((par1 % 4) || (!(par1 % 100) && (par1 % 400)));
    },


    isPalindrome = function(str) {
        //console.log(str);
        str = str.replace(/[\,\.\s]/g, "").toLowerCase();
        //console.log(str);
        var i = 0; 
        switch (str.length) {
            case 0:
            case 1: return true;break;
            case 2:
            case 3: return str[0] === str[str.length - 1];break;
            default:i = Math.floor(str.length / 2);
        };
        while (i && str[i - 1] === str[str.length - i]) {
            i--;
        };

        return !i;
    },  

    closeModalScreen = function() {
        $('.modal-screen').addClass("superhiddenclass");
        $('.modal-massage__text').empty();
        $('.modal-massage__text').attr('class','modal-massage__text');
        $('.modal-message__icon').attr('class','modal-message__icon');
    },
        
//        For lesson-7
    this.getMinInArray = function(pararray) {
        let result = pararray[0];
        let arrlength = pararray.length;
        for (let i = 1; i < arrlength; i++) {
            if (result > pararray[i]) result = pararray[i];    
        };
        return result;
    },
        
    this.getMaxInArray = function(pararray) {
        let result = +pararray[0];
        let arrlength = pararray.length;
        for (let i = 1; i < arrlength; i++) {
            if (result < +pararray[i]) result = pararray[i];    
        };
        return result;
    },
        
    this.getArithmeticAverage = function(pararray) {
        let sumresult = 0;
        let arrlength = pararray.length;
        for (let i = 0; i < arrlength; i++) {
            sumresult += pararray[i];    
        };
        return sumresult / arrlength;
    },
        
    this.clone = function(pararray) {
        let resarray = [];
        let arrlength = pararray.length;
        for (let i = 0; i < arrlength; i++) {
            if (typeof(pararray[i]) == 'array')     
                resarray.push(this.clone(pararray[i])) 
            else 
                resarray.push(pararray[i]);    
        };
        return resarray;
    }
    
    cornObject.compareRandom = function(a, b) {
      return Math.random() - 0.5;
    }
    
    return cornObject;
}();