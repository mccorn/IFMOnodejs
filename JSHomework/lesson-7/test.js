function someFunction(parX){
    var result = 1 / parX + Math.sqrt(parX);

    return result;  
}

describe("test someFunction(x) = 1 / x + sqrt(x)", function(){
    var input_num = [4, 0];
    var result = [2.25, NaN];
    var msg = "test someFunction(x) = 1 / x + sqrt(x)! ";
    it(msg, function(){
        var rez = someFunction(input_num[0]);
        expect(rez).toBe(result[0]);
    });
    it(msg, function(){
        var rez = someFunction(input_num[1]);
        expect(rez).toBe(Infinity);
    });
});