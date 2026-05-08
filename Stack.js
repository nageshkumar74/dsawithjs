class Stack{


    constructor(){
        this.item=[];
    }

    push(element){
        return this.item.push(element);
    }
    isEmpty(){
        return this.item.length===0;
    }
    pop(){
        if(this.isEmpty()){
            return "Stack is Empty";
        }
        return this.item.pop();
    }
    peek(){
        if(this.isEmpty()){
            return "Stack is empty";
        }
        return this.item[this.item.length-1];
    }
}

let s1=new Stack();

s1.pop();
s1.push(20);
s1.push(21);
console.log(s1.peek());
console.log(s1.pop());