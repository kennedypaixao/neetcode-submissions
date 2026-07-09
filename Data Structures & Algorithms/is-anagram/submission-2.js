class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sMap = new Map();
        let tMap = new Map();

        if(s.length != t.length) {
            return false;
        }

        for (let i = 0; i < s.length; i++) {
            sMap.set(s[i], (sMap.get(s[i]) ?? 0) + 1);
            tMap.set(t[i], (tMap.get(t[i]) ?? 0) + 1);
        }

        for (let i = 0; i < s.length; i++) {
            let sValue = sMap.get(s[i]);
            let tValue = tMap.get(s[i]);
            if(sValue != tValue) {
                return false;
            }
        }

        return true;
    }
}
