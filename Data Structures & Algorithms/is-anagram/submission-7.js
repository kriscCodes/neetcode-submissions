class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        //using checks for length at the beginningwould have helped me curb the conditonals i used at the end 
        if (s.length != t.length) {
            return false;
        }

        let s_map = new Map();
        let t_map = new Map();

        for (let i = 0; i < s.length; i++) {
            if (!s_map.has(s[i])) {
                s_map.set(s[i], 1);
            } else {
                s_map.set(s[i], s_map.get(s[i]) + 1)
            }
        }

        for (let i = 0; i < t.length; i++) {
            if (!t_map.has(t[i])) {
                t_map.set(t[i], 1);
            } else {
                t_map.set(t[i], t_map.get(t[i]) + 1)
            }
        }

        for (let i = 0; i < s.length; i++) {
            if (!(t_map.has(s[i]) && t_map.get(s[i]) == s_map.get(s[i]))) {
                return false;
            }
        }

        return true;
}
}
