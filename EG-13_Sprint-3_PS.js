
//08. Top K Frequent Elements
var topKFrequent = function(nums, k) {
    let count = {};

    for (let num of nums) {
        count[num] = (count[num] || 0) + 1;
    }

    return Object.keys(count)
        .sort((a, b) => count[b] - count[a])
        .slice(0, k)
        .map(Number);
};







//07. Subarray Sum Equals K
var subarraySum = function(nums, k) {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        let sum = 0;

        for (let j = i; j < nums.length; j++) {
            sum += nums[j];

            if (sum === k) count++;
        }
    }

    return count;
};






//06. 3Sum
var threeSum = function(nums) {
    let result = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1, right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
};






//05. Majority Element
var majorityElement = function(nums) {
    let count = {};

    for (let num of nums) {
        count[num] = (count[num] || 0) + 1;

        if (count[num] > nums.length / 2) {
            return num;
        }
    }
};







//04. Ransom Note
var canConstruct = function(ransomNote, magazine) {
    let count = {};

    for (let char of magazine) {
        count[char] = (count[char] || 0) + 1;
    }

    for (let char of ransomNote) {
        if (!count[char]) {
            return false;
        }

        count[char]--;
    }

    return true;
};





//03. Valid Anagram
var isAnagram = function(s, t) {
    return s.split("").sort().join("") === t.split("").sort().join("");
};










//02. Move Zeroes
var moveZeroes = function(nums) {
    let index = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[index] = nums[i];
            index++;
        }
    }

    while (index < nums.length) {
        nums[index] = 0;
        index++;
    }
};

let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
// console.log(nums);






// 01. Contains Duplicate
var containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length;
};

