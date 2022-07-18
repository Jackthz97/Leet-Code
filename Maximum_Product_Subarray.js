const maxProduct = function(nums) {
  let res = Math.max(...nums);
  let [curMax, curMin] = [1, 1];

  for (let n of nums) {
    if (n === 0) {
      [curMax, curMin] = [1, 1];
    }
    let tmp = curMax * n;
    curMax = Math.max(n * curMax, n * curMin, n);
    curMin = Math.min(tmp, n * curMin, n);
    res = Math.max(res, curMax);
  }
  return res;
};

let nums = [2, 3, -2, 4, 8];
console.log(maxProduct(nums)); //32

let nums2 = [-4,-3,-2];
console.log(maxProduct(nums2)); //12