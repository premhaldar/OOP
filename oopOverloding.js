class myClass{
    myMethod(p1, p2,p3){
        if(arguments.length==1){
            console.log("receive one arguments:",p1)
        }
        else if(arguments.length==2){
            console.log("receive two arguments:",p1,p2)
        }
        else if(arguments.length==3){
            console.log("receive three arguments:",p1,p2,p3)
        }
    }
}
let a=new myClass()
a.myMethod(1)
a.myMethod(1,2)
a.myMethod(1,2,3)