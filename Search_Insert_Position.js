// Search Insert Position

// Question: Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

let searchInsert = function(nums, target) {

  if (nums.indexOf(target) !== -1) {
    return nums.indexOf(target);
  } else {
    nums.push(target);
    let lowestToHighest = nums.sort((a, b) => a - b);
    return lowestToHighest.indexOf(target);
  }
};

// test case
console.log(searchInsert([1,3,5,6], 4)); // 2
console.log(searchInsert([1,3,5,6], 3)); // 1
console.log(searchInsert([1,3,5,6], 7)); // 4