//Accounting
const inventory = [
  {type:   "machine", value: 5000},
  {type:   "machine", value:  650},
  {type:      "duck", value:   10},
  {type: "furniture", value: 1200},
  {type:   "machine", value:   77}
]

let totalMachineValue = inventory
  .filter(({type})=> type ==='machine')
  .reduce(
    (total, {value}) => total+value, 0 
  );

console.log('Accounting',totalMachineValue)


// sorted array
class SortedArray{
  constructor(compare) {
    this.compare = compare
    this.content = []
  }

  findPos(elt){
    this.content.findIndex((con)=>{
      return this.compare(elt, con) < 0;
    })
  }

  insert(elt){
    this.content.splice(this.findPos(elt), 0, elt)
  }
}

var sorted = new SortedArray(function(a, b) { return a - b })
sorted.insert(5)
sorted.insert(1)
sorted.insert(2)
sorted.insert(4)
sorted.insert(3)
console.log("sorted array:", sorted.content)