// Implement Map
class MyMap {
  constructor() {
    this.arr = [];
  }
  get(key) {
    return this.arr[key];
  }

  set(key, value) {
    this.arr[key] = value;
  }

  delete(key) {
    delete this.arr[key];
  }

  get size() {
    return Object.keys(this.arr).length;
  }

  clear() {
    this.arr = [];
  }
}

const names = new MyMap();
//Array = 't';
//Math = 'm';
names.set(Array, "the array constructor");
names.set(Math, "the math object");
console.log(names.get(Array));
// → "the array constructor"
console.log(names.size);
// → 2
names.delete(Array);
console.log(names.get(Array));
// → undefined
names.clear();
console.log(names.get(Math));
// → undefined
console.log("===========");




// Generate a random graph
const graph = [];
for (let i = 0; i < 50; i++) graph.push({ value: Math.random(), edges: [] });
for (let i = 0; i < 100; i++) {
  let from = graph[Math.floor(Math.random() * graph.length)];
  let to = graph[Math.floor(Math.random() * graph.length)];
  if (from.edges.indexOf(to) != -1) continue;
  from.edges.push(to);
}

function connectedValue(node) {
  let mySet = new Set();
  let res = (function calc(cNode) {
    let leafNode = !cNode.edges || cNode.edges.length == 0;
    if (leafNode) {
      return cNode.value ? cNode.value : 0;
    }

    if (mySet.has(cNode)) {
      return 0;
		}
		
    mySet.add(cNode);
    return cNode.value + parseFloat(cNode.edges.map(calc));
  })(node);
  mySet = new Set();
  return res;
}
console.log(connectedValue(graph[0]));
console.log(connectedValue(graph[24]))
console.log(connectedValue(graph[49]))
