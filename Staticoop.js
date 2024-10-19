// static=without creating any object it can be work
/*
class Abc{
 static addTwo=(a,b)=>{
    let sum=a+b;
    console.log(sum);
 }
}
// let myClass=new Abc();
// myClass.addTwo(10,12)
Abc.addTwo(4,5)

// -----------------------------
class abc{
   static add=(a,b)=>{
       let c=a+b;
       console.log(c);
   }
}
abc.add(10,2)
*/

class mySelf{
   static first_name="prem"
   static last_name="Haldar"
   static getName=()=>{
      return `My name is ${this.first_name}  ${this.last_name}`
   }
}
// let Myself= new mySelf();
// console.log(Myself.getName())
console.log(mySelf.first_name)
console.log(mySelf.last_name)
console.log(mySelf.getName())