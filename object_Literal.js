let mySelf={
  first_name:"Prem",
  last_name:"Haldar",
  age:30,
  city:"Dhaka",
  isBangladesh: true,
  getName:()=>{
    return `My name is ${mySelf.first_name} ${mySelf.last_name} .My age is ${mySelf.age}. I'm from ${mySelf.city}. I'm a ${mySelf.isBangladesh}.`;
  }
};
console.log(mySelf.getName());
// const calculator = {
//     number1: 10,
//     number2: 20,
//     number3: 20,
  
//     // Function to add the two numbers
//     add: function() {
//       return this.number1 + this.number2-this.number3;
//     },
  
//     // Function to subtract the two numbers
//     subtract: function() {
//       return this.number3 - this.number2;
//     },
  
//     // Function to multiply the two numbers
//     multiply: function() {
//       return this.number3 * this.number2;
//       console.log("This is the multiply function");
//     },
  
//     // Function to divide the two numbers
//     divide: function() {
//       if (this.number2 !== 0) {
//         return this.number1 / this.number2;
//       } else {
//         return "Division by zero is not allowed!";
//       }
//     }
//   };
  
//   // Using the functions (methods) of the object
//   console.log(calculator.add());       // Output: 30
//   console.log(calculator.subtract());  // Output: -10
//   console.log(calculator.multiply());  // Output: 200
//   console.log(calculator.divide());    // Output: 0.5