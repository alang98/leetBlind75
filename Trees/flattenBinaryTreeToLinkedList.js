class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let newNode = new Node(data);

    if(this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if(node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  inOrderTraversal() {
    const traverse = (root) => {
      if (root === null) {
        return
      }
      traverse(root.left);
      console.log(root.data);
      traverse(root.right);
    }
    traverse(this.root);
  }
}



const createCompleteBinaryTreeFromArray = (arr) => {
  const length = arr.length;
  const binaryTree = new BinaryTree();
  const traverseAndReplace = (root, i) => {
    if (i < length) {
      root = new Node(arr[i]);
      console.log('question: ', 2 * i + 1);
      root.left = traverseAndReplace(root.left, 2 * i + 1);
      root.right = traverseAndReplace(root.right, 2 * i + 2)
    }
    return root
  }
  binaryTree.root = traverseAndReplace(binaryTree.root, 0);
  return binaryTree;
}

const result = createCompleteBinaryTreeFromArray([1,2,5,3,4,null,6])
console.log('tree', result)


result.inOrderTraversal();

const insertNodeToBinaryTree = (arr, root, i) => {
  if (i < arr.length) {
    let temp = new Node(arr[i])
    root = temp;

    root.left = insertNodeToBinaryTree(arr, root.left, 2 * i + 1)
  }


}




const flatten = (root) => {
  let head = null

  const dfs = (node) => {
    if (!node) {
      return null;
    }
    let left = node.left;
    let right = node.right;

    if (!head) {
      head = node
    } else if (head) {
      head.left = null
      head.right = node
      head = head.right
    }

    dfs(left)
    dfs(right)
  }
  dfs(root)
  return head;
}

console.log(flatten(result))