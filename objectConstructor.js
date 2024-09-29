function person(){
    this.FirstName="prem";
    this.LastName="kumar";
    this.Age=28;
    this.city="Dhaka";
    this.isBangladeshi=true;
    this.getFullName=()=>{
        return `My name is ${this.FirstName} ${this.LastName}. I am ${this.Age} years old. I live in ${this.city}. I am ${this.isBangladeshi? 'Bangladeshi' : 'not Bangladeshi'}.`;
    }

}
let p=new person();
console.log(p.getFullName());