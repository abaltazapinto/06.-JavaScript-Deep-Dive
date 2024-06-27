class Product {
    constructor(name, price, discountable) {
      this.name = name;
      this._price = price;
      this.discountable = discountable;
    }
  
    get price() {
      return this._price;
    }
    
    set newPrice(price) {
       if(typeof price !== "number") {
        return this._price;
    } else {
      this._price = price;
    }
  }
    // Getter for name
    get name() {
        return this._name;
      }
      
      // Setter for name
      set name(name) {
        if (typeof name !== "string" || name.trim() === "") {
          console.log('Invalid name. It must be a non-empty string.');
          return this._name;
        } else {
          this._name = name; 
        }
      }
    }
    

// const product1 = new Product("Coffee Maker", 99.95, false);
// product1.price = 30;
// console.log(product1.price);

const product1 = new Product("Coffee Maker", 99.95, false);
product1.price = 30;
console.log(product1.price); // 30

product1.name = "Espresso Machine";
console.log(product1.name); // Espresso Machine

product1.name = "";
console.log(product1.name); // Invalid name. It must be a non-empty string. Espresso Machine

product1.name = 123;
console.log(product1.name); // Invalid name. It must be a non-empty string. Espresso Machine

// product1.price = {};
/* To add a setter and getter for the `name ` property in your Product class and ensure that the name is valid, you can follow a similar aproach to what you have done with the `price` property. Here's how you can do it:
1. Add a private property form `name`(e.g. `_name`) to the Product class.
2. Creatte a getter for the `name `
3. Create a setter for the name that includes the validation logic.
*/

