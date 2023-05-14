/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let returnArray = [];

    for(let i = 0; i < arr.length; i++) {
        const val = arr[i];
        if(fn(val, i)) {
            returnArray.push(val);
        }
    }
    
    return returnArray;
};