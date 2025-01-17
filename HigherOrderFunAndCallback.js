// // function x(y){
// //     console.log("Hello");
// //    // y()
// // }
// // x(function y(){
// //     console.log("Hello world");
// // })

// // function x(){
// //     console.log("Hello");
// //    // y()
// // }
// // x((()=>{
// //     console.log("Hello world");
// // }))();
 

// // function add(sub ,a,b){
// //     console.log(a+b);
// //     sub();
// // }
// //  add(function sub(x,y){
// //     console.log(x-y);
// //  })

// // setTimeout( function delay(){
// //     console.log("hello world");
// // },5000)

// // setTimeout(delay,4000)
// // function delay(){
// //     console.log(" byee byee");
// // }

// // setTimeout( function delay(){
// //     alert("payment succcesfull")
// // },4000)

// let arr=[10,20,30,40,50,60];
// for(x in arr){
//     console.log(x);
// }
// for(x of arr){
//     console.log(x);
// }

// let radius=[1,2,3];
// let area=function(dia){
//     let output=[];
//     for(let i=0;i<radius.length;i++){
//         output.push(Math.PI*radius[i]*radius[i]);
//     }
//     return output;
// }(()=>{ function dia(radius) {
//         let di=[];
//         di.push(2*radius[i])
//     }
// })
// console.log(output);
// console.log(di);

// let a=
// //[2,3,4,5,6,7]
// let x=a.map(function(res){
//     return res+1;
//     //console.log(res*2);
// })
// console.log(x);
//a.map(res=>console.log(res*2));

// let x=[1,2,3,4,5,6];
// let res=x.map((newval,index,original)=>{
//    // console.log(newval);
//    // console.log(index);
//     //return newval*2;
//     return index*2;
// })
// console.log(res);

// 
// let x=[
//     {
//         name:"arun",
//         age:21,
//         skills:["java","python"],
//     },
//     {
//         name:"balu",
//         age:23,
//         skills:[],
//     },
//     {
//         name:"arun",
//         age:19,
//         skills:[],
//     }
// ]
// let res=x.map((newval,index,orginal)=>{
//    return (x[index].name);
   
// })
// console.log(res);
// let res1=x.filter(user=>user.age>20);
 
// console.log(res1);

// let radius = [1, 2, 3];

// let area = function(val) {
//     return val.map(r => Math.PI * r * r);
// };

// let diameters = (function(val) {
//     return val.map(r => 2 * r);
// })(radius);

// let areas = area(radius);

// console.log("Areas: ", areas);        
// console.log("Diameters: ", diameters);  

// console.log("=====================");

// let radius1 = [1, 2, 3];
// let circumference=(val)=> {
//     return val.map(r => 2*Math.PI*r );
// };

// let volume=((val)=> {
//     return val.map(r =>(4/3)*Math.PI*r*r*r);
// })(radius1);

// let circum= circumference(radius);

// console.log("Circumference : ", circum);        
// console.log("Volume: ", volume);

// let a=[
//     {
//         id:1,
//         name:"numair"
//     },
//     {
//         id:2,
//         name:"abhay"
//     },
//     {
//         id:3,
//         skills:["java","pyhton","c++"],
//     }
// ]

// // for(x of a){
// //     console.log(x.id);
// // }
// a.map((x,y,z)=>{
//    console.log(x.name);
// })

// let a=[1,2,3,4,5,6];
// let ans=a.reduce((x,y)=>{
//   return x=x+y;
// })
//  console.log(ans);
 
// let a=[1,2,3,4];
// var sum=1;
// for(x of a){
//      sum=sum*x;
// }
//   for(x in a){
//     console.log(sum/x+1);
//   }

// let a=[1,2,3,4]
// let red=a.reduce((x,y)=>{
    
//     return x=x*y;
// },10)
// let ans=a.map((x=>red/x))
//  console.log(ans);

// var pets = ['dog','chicken','cat','dog','chicken','chicken','rabbit'];
// var obj = {};
// for (let i = 0; i < pets.length; i++) {
//     let pet = pets[i];
//     if (obj[pet]) {
//         obj[pet]++;
//     } else {
//         obj[pet] = 1;
//     }
// }

// console.log(obj);


// var pets = ['dog','chicken','cat','dog','chicken','chicken','rabbit'];
// var petCounts = pets.reduce(function(obj, pet) {
//     obj[pet] = obj[pet] ? obj[pet] + 1 : 1;
//     return obj;
// }, {});
// console.log(petCounts);

// let pr= new Promise((resolve,reject)=>{
//    let food=true;
//    if(food===true){
//     setTimeout(()=>{
//         resolve("food is availalbe")
//     },5000)
     
//    }
//    else {
//     reject("no availablel")
//    }
// })
 
// console.log(pr);
// setTimeout()
// pr.then((res)=>{
//     console.log(res);
// });
// pr.catch((err)=>{
//     console.log(err);
// });

// let x=10;
// {
//     let x=20;
    
//     {
//         console.log(x);
//         let x=30;
//         console.log(x);
//     }
// }
//  console.log(x);

// let api=fetch("https://api.github.com/users");
// console.log(api);
 
// api.then((res)=>{
//     return res.json();
// })
// .then((res)=>{
//     res.map((user)=>{
//          console.log(user.login)
//           console.log(user.type);
// });
    
// })

// let api=fetch("https://fakestoreapi.com/products");
// console.log(api);
// api.then((res)=>{
//     return res.json();
// })
// .then((res)=>{
//     res.map((user)=>{
//          console.log(user.id)
//           console.log(user.price);
//           console.log(user.title);
// }); 
// })

// api.then((res)=>{
//     return res.json();
// })
// .then((res)=>{
//     res.map((user)=>{
//          console.log(user.login)
//           console.log(user.type);
// });
    
//  })
 
// let api=fetch("https://jsonplaceholder.typicode.com/users");
// console.log(api);
// api.then((res)=>{
//     return res.json();
// })
// .then((res)=>{
//     console.log(res);
//      res.slice(0,5).map(x=>{
//        // console.log(x);
//          console.log(x.address.geo.lat);
           
// }); 
// })
//importnt
// async function fetchData() {
//     try {
//       const response = await fetch("https://jsonplaceholder.typicode.com/users");
//       const data = await response.json();
//       return data.slice(0, 5).map(x => x.address.geo.lat);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       return [];
//     }
//   }
  
//   fetchData().then(result => console.log(result));
  

// let pr1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("promise succefully resolve 1");
//     },5000)
     
// })
// let pr2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("promise succefully resolve 2");
//     },10000)
// })
// async function fun(){
     
//    try{
//     let res=await pr1;
//     console.log(res);
//     let res1=await pr2;
//     console.log(res1);
//     console.log("hello");
//    }
//    catch(err){
//     console.log("failure");
//    }
//     //return res;
// }
// fun()
//  // console.log(fun()); 
//  //

//  let pr1=new Promise((resolve,reject)=>{
//     // setTimeout(()=>{
//     //     resolve("promise succefully resolve 1");
//     // },5000)
//      reject("prmise rejected")
// })

// async function fun(){
//     try{
//     let res= await pr1;
//     console.log(res);
//     console.log("hello");
//     }
//     catch(er){
//         console.log(er);
//     }
// }
// console.log(fun().catch(err>=console.log(err)));
// assignmnt diffrence between for of, for each, for in ,for

// async function fetchData() {
//     try {
//       const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
//       const data = await response.json();
//       return data.slice(0, 5).map(x => console.log(x));
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       return [];
//     }
//   }
  
//   fetchData().then(result => console.log(result.id));

// let api=fetch("https://api.github.com/users");
// api.then(res=>res.json()).then(data=>{
//   data.map(x=>{
//     let mapped=document.getElementById("background");
//     console.log(mapped);
//     mapped.innerHTML+=`
//     <h1>${x.login}</h1>
//     <img src=${x.avatar_url} alt="image"`
//   })
// })

let x=document.getElementsByTagName("p");
console.log(x);
x[0].textContent="hello";
  