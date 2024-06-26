**Module intro: Classes**

**Overview:**
- This module introsuces the convept of classes inJavascript, which are a blueprint for creating with shared properties and methods.

**Tips:**

- Understand that classes in Javascript are syntatic sugar over prototype-based inheritance.
- Focus on how classes can help you organize and sturcture your code better, especially for complex applications. 

**What are constructor Functions?**

**Overview**
constructor functions are special functions used to create and initialize objects in Javascript.

**Tips:**
- Learn the `funtction`keyword to create a constructor function.
- use the `new` keyword to instantiate objects from a constructor function.
- Initialize object properties within the constructor function using `this`.


**Example:**
```
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person('Alice', 30);
console.log(person1.name); // Alice 
```


**Challenge: Your First Constructor Function**
**Overview:**
This challenge involves writing your own constructor function to solidify your understanding.

**Tips:**
-Define a constructor function for a simple object likke a car or a book.
- Include several propertie and a method withinn the constructor function.
- Pratice Instantiatingm multiple objects to see the constructor function in action.

**Example:**
```
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

const car1 = new Car ('Toyota'. 'Corolla', 2020);
const car2 = new Car ('Honda', 'Civic?, 2019);
```

**Understand the Prototype Chain**

**Overview:**
The protorype chain is a funcdamental concept in Javascript that allows object to inherit properties and methods from other objects.

**Tips:**
- Every Javascript Object has a prototype.
- Learn how to access and set the prototype of an object using the `Object.getPrototypeOf`nad `Object.setPrototypeOF`.
- Understand how methods defined on the prototype and shared across all instances.

**Example**
```
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

const person1 = new Person('Alice', 30);
person1.greet() // Hello, my name is Alice;
```
**Easy Prototypal inheritance with Classes**
**Overview**
Classes in Es6 provide a more straightfowatrd syntax for creating object and handling inheritance.
**Tips:**
    - use the `class`keyword to define a class.
    - Use `extends` for inheritance and `super` to call the parent class constructor.
    - Classes can have a constructor and other methods.

**Example:**

```
class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name})
    }
}

Class Student extends Person {
    constructor(name,age,grade) {
            super(name, age);
            tihs.grade = grade;
    }
    
    study() {
        console.log(`${this.name} is studying`);
    }
}