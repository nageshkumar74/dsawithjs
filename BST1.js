class Node{

    constructor(val){
      this.val=val;
      this.left=null;
      this.right=null;
    }
}


class BST{
 constructor(){
    this.root=null;
 }
 

 makeList(val){
    let newNode=new Node(val);
    if(this.root===null){
       this.root=newNode;

    }
    else {
        return this.insertNode(this.root,newNode);
    }

 }

 insertNode(root,newNode){
    if(root.val>newNode.val){
        if(root.left===null){
        root.left=newNode;
    }
    else {
        return insertNode(root.left,newNode)
    }

    }

    else {
        if(root.right===null){
            root.right=newNode;
        }
        else {
            return this.insertNode(root.right,newNode);
        }
    }
 }
}

let n=new BST();
n.makeList(30);
n.makeList(20);
n.makeList(50);
console.log(n);