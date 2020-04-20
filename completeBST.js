function completeBinaryTree(a) {
    console.log(a)
    class Node {
      constructor(value){
          this.value = value;
          this.left = null;
          this.right = null;
      }
  }
  
    class BinarySearchTree {
      constructor(){
          this.root = null;
      }
      insert(value){
          var newNode = new Node(value);
          if(this.root === null){
              this.root = newNode;
              return this;
          }
          var current = this.root;
          while(true){
              if(value === current.value) return undefined;
              if(value < current.value){
                  if(current.left === null){
                      current.left = newNode;
                      return this;
                  }
                  current = current.left;
              } else {
                  if(current.right === null){
                      current.right = newNode;
                      return this;
                  }
                  current = current.right;
              }
          }
      }
  }
  let tree = new BinarySearchTree();
  for (el of a){
    tree.insert(el)
  }
  
  return tree
  
  }