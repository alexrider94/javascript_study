/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs === undefined || strs.length === 0) return '';

    return strs.reduce((prev, curr) => {
        let i = 0;
        while (prev[i] && curr[i] && prev[i] === curr[i]) i++;
        return prev.slice(0, i);
    })
    // let list = new Map();
    // strs.map((str)=>{
    //     let arr = str.split();
    //     arr.Map(word => {
    //         list.set(word,Object.key(word.length))
    //     })
    // })
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));