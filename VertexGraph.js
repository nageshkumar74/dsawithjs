class Graph{

    constructor(){
        this.data={}
    }

add(vertex){

    if(!this.data[vertex]){
        this.data[vertex]=[]
    }

}
addEdge(v1,v2){

    if(!this.data[v1]){
        this.add(v1);
    }
    if(!this.data[v2]){
        this.add(v2);
    }

    this.data[v1].push(v2);
    this.data[v2].push(v1);


}


removeEdge(v1,v2){

  this.data[v1]  =this.data[v1].filter((item)=>{
     
 
  return  item!==v2
   
  })

  this.data[v2]=this.data[v2].filter((item)=>{

  return item!=v1;
})
  

return this.data;
}


// removeVertex(v){


//     if(this.data[v]) {

//         return;
//     }

//     for(let item of this.data[v]){

//        this.removeEdge(v,item)

//     }

//    delete this.data[v1];
// }


removeVertex(v){


    if(!this.data[v]) return;

    for(let item of this.data[v]){

        this.removeEdge(v,item);
    }
     delete this.data[v];
}


}

let n1=new Graph();
n1.add("A");
n1.add("B");
n1.add("C");
n1.add("D");
n1.addEdge("A","B");
n1.addEdge("A","c");
n1.addEdge("A","E");
n1.addEdge("B","A");
n1.addEdge("B","C");
n1.addEdge("B","D");
n1.addEdge("D","B");
n1.addEdge("E","A");
n1.addEdge("C","A");
n1.addEdge("C","B");
 n1.removeEdge("A","B");
n1.removeVertex("A");
console.log(n1.data);
