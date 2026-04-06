class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const map1 = new Map();
        const map2 = new Map();

        for (const c of s) {
            map1.set(c, (map1.get(c) || 0) + 1);
        }

        for (const c of t) {
            map2.set(c, (map2.get(c) || 0) + 1);
        }

        console.log(map1)
        console.log(map2)

        if (map1.size !== map2.size) return false;

        for (const [key, val] of map1) {
            if (!map2.has(key) || map2.get(key) !== val) {
                return false;
            }
        }

        return true;
    }
}