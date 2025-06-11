var constructMaximumBinaryTree = function(nums) {
    const construct = (nums, left, right) => {
        if (left > right) {
            return null;
        }
        let best = left;
        for (let i = left + 1; i <= right; ++i) {
            if (nums[i] > nums[best]) {
                best = i;
            }
        }
        const node = new TreeNode(nums[best]);
        node.left = construct(nums, left, best - 1);
        node.right = construct(nums, best + 1, right);
        return node;
    }
    return construct(nums, 0, nums.length - 1);
};
