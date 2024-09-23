class myClass{
    num1=10
    num2=30
    addTwo=()=> {
        let sum=this.num1+this.num2
        console.log(sum)
    }
}
let obj1=new myClass()
obj1.addTwo()
console.log(obj1.num1)
console.log(obj1.num2)