const findMin = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) {
      return nums[i + 1];
    } else if (i + 1 === nums.length) {
      return nums[0];
    }
  }
};


// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.