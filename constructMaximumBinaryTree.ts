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
     val: number
     left: TreeNode | null
     right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
 }

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
    let max = Number.MIN_SAFE_INTEGER;
    let maxIndex = -1;
    const n = nums.length;
    nums.forEach((item, index) => {
        if (item > max) {
            max = item;
            maxIndex = index;
        }
    })
    let node: TreeNode | null = null;
    if (maxIndex > -1) {
        node = new TreeNode(max, constructMaximumBinaryTree(nums.slice(0, maxIndex)), constructMaximumBinaryTree(nums.slice(maxIndex + 1, n)));
    }
    return node;
};

function insertIntoMaxTree(root: TreeNode | null, val: number): TreeNode | null {
    const flatArr = firstOrder(root);
    flatArr.push(val);
    console.log(flatArr);
    return constructMaximumBinaryTree(flatArr);
};

function firstOrder(root: TreeNode | null): number[] {
    let res: number[] = [];
    if (!root || root === null) {
        return [];
    }
    res = [...firstOrder(root.left), root.val, ...firstOrder(root.right)];
    return res;
}

function generateTree(arr: number[], index: number = 0): TreeNode | null {
    const root: TreeNode = new TreeNode(arr[index], generateTree(arr, 2 * index + 1), generateTree(arr, 2 * index + 2))
    return root;
}

insertIntoMaxTree(generateTree([4,1,3,null,null,2]), 5);