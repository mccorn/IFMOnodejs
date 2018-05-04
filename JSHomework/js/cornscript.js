var corn = {
    // Вспомогательные функции: рандомайзеры
    // см.ниже по коду
    
    // par1 - дииапозон разброса результата
    // par2 - стартовая точка диапозона
    // par3 - отброс хвоста после par3 знака после запятой
    rnd: function(par1,par2,par3) {
        if (isNaN(par1) || parseInt(par1) <= 0) par1 = 1;
        if (isNaN(par2)) par2 = 0;
        if (isNaN(par3)) par3 = 2;
        
        return +((Math.random()*(par1 - par2) + par2).toFixed(par3));
    },
    
    rndRound: function(par1,par2) {
        if (isNaN(par1) || parseInt(par1) <= 0) par1 = 1;
        if (isNaN(par2)) par2 = 0;

        return Math.round(Math.random()*(par1 - par2) + par2);
    },
    
    // Собственные функции вывода
    // см.ниже по коду
    alert: function(messagestr) {
        alert(messagestr);
        console.log(messagestr);
    },
    
    confirmRnd: function() {
        return confirm('Вы согласны воспользоваться РАНДОМАЙЗЕРОМ?\nВыбрав "нет" мы принудим Вас,многоуважаемый, вводить данные вручную');
    },
    
    setParameters: function(count) {
        var count = count || 1;
        for (var i = 0; i < count; i++) {
            
        }
    },
    
    p1 : '1235',
    p2 : '123ves',
    p3 : 'sfasf',
    
    promptFloat: function() {
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
    
    promptInteger: function(min, max) {
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
    
   isValidPassword: function(parstring) {
       var arr = [];
       arr.push(parstring.length >= 9);
       arr.push(Boolean(parstring.match(/[a-z]/g)) && Boolean((parstring.match(/[A-Z]/g))));
       arr.push(Boolean(parstring.replace(/\D/g,'').length > 2));
       arr.push(Boolean(parstring.match(/[!$#%]/g,'')));
//       return arr.join(' / ');
       return arr[0] && arr[1] && arr[2] && arr[3];
   },
    
    promptPassword: function(messagestr) {
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
    }
};

function isRightTriangle(par1, par2, par3) {
    var arr = [par1, par2, par3];
    arr.sort(function(a,b){return parseInt(a) > parseInt(b);});
    return arr[2] == arr[1] + arr[0];
};


function isBissextile(par1) {
    return !((par1 % 4) || (!(par1 % 100) && (par1 % 400)));
};


function isPalindrome(str) {
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
};