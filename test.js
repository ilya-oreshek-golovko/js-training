/*
const books = [];
const target = 1000000;

console.time("Time For 1");
for(let i = 0; i < 10000000; i++){
	books.push({pages : i});
}
console.timeEnd("Time For 1");

console.time("Time binar_1");
const itr = binar_1(books,target,0,books.length-1);
console.timeEnd("Time binar_1");


function binar_1(books, input, start, end){
	const middle = Math.floor((start + end)/2);

	if(books[middle].pages == target) return middle;
	if(books[middle].pages > target) return binar_1(books, input, start, middle);
	if(books[middle].pages < target) return binar_1(books, input, middle, end);
}

console.time("Time findIndex");
const index = books.findIndex(item => item.pages === target);
console.timeEnd("Time findIndex");

console.time("Time For 2");
for(let i = 0; i < books.length; i++){
	if(books[i].pages == target){
		break;
	}
}
console.timeEnd("Time For 2");
*/

class Node{
	constructor(data){
		this.data = data;
		this.left = null;
		this.right = null;
	}
} 
class BinarySearchTree{
	constructor(){
		this.root = null;
	}

	insert(data){
		const newNode = new Node(data);
		if(this.root === null){
			this.root = newNode;
		} else{
			this.insertNode(this.root, newNode);
		}
	}

	insertNode(currNode, newNode){
		if(currNode.data > newNode.data){
			if(currNode.left === null){
				currNode.left = newNode;
			} else{
				this.insertNode(currNode.left, newNode);
			}
		} else{
			if(currNode.right === null){
				currNode.right = newNode;
			} else{
				this.insertNode(currNode.right, newNode);
			}
		}
	}
} 


const BST = new BinarySearchTree();
BST.insert(11); // establishes root node 
BST.insert(7);
BST.insert(9);
BST.insert(15);
BST.insert(6);
console.log(BST);