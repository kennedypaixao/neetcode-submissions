class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let nset = new Set();
        for(let i = 0; i < nums.length; i++) {
            if(nset.has(nums[i])){
                return true;
            }
            nset.add(nums[i]);
        }
        return false;
    }
}
