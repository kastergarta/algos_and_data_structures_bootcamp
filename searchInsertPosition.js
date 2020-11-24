// https://leetcode.com/problems/search-insert-position/

let searchInsert = function(nums, target) {
    let index = 0;

    while (index < nums.length) {
      if (nums[index] === target || nums[index] > target) {
        return index;
      } else {
        index++;
      }
    }

    return index;
};

