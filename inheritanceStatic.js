class Father{
  static addTwo(){
      let a=25;
      let b=30;
      let sum=a+b;
      console.log(sum);

  }
}
class Son extends Father{
    static addTwo(){
        let a=25;
        let b=30;
        let sum=a+b;
        console.log(sum);
}
}
Son.addTwo();
Father.addTwo()