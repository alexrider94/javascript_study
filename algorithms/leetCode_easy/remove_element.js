var removeElement = function (nums, val) {
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] == val) {
            nums.splice(i, 1);// remove specified index 
            //splice first argument is index, and second is about number of elements to remove
            console.log(nums);
        }
    }
    return nums.length;
};

removeElement([3, 2, 2, 3], 3);