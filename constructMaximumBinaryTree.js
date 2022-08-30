/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
function constructMaximumBinaryTree(nums) {
    let max = Number.MIN_SAFE_INTEGER;
    let maxIndex = -1;
    const n = nums.length;
    nums.forEach((item, index) => {
        if (item > max) {
            max = item;
            maxIndex = index;
        }
    });
    let node = null;
    if (maxIndex > -1) {
        node = new TreeNode(max, constructMaximumBinaryTree(nums.slice(0, maxIndex)), constructMaximumBinaryTree(nums.slice(maxIndex + 1, n)));
    }
    return node;
}
;
function insertIntoMaxTree(root, val) {
    const flatArr = firstOrder(root);
    flatArr.push(val);
    console.log(flatArr);
    return constructMaximumBinaryTree(flatArr);
}
;
function firstOrder(root) {
    let res = [];
    if (!root || root === null) {
        return [null];
    }
    res = [...firstOrder(root.left), root.val, ...firstOrder(root.right)];
    return res;
}
function generateTree(arr, index = 0) {
    const root = new TreeNode(arr[index], generateTree(arr, 2 * index + 1), generateTree(arr, 2 * index + 2));
    return root;
}
insertIntoMaxTree(generateTree([4, 1, 3, null, null, 2]), 5);
