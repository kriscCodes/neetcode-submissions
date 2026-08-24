class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let map_s = new Map();
        let map_t = new Map();

        for (let i = 0; i < s.length; i++) {
            
            if (!map_s.has(s[i])) {
                map_s.set(s[i], 1);
            } else {
                map_s.set(s[i], map_s.get(s[i]) + 1);
            }
        }

        for (let j = 0; j < t.length; j++) {

            if (!map_t.has(t[j])) {
                map_t.set(t[j], 1);
            } else {
                map_t.set(t[j], map_t.get(t[j]) + 1);
            }
        }

        if (s.length >= t.length) {
            for (let [key, value] of map_s) {
                console.log(key, value, map_t.get(key))
                if (!(map_t.has(key) && map_t.get(key) == value)) {
                return false;
                }
            }
        } else {
            for (let [key, value] of map_t) {
                console.log(key, value, map_s.get(key))
                if (!(map_s.has(key) && map_s.get(key) == value)) {
                return false;
                }
            }
        }
    
    return true;
}
}
