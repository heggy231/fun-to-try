/**
 * https://leetcode.com/problems/two-sum/
 * 
 * Given nums = [2, 7, 11, 15], target = 9,

  Because nums[0] + nums[1] = 2 + 7 = 9,
  return [0, 1].
  https://leetcode.com/problems/two-sum/solution/
  https://github.com/chihungyu1116/leetcode-javascript
 * 
 */

var nums = [2, 7, 11, 15];
var target = 9;
var twoSum = function(nums, target) {
	for (var i = 0; i< number.length; i++) {
		for (var j = i + 1; j < nums.length; j++) {
			if(nums[i] + nums[j] === target) {
				return [i, j];
			}
		}
	}
}

// O(n) - One-pass Hash Table
var twoSum = function(nums, target) {
  let map = new Map;
  for (var i = 0; i < nums.length; i++) {
      let complement = target - nums[i];
      if (map.has(complement)) {
          return [map.get(complement), i]
      }
      map.set(nums[i], i);
  }
}

/// 
const twoSum = function(nums, target) {
  const comp = {};
  for(let i=0; i<nums.length; i++){
      if(comp[nums[i] ]>=0){
          return [ comp[nums[i] ] , i]
      }
      comp[target-nums[i]] = i
  }
};

//
var twoSum = function(nums, target) {
  const indicies = {}
  
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (indicies[target - num] != null) {
      return [indicies[target - num], i]
    }
    indicies[num] = i
  }
};