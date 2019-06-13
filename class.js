//Point
class Point{
  constructor(x,y){
    this.x = x;
    this.y = y;
    
  }

  plus( point ){
    if( !point instanceof Point ){
      throw new Error('Incorrect type');
    }

    return new Point(this.x+point.x, this.y+point.y);
  }

}

console.log(new Point(1, 2).plus(new Point(2, 1)))
// → Point{x: 3, y: 3}


//Speaker upgrade
// class Speaker {
//   constructor(name, verb){
//     this.name = name;
//     this.verb = verb || "says" ;
//   }

//   speak(text){
//     console.log(this.name + " " + this.verb + " '" + text + "'") 
//   }
// }

// class Shouter extends Speaker {
//   constructor(name){
//     super(name);
//     this.verb = 'shouts'
//   }

//   speak(text){
//     super.speak(text.toUpperCase());
//   }
// }


// new Shouter("Dr. Loudmouth").speak("hello there")

//Getters
class Speaker {
  constructor(name, verb) {
    this.name = name
    this._verb = verb || "says"
  }
  
  get verb() { return this._verb;}
  // get name() { return this._name; }
  speak(text) {
    console.log(this.name + " " + this.verb + " '" + text + "'")
  }
}

class Shouter extends Speaker {
  constructor(name) {
    super(name, "shouts")
  }
  speak(text) {
    super.speak(text.toUpperCase())
  }
}

new Shouter("Dr. Loudmouth").speak("hello there")

