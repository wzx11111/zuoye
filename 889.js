var constructFromPrePost = function(preorder, postorder) {
    const postMap = {};
    for (let i = 0; i < postorder.length; i++) {
        postMap[postorder[i]] = i;
    }

    const dfs = (preLeft, preRight, postLeft, postRight) => {
        if (preLeft > preRight) {
            return null;
        }

        let leftCount = 0;
        if (preLeft < preRight) {
            leftCount = postMap[preorder[preLeft + 1]] - postLeft + 1;
        }

        return new TreeNode(
            preorder[preLeft],
            dfs(preLeft + 1, preLeft + leftCount, postLeft, postLeft + leftCount - 1),
            dfs(preLeft + leftCount + 1, preRight, postLeft + leftCount, postRight - 1)
        );
    };

    return dfs(0, preorder.length - 1, 0, postorder.length - 1);
};
