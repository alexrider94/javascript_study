/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    if (x < 0) return -reverse(-x);
    let res = 0;
    while (x > 0) {
        let a = x % 10;
        x = Math.floor(x / 10);
        if (res >= 214748365) return 0;
        res = res * 10 + a;
    }
    return res;
};

console.log(reverse(-123))
console.log(reverse(123))