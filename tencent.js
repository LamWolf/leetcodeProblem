// class TreeNode {
//      val: number
//      left: TreeNode | null
//      right: TreeNode | null
//      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//          this.val = (val===undefined ? 0 : val)
//          this.left = (left===undefined ? null : left)
//          this.right = (right===undefined ? null : right)
//      }
//  }
// export function getBinaryTrees(preOrder: number[], inOrder: number[]): TreeNode[] {
//     // write code here
// }
// function buildTree(preOrder: number[], inOrder: number[], rootIndex: number, inLeft: number, inRight: number, n: number): TreeNode {
//     const rootValue = preOrder[rootIndex];
//     let curRoot: TreeNode;
//     for(let i = inLeft; i <= inRight; i++) {
//         if (inOrder[i] === rootValue) {
//             curRoot = new TreeNode(inOrder[i]);
//             if (rootIndex < n) {
//                 curRoot.left = buildTree(preOrder, inOrder, rootIndex + 1, inLeft, i - 1, n);
//                 curRoot.right = buildTree(preOrder, inOrder, rootIndex + 1, i + 1, inRight, n);
//             }
//         }
//     }
// }
function minOperations(str) {
    // write code here
    var charCount = new Array(26).fill(0);
    var overTwoCount = 0;
    var res = 0;
    for (var i = 0; i < str.length; i++) {
        var index = getIndex(str[i]);
        charCount[index] = charCount[index] + 1;
        if (charCount[index] >= 2)
            overTwoCount += 1;
    }
    var _loop_1 = function () {
        var curIndex = -1;
        var curCount = 0;
        charCount.some(function (item, index) {
            if (item >= 2) {
                curIndex = index;
                curCount = item;
                return true;
            }
            return false;
        });
        curCount -= 2;
        res += 1;
        if (curCount < 2) {
            overTwoCount -= 1;
        }
        charCount[curIndex] = curCount;
        var zeroIndex = -1;
        charCount.some(function (item, index) {
            if (item === 0) {
                zeroIndex = index;
                return true;
            }
            return false;
        });
        if (zeroIndex > -1 && zeroIndex !== curIndex) {
            charCount[zeroIndex] = 1;
        }
        else {
            var maxIndex = -1;
            var maxCount = 0;
            for (var i = 0; i < 26; i++) {
                if (maxCount < charCount[i] && curIndex !== i) {
                    maxCount = charCount[i];
                    maxIndex = i;
                }
            }
            charCount[maxIndex] = maxCount + 1;
        }
    };
    while (overTwoCount > 0) {
        _loop_1();
    }
    return res;
}
function getIndex(char) {
    return char.charCodeAt(0) - 'a'.charCodeAt(0);
}
console.log(minOperations('aabbccddeeff'));
