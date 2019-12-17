const BST = require('./BST_example');

let bst = new BST()
let bst2 = new BST()

function tree(t, ) {
  if (!t) {
    return 0;
  }
  console.log(t.key)
  return tree(t.left) + t.value + tree(t.right)
}

function main() {
  let input1 = [3, 1, 4, 6, 9, 2, 5, 7]
  let input2 = 'EASYQUESTION'.split('')

  input1.forEach((num) => {
    bst.insert(num)
  })

  input2.forEach(char => {
    bst2.insert(char)
  })

  tree(bst)
  tree(bst2)
}

main()