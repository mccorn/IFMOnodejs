var par1 = 0;
var par2 = 0;
var messagestr = 'abc123cba$#@!?20AC';

var arr_1 = [1, 1, 2, 3, 5, 8, 13, 21];
var arr_2 = [100, 2, 32, 5, 8, 113, 21];

const STUDENT = {
    name: "Andrew",
    surname: "Markeev",
    age: 24,
    hobbie: ["IT scince", "Biking", "Phylosophy"],
    isGod: false,
    getStudentsProfile: function() {
        messagestr = '';
        for (key in this) {
            if (typeof this[key] !== 'function') messagestr += `"${key}" : ${this[key]} {${typeof this[key]}}\n`;
        };
        console.log(messagestr);
        return messagestr;
    },
};

function testTask_1(student) {
    alert(STUDENT.getStudentsProfile());
};

function testTask_2() {
    alert(getFactorial(5));
};

function testTask_3() {
    var arr = genarateArrayRndNum(1, 100);
    var arr2 = genarateArray(1)(100);
    console.log(arr());
    console.log(arr2());
    alert("Look in console");
};

function getFactorial(numint) {
    if (numint > 1) numint *= getFactorial(--numint)
        else return 1;
    return numint;
}

function genarateArrayRndNum(min, max) {
    var result = [];
    return function() {
        while (result.length < max - min + 1) {
            var elem = corn.rndRound(min, max);
            if (result.indexOf(elem) === -1) result.push(elem); 
        }
        return elem;
    }
}

//function summ(a,b){
//    if(b === undefined){
//        return function(b){
//            return a + b;
//        }
//    } else {
//        return a + b;
//    }
//}

function genarateArray(min, max) {
    var result = [];
    if(max === undefined){
        return function(max){
            return genarateArrayRndNum(min, max);
        }
    } else 
    return function() {
        while (result.length < max - min + 1) {
            var elem = corn.rndRound(min, max);
            if (result.indexOf(elem) === -1) result.push(elem); 
        }
        return elem;
    }
}

function toCezarString(str, key) {
    if (key == 0) return '!' + str;
    let strlength = str.length;
    let result = '';
    for (let i = 0; i < strlength; i++) {
        result += toCezarChar(str[i], key);        
    }
    return result;
}
//parkey
function toCezarChar(char, parkey) {
    let charcode = char.charCodeAt();
    let key = parkey % 26;
    if (key < 0) key = 26 + key;
    // 'A'.charCodeAt() = 65
    // 'Z'.charCodeAt() = 90
    // 'a'.charCodeAt() = 97
    // 'z'.charCodeAt() = 122
    if (charcode >= 97 && charcode <= 122 - key) {
        return String.fromCharCode(charcode + key);
    } else if (charcode >= 65 && charcode <= 90 - key) {
        return String.fromCharCode(charcode + key);
    } else if (charcode > 90 - key && charcode <= 90) {
        return String.fromCharCode(64 + key - (90 - charcode));
    } if (charcode > 122 - key && charcode <= 122) {
        return String.fromCharCode(96 + key - (122 - charcode));
    }
    return char;
}
