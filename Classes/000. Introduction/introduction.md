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

const student1 = new Student('BoB', 20, 'A');
student1.greet(); // Hello my name is bob
student.study(); // Bob is studyng


**Challenge: Your first Class**
Overview:
This challenge involves writing your first class to solidify your understanding of ES6 class syntax

**Tips:**
    - Define a classs for a simple oject such as an animal or a product
    - Include a constructor with properties at least one method
    - Create instances of the class and call their methods.

**Example:**
```
class Animal {
    constructor(species, name) {
        this.species = species;
        this.name = name;
    }

    speak() {
        sonsole.log(`${this.name} makes a sound);
    }
}

const animal1 = new Animal('Dog', 'Buddy')
animal1.speak() // Buddy makes a sound.

**Share a Class Features with Extends**
**Overview**
The `extends `keyword allow one class to inherit properties and methods from another class.

**Tips:**
    - Use `extends ` to create a subclass.
    - Call the parennt class constructor with `super ` in the subclass constructor.
    - Overide or extend methods as needed.
  
**Example:**
```
class Employee {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }

    work() {
        console.log(`${this.name} is working`);
    }
}

class Manager extends Employee {
    constructor(name, position, department) {
        super(name, position);
        this.department;
    }

    mange() {
        console.log(`${this.name} is manging ${this.department}`);
    }
}

const manager1 = new Manager('Carol', 'Manager', 'Sales');
manager.work(); // Carol is working
manager1.manage() // Carol is managing Sales


**How to get , Set and Simplify Classes**

**Overview:**
This section covers how to define getter and setter methods in classes and other ways to simplify class structures.
**Tips:**
    - Use `get` and `set`keywords to define getters and setters.
    - Getters and setters allow you to control access to object properties.

**Example:**
```
class Rectangle {
    constructor(width, height) {
        this.width = width
        this height = weight;
    }

    get area() {
        return this.width * this.weigth;
    }

    set simensions(dimensions) {
        this width = dimensions.width;
        this.height = dimensions.height;
    }
}

const rect = new Rectangle(5, 10);
console.log(rect.area); // 50
rect.dimensions = { width: 7, height: 14 }
console.log(rect.area) //98

**Fix Contents Problems with .bind()**

**Overview:**

The `.bind() ` method is used to ensure that `this`retains the correct context, especially in callback funcitons and event handlers.

**Tips:**
    - Use `bind(this)` to create a new function with `this` bound to the current context.
    - Understand when and why `this` loses context, such as in event listeners or callbacks.

**Example:**
```
class Button {
    constructor(label) {
        this.label = label;
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(`${this.label} button clicked`);
    }
}

const button = new Button('Submit');
document.querySelector('button?.addEventListene('click', button.handleClick))