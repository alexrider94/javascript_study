/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    const arr = String(x).split('');

    while (arr.length > 1) {
        if (arr.shift() !== arr.pop()) {
            return false;
        }
    }
    return true;

    // other way
    // if(x <0) return false
    // let reverse = 0;
    // for (let i = x; i >= 1; i = Math.floor(i / 10)){
    //     rev = rev * 10 + i % 10;
    // }
    // return rev === x
};

console.log(isPalindrome(123))
console.log(isPalindrome(121))