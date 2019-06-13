// not working
// function get(url) {
//   return new Promise((succeed, fail) => {
//     var req = new XMLHttpRequest();
//     req.open("GET", url, true);
//     req.addEventListener("load", () => {
//       console.log("end");
//       if (req.status < 400) succeed(req.responseText);
//       else fail(new Error("Request failed: " + req.statusText));
//     });
//     req.addEventListener("error", () => {
//       fail(new Error("Network error"));
//     });
//     req.send(null);
//   });
// }

// get("http://marijnhaverbeke.nl/").then(console.log).catch();

// Promise.all

console.log("==========Promise.all");
function all(promises) {
  return new Promise(function(success, fail) {
    // Your code here.
    let iterator = promises[Symbol.iterator]();
    let results = [];
    let fails = [];
    let loop = () => {
      let pr= iterator.next()
      
      if(pr.done){ 
        if(fails.length>0) fail(fails); 
        success(results);
        return;
      }
      pr.value
        .then(result=>{
          results.push(result);

        })
        .catch(e=>{
          fails.push(e);
        })
        .finally((e)=>{
          loop()
        });
    }
    loop();
  });
}

//Test code.
all([soon(100)]).then(function(array) {
  console.log("This should be []:", array);
});
function soon(val) {
  return new Promise(function(success) {
    setTimeout(function() { success(val); },
               Math.random() * 500);
  });
}
all([soon(1), soon(2), soon(3)]).then(function(array) {
  console.log("This should be [1, 2, 3]:", array);
});
function fail() {
  return new Promise(function(success, fail) {
    fail(new Error("boom"));
  });
}
all([soon(1), fail(), soon(3)]).then(function(array) {
  console.log("We should not get here");
}).catch(function(error) {
  if (error.message != "boom")
    console.log("Unexpected failure:", error);
} 
);