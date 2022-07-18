const maxSubArray = function(nums) {
  let maxSub = nums[0];
  let curSum = 0;
  for (let n of nums) {
    if (curSum < 0) {
      curSum = 0;
    }
    curSum += n;
    if (maxSub < curSum) {
      maxSub = curSum;
    }
  }
  return maxSub;
};

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6

let nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums));