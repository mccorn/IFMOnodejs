;let number_system = function() {
    let numberSystemObject = {
        name: "numberSystemJSObject",
    };
    
    numberSystemObject.dec2bin = function(parnum){
        return this.translateNumber(parnum, 10, 2);    
    };
    
    numberSystemObject.dec2oct = function(parnum) {
        return this.translateNumber(parnum, 10, 8);    
    };
    
    numberSystemObject.dec2hex = function(parnum) {
        return this.translateNumber(parnum, 10, 16);    
    };
    
    numberSystemObject.bin2dec = function(parnum) {
        return this.translateNumber(parnum, 2, 10);    
    };
    
    numberSystemObject.oct2dec = function(parnum) {
        return this.translateNumber(parnum, 8, 10);    
    };
    
    numberSystemObject.hex2dec = function(parnum) {
        return this.translateNumber(parnum, 16, 10);    
    };
    
    numberSystemObject.translateNumber = function(parnum, fromBase, toBase) {
        if (fromBase === toBase) return parnum;
        let numstr = parnum.toString();
        let numlength = numstr.length;
        let result = 0;
            for (var i = 0; i < numlength; i++) {
                let number = parseInt(mas.indexOf(numstr[i].toUpperCase()));
                result += number * (fromBase ** (numlength - i - 1));     
            }

        if (toBase !== 10) result = numConvert(result, toBase) + '';
        return result;
    };
    
    var mas=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]; // Можно завершить латинский алфавит, а если не хватит - добавить русский ,"G","H","I","J","K","L"
    numConvert = function(a,b){
        var mas1=[];
        while(a>=1){
            c=Math.floor(a/b);
            d=a-b*c;
            mas1.push(d);
            a=c;
        }
        let result="";
        for(i=0;i<mas1.length;i++){
            result+=mas[mas1[mas1.length-1-i]]+"";
        }
        return result;
    };
    
    return numberSystemObject;
}();