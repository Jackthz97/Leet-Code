const productExceptSelf = function (nums) {
  // [1,2,3,4]
  //L => nan, 1, 2, 6, 24
  //R => 24, 24, 12, 4, nan

  //final => 24, 12, 8, 6
  //val = 24

  let output = new Array(nums.length).fill(nums[0]); // [1,24,8,6]
  let cacheVar = nums[nums.length - 1]; //4

  for (let i = 1; i < nums.length - 1; i++) {
    output[i] = output[i - 1] * nums[i];
  }
  output[nums.length - 1] = output[nums.length - 2];

  for (let j = nums.length - 2; j > 0; j--) {
    output[j] = output[j - 1] * cacheVar;
    cacheVar = cacheVar * nums[j];
  }
  output[0] = cacheVar;
  return output;
};
