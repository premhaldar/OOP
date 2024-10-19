class myProduct{
    constructor(price){
        this.price=price;
    }
    get GetPrice(){
        return this.price;
    }
    set SetPrice(value){
        this.price=value;
    }
}

let Product=new myProduct(100);
console.log(Product);

// Product.SetPrice=100;

// console.log(Product.GetPrice);
// ============================================
/*class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    get FullName(){
        return this.name
    }
    set FullName(value){
        this.name=value;
    }
    get Age(){
        return this.age
    }
    set Age(value){
        this.age=value;
    }   
}
let myPerson=new person("John",30);
myPerson.FullName="Prem";
myPerson.Age=25;
console.log("My name is",myPerson.name);
console.log("My age is",myPerson.age);*/
