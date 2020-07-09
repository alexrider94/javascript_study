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

    // string function으로 처리

    // const reversed = Math.abs(x).toString().split('').reverse().join('');
    // if (reversed > 2 ** 31) return 0;
    // return reversed * Math.sign(x);
};

console.log(reverse(-123))
console.log(reverse(123))