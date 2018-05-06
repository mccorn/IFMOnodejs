var par1 = 0;
var par2 = 0;
var messagestr = '';

let model = {
    index: 0,
}

let $wrapper = $('.wrapper');
let $deskXO = $('.deskXO');
let controllerX = [];
let controller0 = [];

function testTask_1(parArray1,parArray2) {
    //messagestr = ``;
    let array1 = parArray1 || [ 12, 4, 3, 10, 1, 20 ];
    let array2 = parArray2 || [-3, -7, -100, -33];
    let resultArray = array1.concat(array2);
    
    
    alert(`array1 (${array1.length}) = ${array1.join(', ')}\narray2 (${array2.length}) = ${array2.join(', ')}\nresultArray (${resultArray.length}) = ${resultArray.join(', ')}`);
};

function testTask_2() {
    printDeskXO();
};

function testTask_3(parArray1) {
    let array1 = parArray1 || [ 12, 4, 3, 10, 1, 20 ];
    let result = array1.slice();
    let minindex = 0;
    let minitem = array1[0];
    let maxindex = 0;
    let maxitem = array1[0];
    
    if (array1.length > 2) {
        for (var i = 0; i < array1.length; i++) {
            array1[i] = parseFloat(array1[i]);
            if (+array1[i] < +array1[minindex]) {
                minindex = i;
                minitem = array1[i];
            }
            if (+array1[i] > +array1[maxindex]) {
                maxindex = i;
                maxitem = array1[i];
            }
        }
    }
    result.splice(maxindex, 1);
    result.splice(minindex, 1);
    
    alert(`Array: [${array1.join(', ')}]\nMaximum: [${+maxindex}] = ${maxitem}\nMinimum: [${+minindex}] = ${minitem}\nResult array: [${result.join(', ')}]`);
};

function testTask_4(parArray1) {
    var array = parArray1 || [ 12, 121, 4, 3, 120, 10, 1, 20 ];
    var result = corn.sort(array);
    
    alert(`Array: [${array.join(', ')}]\nResult array: [${result.join(', ')}]`);
};


$(document).on('click', '.deskXO__ceil-processing', function() {
    //alert('Work');
    
        $(this).removeClass('deskXO__ceil-processing');
        if ($('.deskXO__ceil-0').length < $('.deskXO__ceil-X').length) {
            $(this).addClass('deskXO__ceil-0');  
            controller0.push($(this).data('index'));
        } else {
            $(this).addClass('deskXO__ceil-X'); 
            controllerX.push($(this).data('index'));
        };
   
    if ($('.deskXO__ceil-processing').length == 0 ||
       isWinnerXO(controllerX) || isWinnerXO(controller0))
        setTimeout(function() {
            if (isWinnerXO(controllerX)) {
               alert(`GAME OVER!\nX - winner`);
            } else if (isWinnerXO(controller0)) {
                alert(`GAME OVER!\n0 - winner`);
            } else {
                alert(`GAME OVER!\nWon friendship!`);
            }
            printDeskXO([]);
            controllerX = [];
            controller0 = [];  
        },100);
});

function printCeilOnDeskXO($element,flag,inx) {
    //var flag = flag || null;
    if (flag === 1) {
        $element.append(`<div class = "deskXO__ceil-X deskXO__ceil" data-index = "${inx}"></div>`);
    } else if (flag === 0) {
        $element.append(`<div class = "deskXO__ceil-0 deskXO__ceil" data-index = "${inx}"></div>`);
    } else {
        $element.append(`<div class = "deskXO__ceil-processing deskXO__ceil" data-index = "${inx}"></div>`);
    }
}

function printDeskXO(parArray1) {
    let array = parArray1 || [ 1, null, 0, null, 1, null, null, null, null ];
    
    if ($('.deskXO').length == 0) {
        $('.wrapper').append(`<div class="deskXO"></div>`);
    } else {
        $('.deskXO').empty();
    }
    
    for (var i = 0; i < 9; i++) {
        printCeilOnDeskXO($('.deskXO'),array[i],i);
        if (array[i] === 0) {
            controller0.push(i);
        };
        if (array[i] === 1) {
            controllerX.push(i);
        };
    }
}

function isWinnerXO(parArray) {
    var arraystr = parArray.sort().join('');
    var flag = false;
    flag &= (arraystr.length >= 3);
    flag |= /0.*1.*2.*/.test(arraystr);
    flag |= /3.*4.*5.*/.test(arraystr);
    flag |= /6.*7.*8.*/.test(arraystr);
    flag |= /0.*3.*6.*/.test(arraystr);
    flag |= /1.*4.*7.*/.test(arraystr);
    flag |= /2.*5.*8.*/.test(arraystr);
    flag |= /0.*4.*8.*/.test(arraystr);
    flag |= /2.*4.*6.*/.test(arraystr);
    return flag;
}

