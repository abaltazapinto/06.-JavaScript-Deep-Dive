// Prototypical inheritance - each instantiated object (from constructor function) inherits from the constructor function's prototype object

// every object has prototype property, which is a reference to another object

// console.log(new Object())

function Student(id, name, subjects = []) {
    this.id = id;
    this.name = name;
    this.subjects = subjects;
  }
  
  const student1 = new Student(1, 'Reed');

//   console.log(Object.getPrototypeOf(student1).constructor)

 console.log(student1.__proto__.__proto__  === Object.prototype)