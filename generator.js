import { log } from "util";

//List generator
class List {
  constructor(head, tail) {
    this.head = head
    this.tail = tail
  }
 
  *[Symbol.iterator](){
      while(this.head){
        yield this.head;
      if(!this.tail) break;
      this.head= this.tail.head;
      this.tail= this.tail.tail;
    }
      
  }
 
  map(f) {
    return new List(f(this.head), this.tail && this.tail.map(f))
  }
 }
 
 let list = new List("x", new List("y", new List("z", null)))
 
 for (let elt of list) console.log(elt)
 // → x
 //   y
 //   z
 
 // Take N again
console.log('// Take N again');

 function* integers() {
  for (let i = 0;; i++) yield i
 }
 
 function* take(n, iter) {
  for(i of iter){
    if(i>=n) break;
    yield i;
  }
 }
 
 for (let elt of take(3, integers()))
  console.log(elt)
 // → 0
 //   1
 //   2
 
