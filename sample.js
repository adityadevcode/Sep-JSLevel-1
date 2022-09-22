/*
Hoisting will work for var (global) not for let and const are block scope
const name = "team";
console.log(name);

console.log(name);
const name ="team";
uncaught reference error: name is not defined

let name1 ="team";
console.log(name1);

console.log(name1);
let name1 ="team";
uncaught reference error: name is not defined

var place= "xyz";
console.log(place); xyz

console.log(place); xyz
*/

// let name ="abs";
// console.log(name);

//callback fucntion
/*
function Step1(){
    console.log("step1 done")
}
function Step2(){
    console.log("Step 2 done")
}
Step1(Step2());
Step1();
Step2();
 
op:
Step 2 done
step1 done
step1 done
Step 2 done
*/

// Using call back functions code structure ardam kadu! Code rasina tharuvatha chala confuse vuntundi
// -async tasks multiple vunapudu (andulo oka task taruvatha inkokati jaragali ante – call back functions use cheyadam dwara manaki (oka task execute taruvatha inkoka task execute avuthundi)
// -code readability will decrease using call ball hell
// -to over come this problem ES6 introduced Promise


// PROMISE
// -promise is an obj
// -promise is construction function, e constructor function use  chesi manamu oka object ni create  chesthe ade promise obj
// let p = new Promise()
// -promise obj oka call back function tisukuntundi

// let p = new promise()

// let p = new promise (function() {
// })

// -e fun 2 arguments tisukuntundi (promise obj create chesinapudu output isthadi success ayithe success
// -this obj will returns some data either success data or error information

// let p=new promise(function(resolve, reject) {
// })

// example: 
// next oka particular task chesthanu ani friend ki promise cheyadam (Adi cheyachu cheyakapovachu) 
// chesthe success leka pothe failure dani below code

// let p = newPromise()
// -e function lo manamu task chesthunam ani rayadam/ task ki opkunam
//  let p=new promise(function() {
// })
// -task output chusi work chesama leda/task complete ayina leda ani telsuthundi
// -task complete chesthe promise full fill ayinatu (Resolve) /kakapothe reject 

// let p = newpromise (function (resovle, reject){
// })
// -task check chesedaniki  js lo 3 states vuntai (dini state of promise antaru):pending, fulfilled, rejected
// -promise create chesthe adi pending state lo vuntundi

// let p = new promise (
//       construction fun/// function () {   //()2 parameters success or error
//        }
// )
// console.log(p) 

// -data true ayithe success
// -data false ayithe false
// -success ayithe success state velthundi
// -initial ga manam epudaithe oka promise obj create chesthamo  (promise obj anedi pending state lo velthundi)
//example 
// let p = new Promise(

// function(success, error) {

// let dataCame= true
// if(dataCame){
// success("promise done")
// }
//  else
// error("Promise notcompleted error")
// }
// )
// console.log(p)

//example
// let r = new Promise(

//     function(success, error) {
    
//     let dataCame= true
//     if(dataCame){
//     success([1,2,3,4])
//     }
//      else
//     error("Promise notcompleted error")
//     }
//     )
//     console.log(r)


    // -promise ane constructor function lo oka call back function ivali, ikada call back function ante success or error
    // -promise anedi future lo oka value isthundi, adi epudu isthado teliyadu, adi manam rase statements patti vasthundi
    // -promise final ga data ni return chesthundi, data promise fulfill ayithe success, 
   
// Promise ki 2 methods vuntai (then and catch)
// -promise manaki result isthundi ha results ni use chesukovali ante (then and catch method use chestham)
// -promise success ayithe then method execute avuthundi
// -then method inkoka call back function vuntundi
// p.then(function(){
// })
// -then method lo emi cheyali ani code rastham
// -oka vella data false vasthe then method call avadu, then data ni return cheyali ante catch method call function
// -user getdata button meda click cheste ajax request vellai (http call velali click chesthe)
// -serever nundi vachina result
// resolve(xhr.responsetext)


// let p = new Promise(
//     function (success,error){
//         let datacame=false
//         if (datacame) {
//             success([1,2,3])
//         }
//         else
//         error('Promise not done')
//     }
// )
// console.log(p);

// p.then(function(data){
//     console.log(data)
//     console.log(p)
// })

// p.catch(function(errordata){
//     console.log(errordata)
//     console.log(p)
// })

//in p.catch we can write code like below
// let p = new Promise(
//     function (success,error){
//         let datacame=false
//         if (datacame) {
//             success([1,2,3])
//         }
//         else
//         error('Promise not done')
//     }
// )
// console.log(p);s

// p.then(function(data){
//     console.log(data)
//     console.log(p)
// },
// function(errordata){
//     console.log(errordata)
//     console.log(p)
// })


let btn=document.getElementById("special")
let dataele=document.getElementById("data")

btn.onClick = function(){
let p= new Promise(function (resolve,reject) {
    let xhr = new XMLHttpRequest()
    xhr.open("GET", "est.txt", true)
    xhr.send()
    xhr.onload= function(){
        if(xhr.status ==200){
            resolve(xhr.responseText)
        }
        else
        reject ("no data found")
        }
    })
    p.then (function(data) {
        console.log(data)
    })
    p.catch(function(errordata){
        console.log(errordata)
    })
}