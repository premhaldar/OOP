// class myClass{
//     num1=10
//     num2=30
//     addTwo=()=> {
//         let sum=this.num1+this.num2
//         console.log(sum)
//     }
// }
// let obj1=new myClass()
// obj1.addTwo()
// console.log(obj1.num1)
// console.log(obj1.num2)

// ---------------------------------------

/*class ThisClass{
    a=2;
    b=3;
    Multi=()=>{
        let res=this.a*this.b;
        console.log(res);
    }
}
let className=new ThisClass();
className.Multi()*/


//---------------------------------------

class abc{
    add=(a,b)=>{
        let c=a+b;
        return c;
    }
}
let myClass=new abc();
console.log(myClass.add(10,2))

// ==============================================
/*class person{
    first_name="Prem"
    last_name="Haldar"
    age=25
    city="New York"
    getFullName=()=>{
        return "My name is "+this.first_name+" "+this.last_name+". I am "+this.age+" years old. I live in "+this.city+"."
    }
}
let Myself=new person();

console.log(Myself.getFullName())*/