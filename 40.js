function combinationSum2(candidates, target) {
    candidates.sort((a, b) => a - b);
    const ans = [];
    const sequence = [];
    const freq = [];
    
    for (const num of candidates) {
        if (freq.length === 0 || num !== freq[freq.length - 1][0]) {
            freq.push([num, 1]);
        } else {
            freq[freq.length - 1][1]++;
        }
    }
    
    function dfs(pos, rest) {
        if (rest === 0) {
            ans.push([...sequence]);
            return;
        }
        if (pos === freq.length || rest < freq[pos][0]) {
            return;
        }
        
        dfs(pos + 1, rest);
        
        const most = Math.min(Math.floor(rest / freq[pos][0]), freq[pos][1]);
        for (let i = 1; i <= most; ++i) {
            sequence.push(freq[pos][0]);
            dfs(pos + 1, rest - i * freq[pos][0]);
        }
        for (let i = 1; i <= most; ++i) {
            sequence.pop();
        }
    }
    
    dfs(0, target);
    return ans;
}

