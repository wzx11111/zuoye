var singleNumber = function(nums) {
    const freq = new Map();
    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }
    const ans = [];
    for (const [num, occ] of freq.entries()) {
        if (occ === 1) {
            ans.push(num);
        }
    }
    return ans;
};

