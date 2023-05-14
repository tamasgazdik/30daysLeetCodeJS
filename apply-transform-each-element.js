/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let returnedArray = [];

    for (let i = 0; i < arr.length; i++) {
        const returnValue = fn(arr[i], i);
        returnedArray.push(returnValue);
    }

    return returnedArray;
};