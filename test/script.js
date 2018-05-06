let arr =  [-1,20,12,4,22,44,2,0];

let testfunction = function(arr) {
    var temp;
    for (i = 0; i < arr.length - 1; i++) {
        for (j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
};