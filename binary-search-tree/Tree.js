class Tree {
	constructor() {
		this.root = null;
	}

	addNode(node) {
		if (!this.root) this.root = node;

		if (node.data > this.root.data) {
			// check if parent have right child
			const rightChild = this.root.right;
			if (!rightChild) {
				this.root.right = node;
			} else {
				this.setNode(rightChild, node);
			}
		} else {
			// check if parent have left child
			const leftChild = this.root.left;
			if (!leftChild) {
				this.root.left = node;
			} else {
				this.setNode(leftChild, node);
			}
		}
	}

	setNode(parent, child) {
		if (child.data > parent.data) {
			parent.right = child;
		} else {
			parent.left = child;
		}
	}

	hasNode(n) {
		let parent = this.root;
		let result = null;
		while (true) {
			if (!parent) {
				result = false;
				break;
			}
			if (parent.data === n) {
				result = true;
				break;
			}
			parent = n < parent.data ? parent.left : parent.right;
		}
		return result;
	}
}

module.exports = Tree;
