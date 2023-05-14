/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let res = init;
    return {
        reset() {
            res = init
            return res
        },
        increment() {
            res = res + 1
            return res
        },
        decrement() {
            res = res - 1
            return res
        }
    }
};

/**
 * or:
 * 
 var createCounter = function(init) {
    let counter = init
    return {
        increment : () => ++counter,
        decrement : () => --counter,
        reset : () => counter = init
        }
 };
 
 * 
 */


/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */