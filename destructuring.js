//Avoiding disaster
function go(options) {
  let {speed = 4,
       enable: {hyperdrive = false,
                frobnifier = true} = {} } = options
  console.log("speed=", speed,
              "hyperdrive:", hyperdrive,
              "frobnifier:", frobnifier)
}

go({speed: 5})


//Default argument
function lastIndexOf(arr, elt, start = arr.length) {
  for (let i = start - 1; i >= 0; i--)
    if (arr[i] === elt) return i
  return -1
}

console.log(lastIndexOf([1, 2, 1, 2], 2))


//Improve this code

function detectCollision(objects, point) {
  return objects.find( ( {x,y,width, height} )=>{
    const  { x: px, y: py } = point;
  	return px >= x && px <= x + width && py >= y && py <= y + height;
  })
}

const myObjects = [
  {x:  10, y: 20, width: 30, height: 30},
  {x: -40, y: 20, width: 30, height: 30},
  {x:   0, y:  0, width: 10, height:  5}
]

console.log(detectCollision(myObjects, {x: 4, y: 2}))