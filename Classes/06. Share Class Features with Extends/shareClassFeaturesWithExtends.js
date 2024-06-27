// class Product {
//     constructor(name, price,discountable){
//         this.name = name;
//         this.price = price;
//         this.discountable = discountable;
//     }
//     isDiscountable(){
//         return this.discountable;
//     }
// }

// console.log(new Product('Coffee', 2.99, true));

// const product1 = new Product('Coffee', 2.99, true);
// console.log(product1.name);

// //instead of changing classes after they are created then we use Extends

// class SaleProduct extends Product {
//     constructor(name, price, discountable, salePrice){
//         super(name, price, discountable);
//         this.salePrice = salePrice;
//     }
//     getSalePrice(){
//         if(super.isDiscountable()) {
//         return this.price * ((100- this.percentOff)/100);
//     }else {
//         return `This ${this.name} product is not discountable`;
    
//     }
// }
// }

// const productSale = new SaleProduct('Coffee', 2.99, false, 1.99);

// console.log(productSale);
// console.log(new SaleProduct('Coffee', 2.99, true, 1.99));
class Product {
    constructor(name, price, discountable) {
      this.name = name;
      this.price = price;
      this.discountable = discountable;  
    }  
    
    isDiscountable() {
      return this.discountable;  
    }
  }
  
  class SaleProduct extends Product {
    constructor(name, price, discountable, percentOff) {
       super(name, price, discountable);
       this.percentOff = percentOff; 
    }  
    
    getSalePrice() {
       if (super.isDiscountable()) {
         return this.price * ((100 - this.percentOff) / 100);
       } else {
          return `${this.name} is not eligible for a discount`;
       }
    }
  }
  
  const saleProduct1 = new SaleProduct("Coffee Maker", 99, false, 20);
  console.log(saleProduct1.getSalePrice());

  // React 
// https://reactjs.org