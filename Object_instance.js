let person= new Object();
person.name="John Doe";
person.age=30;
person.city="New York";
person.getFullName=()=>{
    return `my name is ${person.name} ${person.age} years old. I live in ${person.city}.`};

console.log(person.getFullName());