"use strict";
var combine = function (input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
};
var number1 = '5';
var number2 = 4;
var result = combine(number1, number2);
console.log(result);
