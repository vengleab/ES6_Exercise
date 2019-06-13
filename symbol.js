// Function compose
console.log('===========Function compose');

const compose = Symbol();
Function.prototype[compose] = function(wrapper){
  let originFunction = this;
    return function (){
      return wrapper.apply(originFunction,[ originFunction.apply(originFunction,arguments)])
    }
}

let roundedAbs = Math.round[compose](Math.abs)
console.log(roundedAbs(-5.51))
console.log(Math.round(-5.51))

// → 6

console.log('===========Function compose');

//Privacy

console.log('=========== Privacy');
const _content = Symbol();
class Queue {
  
  constructor() {
    this[_content] = []
  }
  put(elt) {
    return this[_content].push(elt)
  }
  take() {
    return this[_content].shift()
  }
}

let q = new Queue
q.put(1)
q.put(2)
console.log(q.take())
console.log(q.take())
console.log('=========== Privacy');
