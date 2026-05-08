


class Node {
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
    isEmpty(){
        return this.root===null;
    }
    makeTree(val){
        let newNode=new Node(val)
        if(this.root===null){
            this.root=newNode;
        }

        else {
            this.insertNode(this.root,newNode)
        }  
        

    }
    insertNode(root,newNode){
        if(root.val>newNode.val){
        if(root.left===null){
         root.left=newNode;
        }
         else {
            this.insertNode(root.left,newNode);
         }
        }
        else {
            if(root.right===null){
                root.right=newNode;
            }
            else {
                this.insertNode(root.right,newNode)
            }
        }         
        


         
    }
}


let bst=new BST();
bst.makeTree(20);
bst.makeTree(5);
bst.makeTree(25);
console.log(bst.isEmpty());
console.log(bst);