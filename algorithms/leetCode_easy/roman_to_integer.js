/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let doc = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 }

    let value = 0;
    for (let i = 0; i < s.length; i++) {
        doc[s[i]] < doc[s[i + 1]] ? value -= doc[s[i]] : value += doc[s[i]]
    }
    return value;
};


console.log(romanToInt('IV'))