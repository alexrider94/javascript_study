/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {

    // let set = new Set([...nums]);
    // let arr = Array.from(set);
    // return arr.length;

    //shoud make this as in-place // sorted arr
    let i = 0;
    for (let j = 0; j < nums.length; ++j) {
        if (nums[j] !== nums[i]) {
            nums[++i] = nums[j];
        }
    }
    return ++i;
};

console.log(removeDuplicates([1, 1, 2]));