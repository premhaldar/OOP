class Father{
    constructor(){
        console.log("Hellow This is Father Constructor")
    }
}
class Son extends Father{
    constructor(){
        super() //permission
        console.log("This is son constructor")
    }
}
let son= new Son()
let father= new Father()