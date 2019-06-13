// 1 Fake point
console.log('// 1 Fake point');

class Point {
  constructor(x, y) {
    this.x = x, this.y = y
  }
  add(other) {
    return new Point(this.x + other.x, this.y + other.y)
  }
}

var fakePoint = Object.create(Point.prototype);
console.log(fakePoint instanceof Point)
console.log('// 1 Fake point');


// 2 Configurable property
console.log('// 2 Configurable property');

function startNode(type, value, options) {
  return {
  	type,
    value,
    [options.sourceProperty]:options.sourceValue
  }
}

console.log(startNode("Identifier", "foo", {
  sourceProperty: "src",
  sourceValue: "bar.js"
}))

console.log('// 2 Configurable property');

//Singleton

console.log('//Singleton');

var ids = {
  next: 0,
  get(){
  	return this.next++;
  }
}

console.log(ids.get())
// → 0
console.log(ids.get())
// → 1

console.log('//Singleton');

