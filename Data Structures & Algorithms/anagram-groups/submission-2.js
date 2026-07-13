class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagrams = {};
        for(let s of strs) {
            const sorted = s.split('').sort().join('');
            if(!anagrams[sorted]) {
                anagrams[sorted] = [];
            }
            anagrams[sorted].push(s);
        }

        return Object.values(anagrams);
    }
}
