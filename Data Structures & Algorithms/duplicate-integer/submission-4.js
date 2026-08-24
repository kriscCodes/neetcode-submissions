class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = new Map();
        //first loop creates the map and shows how often each number appears
        for (let i = 0; i < nums.length; i++) {
            if (!map.has(nums[i])) {
                map.set(nums[i], 1);
            } else {
                map.set(nums[i], map.get(nums[i]) + 1)
            }
        }
        //second loop checks to see if theres any duplicates by checkng val of each key
        for (let i = 0; i < nums.length; i++) {
            if (map.get(nums[i] ) > 1) {
                return true;
            }        
        }
        return false;
    }
}
