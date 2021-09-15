/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
const nextGreaterElement = function(findNums, nums) {
  const map = {};
  const stack = [];
  for (let num of nums) {
    while (stack.length && stack[stack.length - 1] < num) {
      let tmp = stack.pop();
      map[tmp] = num;
    }
    stack.push(num);
  }
  for (let i = 0; i < findNums.length; i++) {
    findNums[i] = map[findNums[i]] == null ? -1 : map[findNums[i]];
  }

  return findNums;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
console.log(nextGreaterElement([1, 2, 3], [9, 8, 7, 3, 2, 1, 6]));


// Another
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var nextGreaterElement = function(nums1, nums2) {
  if(nums1.length === 0) return nums1;
  
  let ans = [];
  let cur;
  let curMax = -1;
  
  for (let i = 0; i < nums1.length; i++) {
    cur = nums1[i];
    let j = nums2.indexOf(cur) + 1;
    
    for (let j = nums2.indexOf(cur) + 1; j < nums2.length; j++) {
      if (nums2[j] > cur) {
        curMax = nums2[j];
        break;
      }
    }
    
    ans[i] = curMax;
    curMax = -1;
  }
  
  return ans;
};
