// console.log("hello world")

//there are 6 premetive data type
// 1: undefined;
// 2: Number;
// 3: String;
// 4: BigInt;
// 5: Symbol;
// 6: Boolean;
// 7: Null;

// veriable are in java script is var let and const;

// var name = "Souvick";
// console.log(name)

// The var statement declares a variable.but its not good practice alaways use let or const

// let a = 45;
// let b = 45;

// let c = a + b;
// console.log(c);

// Null vs Undefined-----

// let a = 'Souvick'
// let b = 10;

// console.log(a + b)
// // use of typeof
// console.log(typeof(a+b))

// // use of const object

// const n = {
//     name:'souvick',
//     age: 22,
// }

// n = 'chakraborty'
// console.log(n)

// add a new things in object-->

// n['name'] = "Souvick",
// n['surname'] = "Chakraborty"
// console.log(n)

// how to access object with name-->
// console.log(n.name);
// console.log(n['name']);


// =========================Array=====================

//  let a = [1,2,3,4,5]
// console.log(a);

// toString
// let b = a.toString();
// console.log(b);


// typeof
// console.log(typeof b);// convert element integer to String


// join
// console.log(a.join(" "));// give a space in array


// pop
// a.pop()  // delete last value from array
// console.log(a);


//push
// a.push(3); // push value in the array
// console.log(a);


// shift
// let c = a.shift();  // return the first element
// console.log(c);


//unshift
// let c = a.unshift(); // add element first in the array
// console.log(c, a);// print length of array and value of array


// Delete   --> its not a method its an operater.
// delete(a[4]);// given number delete element in array
// console.log(a);


// concat --> marge array but dosenot change existing element
// let a = [1,2,3,4,5]
// let b = [6,7,8,9,10]

// let c = a.concat(b);
// console.log(a);
// console.log(b);
// console.log(c);


// sort --> sort the array --> Inportent**

// let compare = (a,b) => {
//     return a-b;
// }
// let a = [4,5,3,2,6,1]
// a.sort(compare);
// console.log(a);

// let a = ["a","x","t","c"]
// a.sort();
// console.log(a);


// splice

// let a = [1,2,3,4,5,6]
//a.splice("konsi index se start hoga", "kitni index delete hoga", " kon kon index add hoga" )
// a.splice(2,1,12)
// console.log(a);

// loopes in array

// let arr = [1,2,3,4,5,6]
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

//foreach loop

// arr.forEach((element) => {
//     console.log(element*element);
// })

//for of loops
// for(let i of arr){ // print the array
//     console.log(i);
// }

// for in loops
// for(let i in arr){ // print keys
//     console.log(i);
// }


// ======= Map ======= Filter ======= Reduce =======

// Map -> its create a new array for perfroming some operation on each array element.

// let arr = [1,2,3,4,5]
// let a = arr.map((value, index) =>{
//     console.log(value,index);
//     return value * 5
// })
// console.log(arr);
// arr.map((x) =>{
//     console.log(x);
// })


//filter -> filter the array and pass the value.

// let arr = [1,2,3,4,5]
// let a = arr.filter((value) => {
//     return value>3
// })
// console.log(a);
// console.log(arr);

// Reduce ->
// let arr = [1,2,3,4]
// let a = arr.reduce((value1) =>{
//     return value1 * 2;
// })
// console.log(a);

// using object

// let arr2 = [
// {name: "souvick", age: 21, address: "kharagpur"},
// {name: "indranil", age: 23, address: "mednipur"},
// {name: "tanmoy", age: 22, address: "kharagpur"}]

// using arrow function
// arr.forEach((value) => (console.log(value.address)));
// arr.forEach((x) => {
//     console.log(x.age);
// })

// using normal function
// arr.forEach(function(value){console.log(value)});
// arr.forEach(function(x){
//     console.log(x.name);
// })

// const sb = arr.filter(function(value){
//     if(value.address === "mednipur"){
//         return true;
//     }
// })
// console.log(sb);

// let arr = [1,2,3,4,5,6]
// let a = arr.filter((value)=>{
//     return value > 3
// })
// console.log(a);

// let a = arr2.filter((x) => {
//     if(x.address === "kharagpur"){
//         return true;
//     }
// })
// console.log(a);
