class Father{
    constructor(msg){
        console.log(msg)
    }
}
class Son extends Father{
    constructor(msg){
        super() //permission
        console.log(msg)
    }
}
let son= new Son("This is son father constructor")
let father= new Father("Hellow This is Father Constructor")