
//List iterator
console.log('========= List iterator');

class List {
  constructor(head, tail) {
    this.head = head
    this.tail = tail
  }

  [Symbol.iterator]() {
    let i = 1;
    //console.log(this.tail, this.head);
      return {
        
        next :() => {
          
          
          
          if(this.tail === null && this.head === null){
            return { done: true }
          }  
          
          const next = { done: false, value: this.head }
          
          this.head = (this.tail) ? this.tail.head : null;
          this.tail = (this.tail) ? this.tail.tail : null;
          
          return next;
        }
      }
  }

  map(f) {
    return new List(f(this.head), this.tail && this.tail.map(f))
  }
}

let list = new List("x", new List("y", new List("z", null)))

for (let elt of list) console.log('elt=======',elt)
// → x
//   y
//   z
console.log('========= List iterator');



// Take N
console.log('========= Take N');
function integers() {
  let i = 0
  return {next() { return {value: i++} },
          [Symbol.iterator]() { return this }}
}

function take(n, iter) {
  let i = 0;
  return {
    
    next() {
    	if(i++<n)
          return { done: false, ...iter.next() }
        return { done: true}
    	
      // Your code here
    },
    [Symbol.iterator]() { return this }
  }
}


for (let elt of take(3, integers()))
  console.log(elt)
// → 0
//   1
//   2
console.log('========= Take N');





