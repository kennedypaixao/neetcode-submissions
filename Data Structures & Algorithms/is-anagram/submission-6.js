class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) {
            return false;
        }

        let sMap = new Map();
        let tMap = new Map();      

        const sSplited = s.split('');
        for (let i = 0; i < sSplited.length; i++) {
            let value = sMap.get(sSplited[i]);
            sMap.set(sSplited[i], (value ?? 0) + 1);
        }

        const tSplited = t.split('');
        for (let i = 0; i < tSplited.length; i++) {
            let value = tMap.get(tSplited[i]);
            if(!sMap.has(tSplited[i])) {
                return false;
            }
            
            tMap.set(tSplited[i], (value ?? 0) + 1);
        }

        for (let i = 0; i < tSplited.length; i++) {
            let sValue = sMap.get(tSplited[i]);
            let tValue = tMap.get(tSplited[i]);
            if(sValue != tValue) {
                return false;
            }
        }

        return true;
    }
}

