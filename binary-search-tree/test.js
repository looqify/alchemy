const Tree = require("./Tree");
const Node = require("./Node");

const tree = new Tree();

tree.addNode(new Node(5));
tree.addNode(new Node(7));
tree.addNode(new Node(2));
tree.addNode(new Node(13));

console.log(tree.root);
console.log("Is there a node 13? : " + tree.hasNode(13));
console.log("Is there a node 0? : " + tree.hasNode(0));
