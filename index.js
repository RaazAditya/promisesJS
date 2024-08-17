// class rectangle{
//     constructor(length,width,color){
//         this.length=length;
//         this.width=width;
//         this.color=color;
//     }
//     area(){
//         return this.length * this.width;
//     }
//     paint(){
//         console.log(`painting rectangle with ${this.color}`);
//     }
//     knowthis(){
//         console.log(this);
//     }
//     destroy(){

//     }
// }
// const rect=new rectangle(3,4,"red");
// console.log(rect.area());
// rect.paint();
// rect.knowthis();
// rect.destroy();

// let rect1={
//     length: 4,
//     width: 3,
//     color: "red",
//     area: function(){
//         console.log("area");
//     }
// }

// rect1.area();

// const now=new Date();
// console.log(now);
// console.log(now.getMonth());

// const map=new Map();
// map.set("name","Aditya");
// map.set("Age",20);
// console.log(map.get("name"));

// function waitfor3s(resolve){
//     setTimeout(resolve,3000);
// }
// console.log("first");
// waitfor3s(function (){
//     console.log("second");
// })
// console.log("third");

function random(){

}
let p=new Promise(random);
console.log(p);

