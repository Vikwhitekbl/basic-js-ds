const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this._root = null;
  }
  getRoot() {
    return this._root;
  }

  root() {
    return this._root;
    // remove line with error and write your code here
  }

  add(data) {
    const newNode = new Node(data);
    if (this._root === null) {
      this._root = newNode;
    } else {
      let result = this._root;
      while (true) {
        if (newNode.data < result.data) {
          if (result.left === null) {
            result.left = newNode;
            break;
          } else {
            result = result.left;
          }
        } else {
          if (result.right === null) {
            result.right = newNode;
            break;
          } else {
            result = result.right;
          }
        }
      }
    }
    // remove line with error and write your code here
  }

  has(data) {
    let result = this._root;
    while (result !== null) {
      if (data === result.data) {
        return true;
      } else if ( data < result.data) {
        result = result.left;
      } else {
        result = result.right;
      }
    }
    return false;
    // remove line with error and write your code here
  }

  find(data) {
    let result = this._root;
    while (result !== null) {
      if (data === result.data) {
        return result;
      } else if ( data < result.data) {
        result = result.left;
      } else {
        result = result.right;
      }
    }
    return null;
    // remove line with error and write your code here
  }

  remove(data) {
    let result = this._root;
    let parent = null;
    let isLeft = true;

    while (result !== null && result.data !== data) {
      parent = result;
      if (data < result.data) {
        result = result.left;
        isLeft = true;
      } else {
        result = result.right;
        isLeft = false;
      }
    }
    if (result === null) {
      return;
    }
    // no children
    if ( result.left === null && result.right === null) {
      if (result === this._root) {
        this._root = null;
      } else if (isLeft) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    } 
    // has only left child
    else if (result.left === null) {
      if (result === this._root) {
        this._root = result.right;
      } else if (isLeft) {
        parent.left = result.right;
      } else {
        parent.right = result.right;
      }
    } 
    // has only right child
    else if (result.right === null) {
      if (result === this._root) {
        this._root = result.left;
      } else if (isLeft) {
        parent.left = result.left;
      } else {
        parent.right = result.left;
      }
    }
    // has both childs
    else {
      let currentParent = result;
      let currentRight = result.right;
      let currentLeft = result.left;

      while (currentRight.left !== null) {
        currentParent = currentRight;
        currentRight = currentRight.left;
      }
      if (result === this._root) {
        this._root = currentRight;
      } else if (isLeft) {
        parent.left = currentRight;
      } else {
        parent.right = currentRight;
      }
      currentRight.left = currentLeft;

      if (currentParent !== result) {
        currentParent.left = currentRight.right;
        currentRight.right = result.right;
      }
    }
    // remove line with error and write your code here
  }

  min() {
    if (this._root === null) {
      return null;
    }
    let result = this._root;
    while (result.left !== null) {
      result = result.left;
    }
    return result.data;
    // remove line with error and write your code here
  }

  max() {
    if (this._root === null) {
      return null;
    }
    let result = this._root;
    while (result.right !== null) {
      result = result.right;
    }
    return result.data;
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};