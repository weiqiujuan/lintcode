const lengthOfLongestSubstring = function (str) {

    if (str.length === 0 || str.length === 1) {
        return str.length;
    }

    let unique = new Set();
    let j = 0;
    let result = 0;
    let len = str.length;

    for (let i = 0; i < len; i++) {
        while (j < len && !unique.has(str.charAt(j))) {
            unique.add(str.charAt(j));
            j++;
        }
        result = Math.max(result, j - i);
        unique.delete(str.charAt(i));
    }
    return result;
};
let s='abcabcbb';
console.log(lengthOfLongestSubstring(s));
