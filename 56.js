/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((p, q) => p[0] - q[0]); // 按照左端点从小到大排序
    const ans = [];
    for (const p of intervals) {
        const m = ans.length;
        if (m && p[0] <= ans[m - 1][1]) { // 可以合并
            ans[m - 1][1] = Math.max(ans[m - 1][1], p[1]); // 更新右端点最大值
        } else { // 不相交，无法合并
            ans.push(p); // 新的合并区间
        }
    }
    return ans;
};
