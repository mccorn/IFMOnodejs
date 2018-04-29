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
    }
};