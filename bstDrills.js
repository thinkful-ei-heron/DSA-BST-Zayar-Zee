const BST = require('./BST_example');

let bst = new BST()
let bst2 = new BST()

function tree(t, ) {
  //Traverses the tree vertically then outputs the node value and then the values of the child nodes
  if (!t) {
    return 0;
  }
  console.log(t.key)
  return tree(t.left) + t.value + tree(t.right)
}

let count = 0

function thirdLargest(t) {
  if (!t) {

  }

  if (t.right) {
      thirdLargest(t.right)
  }

  count += 1
  if (count === 3) {
    console.log('result: ', t.key)
    return
  }

  if (t.left) {
    thirdLargest(t.left)
  }
}

function treeHeight(t, depth = 0) {
  //runtime O(n)
  if (!t) {
    return depth;
  }
  if (t) {
    depth += 1
    return Math.max(
      treeHeight(t.left, depth),
      treeHeight(t.right, depth)
    )
  }


}

function isBST(t) {
  if (!t) {
    return true
  }

  if (t.left && t.left.key > t.key || t.right && t.right.key < t.key) {
    return false
  }

  if (t) {
    return (isBST(t.left) && isBST(t.right))
  }
  return true

}

function main() {
  // let input1 = [3, 1, 4, 6, 9, 2, 5, 7, 8, 15]
  let input1 = [3,2,4,1,6,10,7]
  let input2 = 'EASYQUESTION'.split('')

  input1.forEach((num) => {
    bst.insert(num)
  })

  input2.forEach(char => {
    bst2.insert(char)
  })

  const notBinary = new BST()
  notBinary.key = 3
  notBinary.left = new BST(key = 4, value = null, parent = notBinary)
  notBinary.right = new BST(key = 2, value = null, parent = notBinary)

  thirdLargest(bst)
  // tree(bst2)
  // console.log(treeHeight(bst))
  // console.log(isBST(bst))
  // console.log(isBST(notBinary))

}

main()