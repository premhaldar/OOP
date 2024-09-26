class Father{
x=10;
y=15;
add(){
    let z=this.x+this.y;
    console.log(z);
}
}
class Son extends Father{
    x=10;
    y=15;
    add(){
        let z=this.x-this.y;
        console.log(z);
    }
}

let q=new Father();
console.log(q.x);
console.log(q.y);
q.add()

let p=new Son();
console.log(p.x);
console.log(p.y);
p.add()
