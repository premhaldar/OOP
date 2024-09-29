// class myClass{
//     constructor(){
//         console.log("i am constructor")
//     }
// }
// const MyClass=new myClass();

// ====================================
/*class myClass{
    constructor(a,b) {
        let c=a+ b;
        console.log(c)
    }
}
const MyClass=new myClass(10,20)*/

// ====================================
class Addition{
    num1=10;
    num2=30;
    constructor(a,b){
        this.num1= a;
        this.num2=b;
    }
    addTwo(){
        let Equal=this.num1+this.num2;
        return Equal;
    }
}
let FinalAddition=new Addition(2,5);
console.log(FinalAddition. addTwo());