var sortColors = function(nums) {
    var len = nums.length,
        redEnds = 0,
        blueStarts = len - 1,
        i;
    
    function swap(m, n, arr) {
        var temp = arr[m];
        
        arr[m] = arr[n];
        arr[n] = temp;
    }

    for (i = 0; i <= blueStarts;) {
        if (nums[i] === 0) {
            swap(i, redEnds, nums);
            i++;
            redEnds++;
        } else if (nums[i] === 2) {
            swap(i, blueStarts, nums);
            blueStarts--;
        } else {
            i++;
        }
    }
};