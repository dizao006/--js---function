function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let root = new TreeNode(3);
let node9 = new TreeNode(9);
let node20 = new TreeNode(20);
let node15 = new TreeNode(15);
let node7 = new TreeNode(7);
root.left = node9;
root.right = node20;
node20.left = node15;
node20.right = node7;

function DFS(root) {
  if (root === null) return [];
  const queue = [root];
  const result = [];
  while (queue.length) {
    const path = [];
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      path.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    result.push(path);
  }
  return result;
}

console.log(DFS(root));
