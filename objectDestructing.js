// let arr=[10,20,40,60];
// let[a,,,b]=arr;
// console.log(a);
// console.log(b);

// let  obj={
//         brand:"mahindra",
//         price:3000000,
//         color:"black",
//         model:"Xuv 400",
//         type:{
//             d1:"petrol",
//             d2:"diesel",
//             d3: {
               
//             },
//             d4:"Gas",
//         },
//         ava:true,
//     }
//     let {color,type:{d2,d4}}=obj;
//     console.log(color);
//   //  console.log(type);
//     console.log(d2);
//     console.log(d4);

// let obj={
//     a:10,
//     b:30,
//     arr:[20,40,100]
// }
// let {arr:[,,a]}=obj
// console.log(a);

// let obj={
//     name:"pavan",
//     "d-o-b":"10-11-2000",
//     age:30,
//     backlog:true,
//     skills:["java","python","web Tech"],
//     passout:2022
// }
// obj.name="numair";
// obj.backlog=false;
// let {name,age,skills:[skill1,skill2]}=obj;
// console.log(`this is ${name} my age is ${age} i have no active backlog and my skills is ${skill2} and ${skill1} `);

// {
//     const a=10;
//     console.log(a)
// } 
// console.log(a)

// var a=10;
// console.log(a)
// a=200;
// console.log(a);
// let b=100
// console.log(b);
// b=400
// console.log(b);
// const c=20;
// console.log(c);
//c=300; reinitilize is not  possible using const 
//console.log(c);

// var a=20
// console.log(a);
// let a=30
// console.log(a);
// var a=60 
// console.log(a);

var a=20
let b=30
const c=50
console.log(window.a);
console.log(window.b);
console.log(window.c);