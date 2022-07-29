const search = function (nums, target) {
  let index = 0;
  if (nums.length === 0) {
    return -1;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return index;
    }
    index++;
  }
  return -1;
};


// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4