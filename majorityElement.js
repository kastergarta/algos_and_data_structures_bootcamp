let majorityElement = function(nums) {
    if (nums.length === 1) {
      return nums[0];
    }
  
    let half = nums.length / 2;
    let elementCount = new Map();
  
    for (let num of nums) {      
      if (!elementCount.has(num)) {
          elementCount.set(num, 1);
      } else {
          elementCount.set(num, elementCount.get(num) + 1);
      }
        
      if (elementCount.get(num) > half) {
        return num;
      }
    }
  
    return -1;
  };