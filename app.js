// console.log("hello world")

// there are 6 premetive data type
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


// push
// a.push(3); // push value in the array
// console.log(a);


// shift
// let c = a.shift();  // return the first element
// console.log(c);


// unshift
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
// a.splice("konsi index se start hoga", "kitni index delete hoga", " kon kon index add hoga" )
// a.splice(2,1,12)
// console.log(a);

// loopes in array

// let arr = [1,2,3,4,5,6]
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// foreach loop

// arr.forEach((element) => {
//     console.log(element*element);
// })

// for of loops
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


// filter -> filter the array and pass the value.

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


// ===========Closures in js============


// var sum = function(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }
// var first = sum(2);
// var second = first(3);
// console.log(second(2));



// Closure
// function a() {
//     var a = 10;
//     function xyz() {
//         console.log(a);
//     }
//     xyz();
// }

// a();

// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     y();
// }
// x();


// closure & lexicial scope;

// var a = 10;
// var b = 20;
// var c = 30;

// function x() {
//     function y() {
//         function z() {
//             console.log(a, b, c);
//         }
//         z();
//     }
//     y();
// }
// x();



// ==========call=====apply=====Bind==========

// ====call====

// let obj = {
//     name: "Souvick",
//     age: 22,
//     address: "kharagpur",
//     details:function (){
//         console.log(this.name);
//     }
// }
// console.log(details);
// obj.details();
// obj.call(details)


// let obj2 = {
//     name: "Souvick Chakraborty",
//     age: 21,
//     address: "kharagpur",
//     // details: function (){
//     //     console.log(this.name);
//     // }
// }

// // obj2.details();
// obj.details.call(obj2);


// let obj3 = {
//     name: "Chakraborty",
//     age: 23,
//     address: "kharagpur",
//     // details: function (){
//     //     console.log(this.name);
//     // }
// }

// obj.details.call(obj3);

// function borrowing--->

// let obj = {
//         name: "Souvick",
//         age: 22,
//         address: "kharagpur",
//     }

// let details = function (city, state){
//         console.log(this.name+" "+ city +","+ state);
//     }
// details.call(obj, "Kharagpur", "West Bengal");

// let obj2 = {
//     name: "Souvick chakraborty",
//     age: 22,
//     address: "kharagpur",
// }
// details.call(obj2,"Kharagpur", "West Bengal");

// // Apply Method

// details.apply(obj2,["Kharagpur", "West Bengal"]);

// // Bind Method

// let newFun = details.bind(obj2,"Kharagpur", "West Bengal");
// console.log(newFun);
// newFun()


// This --> this keyword basically used for self referancing


// const person1 = {
//     name: "Souvick",
//     age: "22",
//     city: "Kharagpur",
// }

// const person2 = {
//     name: "Souvick",
//     age: "22",
//     city: "Kharagpur",
// }

// const person3 = {
//     name: "Souvick",
//     age: "22",
//     city: "Kharagpur",
// }

// const Details = function () {
//     console.log(this.name);
// }

// Details.call(person1);
// Details.call(person2);
// Details.call(person3);


// const person = {
//     name: "Indranil",
//     age: 22,
//     city: "Midinipur",
// }

// const person2 = {
//     name: "Souvick",
//     age: 22,
//     city: "Midinipur",
// }

// const person3 = {
//     name: "akash",
//     age: 22,
//     city: "Midinipur",
// }

// let details = function (state, country) {
//     console.log(`My name is ${this.name} ${this.age} years old from ${this.city} ${state} ${country}`);
// }

// details.apply(person, ["west Bengal", "India"]);




// Rest Operater --->

// function addNumber(...other){
//     for(let i=0;i<other.length;i++){
//         console.log(other[i]);
//     }
// }
// let res = addNumber(1,2,3,4,5,6,7);
// console.log(res);

// function addNumber(...other){
//     return other
// }
// let res = addNumber(1,2,3);
// console.log(res);


// Spread Operater --->

// let name = ["souvick", "rum", "sum", "jodu", "modu", "tanmoy", "indranil"]

// function getName(...other) {
//     console.log(other)
// }
// getName(...name);

// getName(name);

// destructuring

// const obj = {
//     name: "Souvick", age: 22, address:"kharagpur",
// }
// let {name} = obj;
// console.log(name)




//  Problem Statement

// const obj = [
//     {name: "souvick", age: 21, address: "kharagpur"},
//     {name: "indranil", age: 23, address: "mednipur"},
//     {name: "tanmoy", age: 22, address: "kharagpur"}]

// function getDates(){
//     setTimeout(() => {
//         let temp = "";
//         obj.forEach((data,index) => {
//             temp = data.name;
//             console.log(temp);
//         })
//     }, 1000);
// }
// getDates()


// rest operater

// let arr = [1,2,3,4,5];

// function xyz(a,b) {
//     return a * b;
// }

// let ans = xyz(2,3);
// console.log(ans);




// let ans = (a,b) => {
//     return a*b;
// }
// console.log(ans(2,2));

// function xyz(a,b) {
//     return a * b;
// }
// xyz(2,3);





// const obj = [
//     {name: "souvick", age: 21, address: "kharagpur"},
//     {name: "indranil", age: 23, address: "mednipur"},
//     {name: "tanmoy", age: 22, address: "kharagpur"}]

// obj.forEach((...x) => {
//     // console.log(x.name);
//     console.log(...obj);
//     // console.log(x.age);
// })
// document.getElementById('display').innerHTML = ans;


// function xyz(obj){
//     console.log(obj.name);
//     console.log(obj.age);
//     console.log(obj.address);
// }

// xyz(obj)




// <-----------callback ---------->

// const obj = [
//     { name: "Souvick", age: 21, address: "kharagpur" },
//     { name: "Indranil", age: 23, address: "mednipur" },
//     { name: "Tanmoy", age: 22, address: "kharagpur" },
//     { name: "Ram", age: 26, address: "Kolkata" }]


// function getDatas() {
//     setTimeout(() => {
//         let output = "";
//         obj.forEach((data) => {
//             output = output + `<li>${data.name}</li>`;
//         })
//         document.body.innerHTML = output;
//     }, 2000);
// }
// function createDatas(newData,callback) {
//     setTimeout(() => {
//         obj.push(newData);
//         callback();
//     }, 0);
// }
// createDatas({ name: "Ram", age: 26, address: "Kolkata" },getDatas);
// getDatas();


// const obj = [
//     { name: "Souvick", age: 21, address: "kharagpur" },
//     { name: "Indranil", age: 23, address: "mednipur" },
//     { name: "Tanmoy", age: 22, address: "kharagpur" },
//     { name: "Ram", age: 26, address: "Kolkata" }]



// function getDatas() {
//     setTimeout(() => {
//         let output = "";
//         obj.forEach((data) => {
//             output = output +
//                 `<ol><li>Name = ${data.name}</li>
//             <li>Age = ${data.age}</li>
//             <li>Address = ${data.address}</li></ol>`;
//         })
//         document.body.innerHTML = output;
//     }, 2000);
// }

// function create(data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             obj.push(data);
//             let x = false;
//             if (!x) {
//                 resolve();
//             } else {
//                 reject("Error");
//             }
//         }, 2000);
//     })
// }

// create({ name: "Sourav", age: 26, address: "Mumbai" }).then(getDatas);

// async function start() {
//     await create({ name: "Sourav", age: 26, address: "Mumbai" });
//     getDatas();
// }
// start();



// document.body.innerHTML = "Souvick";

// let user = {
//     name: "Souvick",
//     age: 22,
//     address: "kharagpur",
//     printDetails: function () {
//         console.log(this.name);
//     }
// }

// user.printDetails();

// let user2 = {
//     name: "Indranil",
//     age: 23,
//     address: "Mednipur",
// }

// user.printDetails.call(user2);

// const obj = [
//     { name: "Souvick", age: 21, address: "kharagpur" },
//     { name: "Indranil", age: 23, address: "mednipur" },
//     { name: "Tanmoy", age: 22, address: "kharagpur" },
//     { name: "Ram", age: 26, address: "Kolkata" }]

// function getName() {
//     setTimeout(() => {
//         let output = "";
//         obj.forEach((data) => {
// output = output + `<li>${data.name}</li>`
//         });
//         document.body.innerHTML = output;
//     }, 2000);
// }
// getName();

// function createDatas (data){
//     return new Promise ((res,rej) => {
//         setTimeout(() => {
//             obj.push(data);
//         }, 5000);
//         let x = true;
//         if(x){
//             res();
//         } else{
//             rej('error');
//         }
//     })
// }

// createDatas({name: "Akash", age: 24, address: "Kolkata" },getName);
// getName();

// createDatas({name: "Akash", age: 24, address: "Kolkata" }).then(getName);



// const obj = [
//     { name: "Souvick", age: 21, address: "kharagpur" },
//     { name: "Indranil", age: 23, address: "mednipur" },
//     { name: "Tanmoy", age: 22, address: "kharagpur" },
//     { name: "Ram", age: 26, address: "Kolkata" }]



// function getDatas() {
//     setTimeout(() => {
//         let output = "";
//         obj.forEach((data) => {
//             output += `<li>${data.name}</li>`
//         });
//         document.body.innerHTML = output;
//     }, 5000);
// }

// function create(...data) {
//     setTimeout(() => {
//         obj.push(...data);
//     }, 5000);
// }

// create({ name: "Akash", age: 24, address: "Kolkata" },{ name: "Akash", age: 24, address: "Kolkata" },{ name: "Akash", age: 24, address: "Kolkata" });
// getDatas();



// function xyz() {
//     setTimeout(() => {
//         console.log("Indranil");
//     }, 0)
// }

// function abc(callback) {
//     setTimeout(() => {
//         console.log("dey");
//         callback();
//     }, 2000)
// }

// abc(xyz);

// Closures

// var sum = function(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }
// var first = sum(2);
// var second = first(3);
// console.log(second(2));

// anonymous function
// let a = function(x){
//     console.log("Souvick" +x);
// }
// a(" Chakraborty");


// closures Examples

// let a = function(a){
//     console.log(a);
//     let b = 2;
//     return function(c){
//         return a+b+c;
//     }
// }
// let store = a(2);
// console.log(store(2));

// let a = function(a,b,c){
//     return {
//         sum:function(){
//             return a+b;
//         },
//         mul:function(){
//             return a*c;
//         }
//     }
// }
// let start=a(3,4,5);
// console.log(start.sum());
// console.log(start.mul());



// ///// function ///////

// let a = 20;
// let b = 24;
// function x(){
//     return a+b;
// }
// x();

// console.log(typeof undefined === typeof null)
// let a = true
// setTimeout

// let v = 10;
// (function () {
//     console.log(v);
//     let v = 20;
//     console.log(v);
// })("");
// console.log(v);

// for(let i=0;i<3;++i){
//     setTimeout(() => {
//         console.log(i);
//     },0);
// }

// anonymous function
// let show = () => {
//     console.log("Hii I am souvick")
// }
// show();

// let show = function () {
//     console.log("Hii I am souvick")
// }
// show();



// playing with object

// what is object? ==> object can be anythings like its is an intance of class.

// let person = {
//     firstname: "Souvick",
//     lastname: "Chakraborty"
// };
// console.log("My name is " + person['firstname'] + " " + person.lastname);

// person.age = 22;

// for(let i in person){
//     console.log(i + " => " + person[i]);
// }


// let person = {
//     firstname: "Souvick",
//     lastname: "Chakraborty",
//     sayHello () {
//         console.log("Hii i am " + this.firstname + " " + this.lastname + ".I am " + about.age + " Years old");
//     }
// };

// let about = {
//     age: 22,
//     lives: "Kharagpur",
// }
// person.sayHello();


// let name1 = "Souvick";
// let result = "";
// for(let char of name1){
//     result += char;
// }
// console.log(result);

// let person = {
//     name: "souvick",
//     age: 22,
//     get getName() {
//         return this.name.toUpperCase();
//     },
//     set setName(n) {
//         return this.name = n.toUpperCase();
//     }
// }
// console.log(person.getName);


// call bind apply

// let obj = {
//     name: "Souvick",
//     age: "22",
//     Address: "Kharagpur",
//     printinfo: function () {
//         console.log(`Hi i am ${this.name}`)
//     }
// }
// obj.printinfo()

// let printInfo = function(state, country) {
//     console.log(this.name +" "+ this.age + " " + this.Address + " "+ state+" "+ country )
// }

// printInfo.call(obj, "West Bengal", "India");
// printInfo.apply(obj, ["West Bengal", "India"]);

// let obj2 = {
//     name: "virat",
//     age: "34",
//     Address: "Dehli",
// }

// obj.printInfo.call(obj2)

// let arr = [4,5,7,54,55,77,5,5,57,8];
// let ans = Math.max.apply(Math, arr);
// console.log(ans);

// let arr2 = [4,5,7,54,55,77,5,5,57,8];
// let ans2 = Math.min.apply(Math, arr);
// console.log(ans2);

// let obj = {
//     firstname: "souvick",
//     lastname: "chakraborty",
//     age: "22",
//     get getName() {
//         return this.firstname.toUpperCase()
//     },

//     set setAge(n) {
//         this.age = n.toUpperCase()
//     }
// }

// obj.setAge = "indranil";

// console.log(obj);

// let person = {
//     name:"souvick",
//     age:"22",
//     city:"kharagpur",
//     getInfo: function (country) {
//         console.log(`Hii I am ${this.name} ${this.age} from ${this.city} ${country}`);
//     }
// }
// // console.log(person.getInfo());
// person.getInfo("India");

// let person2 = {
//     name:"indranil",
//     age:"25",
//     city:"Mednipur",
//     getInfo: function () {
//         console.log("Hii i am" + this.name + " i am " + this.age + " Year old from " + this.city);
//     }
// }

// person.getInfo.call(person2, "India")

// setTimeout(function () {
//     console.log("Hii I am souvick")
// }, 5000);

// object ..

// let person = {
//     name: " Indranil",
//     age: " 22",
//     city: " Medinpur",
//     getInfo: function () {
//         console.log("Hii I am" + this.name + " from" + this.city);
//     }
// };

// function getInfo() {
//     console.log("Hii I am" + person.name + " from" + person.city);
// }

// console.log(person);
// getInfo();

// person.getInfo();

// let person = new Object;

// person.name = "indranil";
// person.age = '22';
// person.city = "Mednipur";

// console.log(person);

// function getInfo() {
//     console.log("Hii I am" + person.name + " from " + person.city);
// }
// getInfo();

// let person = {
//     name: " Indranil",
//     age: " 22",
//     city: " Medinpur",
//     get getName() {
//         return this.name.toUpperCase();
//     },
//     set setName(a){
//         return this.name = a.toUpperCase();
//     }
// };

// person.setName = "souvick"
// console.log(person);


// anonymous function

// function name1() {
//     console.log("indranil");
// }
// name1();


// let name1 = function() {
//     console.log("indranil");
// }

// setTimeout(function() {
//     console.log("indranil");
// }, 4000);

// setTimeout(() => {
//     console.log("indranil");
// }, 4000);

// let name1 = () => {console.log("indranil")}
// name1();

// let xyz = () => {
//     console.log("1");
//     setTimeout(() => {
//         console.log("2");
//     }, 2000)
//     console.log("3");
// }

// xyz();

// let person = {
//     name: " Indranil",
//     age: " 22",
//     city: " Medinpur",
//     getInfo: function () {
//         console.log("Hii I am" + this.name + " from" + this.city);
//     }
// };


// let arr = [1,2,3,4,5,6,7];

// let ans = Math.min.apply(Math, arr);
// console.log(ans);


// Interview Question




// for (let i = 0; i < 6; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, i * 1000)
// }


// var a = 10
// function x() {
//     function y() {
//         console.log(a);
//     }
//     y()
// }
// x()


// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     y();
// }
// x();




// for (let i = 0; i < 6; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, i * 1000)
// }


// var a = 10
// function x() {
//     function y() {
//         console.log(a);
//     }
//     y()
// }
// x()


// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     y();
// }
// x();

// function add() {
//     let sum = 0;
//     for (let arg of arguments) {
//         sum += arg
//     }
//     return sum;
// }

// console.log(add(1, 2, 3, 4));

// for (var i = 1; i < 5; i++) {
//     (function (i) {
//         setTimeout(function () {
//             console.log(i);
//         }, 1000)
//     })(i);
// }


// var a = 10
// function x() {
//     function y() {
//         console.log(a);
//     }
//     y()
// }
// x()


// function x(){
//     console.log(1);
// }
// x();

// function y() {
//     setTimeout(() => {
//         console.log(2)
//     }, 4000);
// }
// y();

// function a() {
//     setTimeout(() => {
//         console.log(5)
//     }, 0);
// }
// a();

// function z(){
//     console.log(3);
// }
// z();

// console.log(4);

// closers


// function x(){
//     let a = 10;
//     function y() {
//         console.log(a);
//     }
//     y();
// }

// x();


// currying


// function a(x) {
//     return function(y) {
//         return function(z) {
//             return x + y + z;
//         }
//     }
// }
// let ans = a(2);
// let ans2 = ans(2);
// let b = ans2(2);

// console.log(b);


// let ans = a(2)(3)(4);
// console.log(ans);





// let arr = [1,2,3,4,5,6,7]

// function add(...data) {
//     arr.push(...data)
// }
// add(2,3,4,5)
// document.write(arr);

// Destructuring

// let arr = [1, 2, 3, 4, 5]
// if i need to get the first number of array in to a new veriable called x then what i need?

// let [x] = arr;
// console.log(x);


// let arr = [1, 2, 3, 4, 5]
// // let arr = 2;
// let a = Math.floor(arr);
// console.log(a);

// fetch("https://dummy.restapiexample.com/api/v1/employee/1", (err, data) => {
//     if (err) {
//         console.log("Error: ", err);
//         return;
//     }
//     console.log("Data:", data);
// })



// Generate random Number



// function xyz() {
// return Math.floor(Math.random() * 10)
// }

// let x = Math.floor(Math.random() * 10);
// console.log(x);

// let x = Math.floor(Math.random() * (30 - 20)) + 20;
// console.log(x);

// function xyz (max, min){
//     let a = Math.floor(Math.random() * (max - min)) + min ;
//     return a;
// }
// let x = xyz(20, 10);
// console.log(x);

// generate otp with Math.random

// let xyz = () => {
//     let otp = "";
//     for(let i=0;i<6;i++){
//         otp += Math.floor(Math.random() * 10);
//     }
//     return Number(otp);
// }
// let ans = xyz();
// document.body.innerHTML = ans;



// JavaScript Date Object

// let a = new Date();
// console.log(a);

// console.log(a.getFullYear());
// console.log(a.getDay());
// console.log(a.getMonth());

// a.setFullYear(2021);
// console.log(a);

// a.setDate(a.getDate() + 15);
// console.log(a);


// javascript ES6............


// Array Destructuring


// let arr = [1,2,3,4,5];
// let [a,b,...rest] = arr;

// console.log(...rest);

// let obj = {
//     name: " Indranil",
//     age: " 22",
//     city: " Medinpur"
// }

// let {a, b, c} = obj;

// console.log(a);



// const obj = {
//     a: 1,
//     b: 2
// };
// const { a, b } = obj;

// console.log(a);

// lexical scope

// function x() {
//     y();
//     function y() {
//         z();
//         function z() {
//             console.log(b);
//         }
//     }
// }
// let b = 7;
// x();

// when the global excution context is created lexical enviroment is also created
// lexical means in a siquence
// Scope chain = Scope chain connected all the lexical enviroment of the parent reference,
// Lexical enviroment is Local memory and lexical enviroment of the parent memory
// Closures
// Closures is a function bind tougether with their lexical enviroment

// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     y();
// }
// x();


// function x() {
//     var a = 10;
//     return function y() {
//         return function s() {
//             console.log(a);
//         }
//     }
// }
// let z = x();
// console.log(z);
// z();



// const api_url = "";

// async function getapi(url) {
//     const response = await fetch(url);
//     var data = await response.json();
//     console.log(data)
// }
// getapi(api_url);




// CallBack Function


// setTimeout(() => {
//     console.log("Souvick Chakraborty");
// }, 3000);

// function x(y) {
//     console.log("I");
//     y();
// }

// x(function y() {
//     console.log("Am");
// })


// function addNumbers(a, b, callback) {
//     const result = a + b;
//     callback(result);
// }

// function printResult(result) {
//     console.log(`The result is: ${result}`);
// }

// addNumbers(2, 3, printResult); // Output: The result is: 5

// function add(a, b, callback) {
//     let result = a + b;
//     callback(result)
// }

// function printResult(result) {
//     console.log((`The Result is ${result}`));
// }
// add(2, 2, printResult)

// promises

// const promise = 'https://www.omdbapi.com/?i=tt3896198&apikey=92839772&s=avengers';
// const user = fetch(promise)
// console.log(user);

// function one() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             let errror = false;
//             if (!errror) {
//                 console.log("Resolve");
//                 resolve();
//             }
//             else {
//                 console.log('Reject')
//                 reject();
//             }
//         }, 3000);
//     })
// }

// one().then(function () {
//     console.log('Thanks for resolving');
// }).catch(function (error) {
//     console.log("Sorry for rejected " + error);
// });





// Temporal Dead Zone is the period of time during which the let and const declarations cannot be accessed

// console.log(a);
// var a = 10


// var a = 7;
// function x() {
//     function y() {
//         console.log(a);
//     }
//     y();
// }
// x();


// function x() {
//     y();
//     function y() {
//         z();
//         function z() {
//             console.log(b);
//         }
//     }
// }
// let b = 7;
// x();


// var arr = [10, 20, 30];

// var sum = arr.reduce((sum, elem) => {
//     return sum + elem;
// });
// console.log(sum);


// let xyz = () => {
//     let otp = "";
//     for (let i = 0; i < 6; i++) {
//         otp += Math.floor(Math.random() * 10);
//     }
//     return Number(otp);
// }
// let ans = xyz();
// console.log(ans);


// function x() {
//     console.log("hello");
// }

// setTimeout(x, 2000);

// console.log("hello2");


// Contest Question

// let api = 'https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses'

// async function fetchdata(url) {
//     let response = await fetch(url)
//     let data = await response.json();
//     data = data.sort((a, b) => { return a.ticketPrice - b.ticketPrice })
//     displaydata(data);
// }
// fetchdata(api)

// function displaydata(data) {
//     let div = document.getElementById('data-container')
//     data.forEach((item) => {
//         let des = document.createElement('div')
//         des.className = 'description'
//         let stringifydata = JSON.stringify(item)
//         des.textContent = stringifydata
//         div.append(des)
//     })
// }



// second try

// let api = `https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses`

// const getData = async () => {
//     let responce = await fetch(api);
//     let data = await responce.json();

//     data = data.sort((a, b) => {
//         return a.ticketPrice - b.ticketPrice;
//     })

//     data.map((item) => {
//         item = item.sort((a, b) => {
//             return a.ticketPrice - b.ticketPrice;
//         })
//         document.getElementById('data-container').innerHTML = `
//         <div class='description'>${item}</div>
//         `
//     })
// }

// getData();



// const n = [50, 100, 125];

// function addAll(total, sum) {
//     return total + sum;
// }

// console.log(n.reduce(addAll));


// var n = [1, 2, 3, 4, 5];

// const m = n.map(n => {
//     return (n * 5)
// });

// console.log(m)

// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     y();
// }
// x();


// console.log(a);
// let a = 10


// let person = {
//     name: "souvick",
//     age: "22",
//     city: "kharagpur",
//     getInfo: function (country, secperson) {
//         console.log(`Hii I am ${this.name} ${this.age} from ${this.city} ${country} ${secperson}`);
//     }
// }
// // console.log(person.getInfo());
// person.getInfo("India", "rajesh");

// let person2 = {
//     name: "indranil",
//     age: "25",
//     city: "Mednipur",
//     // getInfo: function (country) {
//     //     console.log("Hii i am" + this.name + " i am " + this.age + " Year old from " + this.city + country);
//     // }
// }

// person.getInfo.call(person2, ["India", "rajesh"])


// Reduce ->
// let arr = [1, 2, 3, 4, 5]
// let a = arr.reduce((value1) => {
//     return value1 * 2;
// })
// console.log(a);

// function getData() {
//     console.log('start');

//     fetch('https://www.omdbapi.com/?i=tt3896198&apikey=92839772&s=avengers')
//         .then(result => result.json())
//         .then((value) => console.log(value))

//     console.log("end");
// }
// getData();


// function xyz() {
//     console.log(a, b, c);

//     var a = 10;
//     let b = 20;
//     const c = 30;
// }
// xyz();

// var movieData = [];
// const api = `https://api.themoviedb.org/3/movie/upcoming?api_key=c5f51b2b883f97907e200069a85d9e93`;

// const getData = async (api) => {
//     const res = await fetch(api);
//     const data = await res.json();
//     console.log(data.results);
//     display(data)
// }
// getData(api);


// function display(data) {
//     const alldata = data.results[0];
//     const disp = document.getElementById('example');
//     const title = alldata.title;
//     const heading = document.createElement("p");
//     heading.innerHTML = title;
//     disp.appendChild(heading)
// }


// var x = 10;
// function m() {
//     console.log(x)
//     let x = 20;
//     console.log(x);
// }
// m();


// const arr = [1, 2, 3];
// arr[2] = 2;
// console.log(arr);


// let person = {
//     name: " Indranil",
//     age: " 22",
//     city: " Medinpur",
//     get getName() {
//         return this.name.toUpperCase();
//     },
// };

// console.log(person.getName);


// let object = {
//     name: "souvick chakraborty",
//     roll: 11
// }

// let secondObject = {
//     name: 'souvick',
//     __proto__: object
// }

// console.log(secondObject.roll);



// const callbackFunction = () => {
//     console.log("callback");
// }
// setTimeout(callbackFunction, 2000);



// function greeting(name) {
//     console.log(`Hello, ${name} How are you`);
// }

// function processUserInput(callback) {
//     const name = "souvick";
//     callback(name);
// }

// processUserInput(greeting);


// function add() {
//     let sum = 0;
//     for (let arg of arguments) {
//         sum += arg
//     }
//     return sum;
// }
// console.log(add(2, 3, 3, 4, 5, 6));

// function statement1() {
//     setTimeout(() => {
//         console.log("Chakraborty");
//     }, 2000)
// }

// function statement2(callback) {
//     setTimeout(() => {
//         console.log("souvick");
//         callback();
//     }, 1000)
// }

// statement2(statement1);


// new Promise((resolveOuter) => {
//     resolveOuter(
//         new Promise((resolveInner) => {
//             setTimeout(resolveInner, 1000);
//         }),
//     );
// });

// let myPromise = new Promise(function (myResolve, myReject) {
//     myResolve(); // when successful
//     myReject();  // when error
// });


// myPromise.then(
//     function (value) { /* code if successful */ },
//     function (error) { /* code if some error */ }
// );

// let arr = [1, 2, 3, 4, 5];
// let total = 0;
// const res = arr.reduce((total, sums) => total + sums, 0)
// console.log(res);



// var a = 10;

// xyz();
// function xyz() {
//     console.log(a);
//     let b = 20;
//     console.log(b);
// }

// const a = [1, 2, 3, 4];
// a[0] = 7;
// console.log(a);


// Hosting


// xyz();

// function xyz() {
//     var a = 10;
//     console.log(a);
// }





// destructuring

// var arr = [1, 2, 3, 4, 5];
// let arr3 = arr[3];
// console.log(arr3);

// let a = 10;
// let b = 20;
// let c = 30;

// let abc = { a, b, c };
// console.log(abc);


// Rest operater


// let arr = [1, 2, 3, 4, 5];
// var sum = 0;
// function add(arr, ...rest) {
//     console.log(arr);
//     console.log(rest);
// }

// add(arr, 10, 20, 30, 50, 40);

// let name1 = ["souvick", "rum", "sum", "jodu", "modu", "tanmoy", "indranil"]

// function getName(...other) {
//     console.log(other)
// }
// getName(...name1);


// map filter reduce.

// let arr = [1, 2, 3, 4, 5];

// const mapResult = arr.filter((value) => {
//     return value > 2;
// });
// console.log(mapResult);
// console.log(arr);


// const forEachResult = arr.forEach((value, index, arr) => {
//     arr[index] = value * 2;
// });

// console.log(forEachResult);
// console.log(arr);

// let total = 0;

// const reduceResult = arr.reduce((sum, total) => total + sum, 0)

// console.log(reduceResult);
// console.log(sum);


// let arr = [1, 2, 3, 4, 5];
// const res = arr.reduce((total, sums) => total + sums)
// console.log(res);


// call bind apply

// callback

// promise & async await


// var x = '1996';
// console.log(x + 4, Number(x) + 4);

// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '9fc72827fdmshbfef3dea6f543cbp11cdd7jsncabf165fc080',
//         'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
//     }
// };

// fetch('https://covid-193.p.rapidapi.com/countries', options)
//     .then(response => response.json())
//     .then(response => console.log(response.response))
//     .catch(err => console.error(err));


// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '9fc72827fdmshbfef3dea6f543cbp11cdd7jsncabf165fc080',
//         'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
//     }
// };

// fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));






// function one() {
//     setTimeout(() => {
//         console.log("kumar");
//     }, 1000)

// }

// function two(callback) {
//     setTimeout(() => {
//         console.log("Rajesh");
//         callback();
//     }, 2000)

// }

// two(one);

// let i = 8;
// let j = 2;

// if (i++ > 8 && j++ > 2) {
//     console.log(i);
//     console.log(j);
// }

// console.log(i + j);



// let x = 0;
// let y = 1;
// let z = ++x && y++;
// console.log(z);



// let x = '1996';
// console.log(x + 4 ,Number(x) + 4);





// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '51143eed46msh0471d70e0d91946p161d1djsnc1e88944c2f5',
//         'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
//     }
// };

// fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
//     .then(response => response.json())
//     .then(response => {
//         console.log(response)
//     }).catch(err => console.error(err));


// let p = fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle');

// function getData(){
//     p.then((value) => {
//         console.log(value.status);
//     }).then((value) => {
//         console.log(value)
//     })
// }
// getData();


// let p = fetch("https://www.omdbapi.com/?i=tt3896198&apikey=92839772&s=avengers")

// p.then((value) => {
//     return value.json();
// }).then((value) => {
//     console.log(value);
// })

// fetch('https://www.omdbapi.com/?i=tt3896198&apikey=92839772&s=avengers')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => {
//         console.error('Error:', error);
//     });

// Fetch api

// fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=seattle')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });



// let p = fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kharagpur');

// function getData() {
//     p.then((value) => {
//         console.log(value.status);
//     }).then((value) => {
//         console.log(value)
//     })
// }
// getData();

//  let api = https://content.newtonschool.co/v1/pr/main/users/1



// let p = fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=92839772&s=avengers`);

// function getdata() {
//     p.then(response => response.json())
//         .then(data => {
//             console.log(data);
//         }).catch(err => console.error(err));
// }

// getdata();


// let p = fetch('https://www.omdbapi.com/?i=tt3896198&apikey=92839772&s=avengers');

// function getData() {
//     p.then((value) => {
//         console.log(value);
//     }).then((value) => {
//         console.log(value)
//     })
// }
// getData();

// Currying

// function sum(a) {
//     return function (b) {
//         return function () {
//             return a + b;
//         }
//     }
// }

// console.log(sum(2)(4)());


// function add(a) {
//     return function (b) {
//         if (b) return add(a + b);
//         return a;
//     }
// }

// console.log(add(2)(3)(4)(5)());




// Memoization

// Memoization --> Memoization is an optimization technique that can be used to reduce
// time-consuming calculations by saving previous input to somthing called cache
// and returning the result

// example

// let sum = 0;
// const calc = (n) => {
//     for (let i = 0; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }

// console.time();
// console.log(calc(10));
// console.timeEnd();

// const memoize = (fun) => {
//     let cache = {};
//     return function (...args) {
//         let n = args[0];
//         if (n in cache) {
//             console.log("cache");
//             return cache[n];
//         } else {
//             console.log('first time');
//             let res = fun(n);
//             cache[n] = res;
//             return res;
//         }
//     }
// }


// console.time();
// let memo = memoize(calc);
// console.log(memo(10));
// console.timeEnd();



// All about Callback

// setTimeout(function xyz() { console.log('zero') }, 1000);
// console.log("one");





// with addevent listener
// function xyz() {
//     let count = 0;
//     document.getElementById('click').
//         addEventListener('click', function abc() {
//             console.log("Button Clicked !", ++count);
//         })
// }


// xyz();



// let x = 5;
// console.log(x++);
// console.log(++x);

// let a = 5;
// let b = a++;
// let c = ++a;
// console.log(a, b, c);


// deep drive in forEach loop

// let fruits = ['🍉', '🍈', '🍊', '🍒', '🍏', '🍎']

// function apnaForEach(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         callback(arr[i]);
//     }
// }

// function kattappa(fruit) {
//     console.log(fruit);
// }

// apnaForEach(fruits, kattappa);


// let a = 5;
// let b = a++;
// let c = ++a;

// console.log(a, b, c);

// // 5, 6, 5


// let x = 5;
// console.log(x++);
// console.log(++x);


// var a = null;
// console.log(typeof a);
// console.log(typeof undefined);

// a = {
//     name: 'souvick',
//     age: 22
// }
// console.log(typeof a);

// a = 20;

// console.log(typeof a);



// let count = 0;
// document.getElementById('click').
//     addEventListener('click', function abc() {
//         console.log("Button Clicked !", count++);
//     })

// const xyz = () => {
//     let count = 0;
//     document.getElementById('click').
//         addEventListener('click', function abc() {
//             console.log("Button Clicked !", count++);
//         })
// }

// xyz();


// var a = 10
// function x() {
//     var a = 20;
//     function y() {
//         console.log(a);
//         var a = 30;
//     }
//     y();
// }
// x();

// console.log(a)
// let a = 10


// (function a() {
//     console.log("souvick");
// })();

// const add = (...arguments) => {
//     console.log(...arguments);
// }

// add(1, 2, 3, 4, 5, 6, 7, 8, 9);



// let b = 0;
// console.log(b);




// function foo() {
//     var x = 1;
//     function bar() {
//         var y = 2;
//         console.log(x);
//         console.log(y);
//     }
//     bar();
//     console.log(x);
//     console.log(y);
// }
// foo();

// console.log(arr);
// var arr = [1, 2, 3]




// let obj = {
//     name: 'abc',
//     22: 22
// }

// console.log(obj);

// const c = { greeting: 'Hey!' };
// const d = c;
// c.greeting = 'Hello';
// console.log(d.greeting);


// let a = new Number(3);
// console.log(typeof a);
// console.log(Number(2));



// let count = 0;
// (function immediate() {
//     if (count === 0) {
//         let count = 1;
//         console.log(count); // What is logged?
//     }
//     console.log(count); // What is logged?
// })();






// function createIncrement() {
//     let count = 0;
//     function increment() {
//         count++;
//     }
//     let message = `Count is ${count}`;
//     function log() {
//         console.log(message);
//     }
//     return [increment, log];
// }

// const [increment, log] = createIncrement();

// increment();
// increment();
// increment();
// log();






// function xyz() {
//     return function abc() {
//         let count = 0;
//         count++;
//         console.log(count);
//     }
// }

// const abc = xyz();
// const res = abc();




// function x() {
//     let count = 0;
//     function y() {
//         count++;
//         console.log(count);
//     }
//     y();
//     y();
//     y();
// }

// x();


// var variable = 10;
// (() => {
//     console.log(variable);
//     variable = 20;
//     console.log(variable);
// })();
// var variable = 30;
// console.log(variable);


// Hosting
// var a = 10;
// function x() {
//     a = 20;
//     console.log(a);
// }
// x();


// Closures


// function outer() {
//     var a = 10;
//     return function inner() {
//         console.log(a);
//     }
// }

// outer()();




// normal fnc vs arrow fnc


// let obj = {
//     name: "kjj",
//     age: 22,
// }
// obj.getName();


// let getName = () => {
//     let obj2 = {
//         name: 'Souvick',
//     }
//     console.log(obj2.name);
// }

// getName();

// let obj = {
//     name: "Souvick",
//     age: 22
// }

// console.log(this.obj);



// Callback

// const abc = () => {
//     console.log("abc !");
// }

// setTimeout(abc, 1000)


// function a() {
//     setTimeout(() => {
//         console.log("one");
//     }, 2000)
// }

// function b(callback) {
//     setTimeout(() => {
//         console.log('Two');
//         callback();
//     }, 3000)
// }

// b(a);



// var variable = 10;
// (() => {
//     console.log(variable);
//     variable = 20;
//     console.log(variable);
// })();
// var variable = 30;
// console.log(variable);


// var a = 10;
// function x() {
//     console.log(a);
//     var a = 20;
// }
// x();




// let x = 50;

// function a() {
//     console.log(x);
//     var y = 50;
// }
// a();

// var x = 50;
// var m = {
//     fun: function () { console.log(this.x) },
//     fun1: () => { console.log(this.x) },
//     x: 20
// }
// m.fun()
// m.fun1()
// var ans = m.fun;
// var ofn1 = m.fun1;
// ans();
// ofn1();


// var a = () => {
//     console.log("a");
// }



// var name = 'Souvick'

// var obj = {
//     function1: function () { console.log(this.name) },
//     function2: () => { console.log(this.name) },
//     name: "Akash",
// }

// obj.function1();
// obj.function2();



// let num = [1, 2, 3, 4, 5];
// console.log(num.length);
// delete num[0];
// console.log(num.length);

// for (var i = 1; i < 5; i++) {
//     if (i == 3) continue;
//     console.log(i);
// }

// const numbers = [1, 2, 3];
// numbers[10] = 11;
// console.log(numbers);


// function abc() {
//     console.log(a);
//     let a = 10;
// }

// abc();



// const nums = [1, 2, 3, 4, 5];

// const ans = nums.reduce((acc, curr) => {
//     return acc + curr;
// }, 0)

// console.log(ans);



// const arr = [1, 2, 3, 4, 5];
// arr[5] = 20;
// console.log(arr);


// const obj = { a: 1 };
// const copy = Object.assign(obj);
// console.log(copy);






// const obj = {
//     name: " abc",
//     getName: function (city) {
//         console.log(this.name + city);
//     }
// }

// const obj2 = {
//     name: "2abc",
// }

// const res = obj.getName.bind(obj2, "kharagpur");




// abc();

// function abc() {
//     console.log("abc");
// }





//this interview question


// var name = "souvick"

// const obj = {
//     name: " abc",
//     getName: function () {
//         console.log(this.name);
//     },
//     getName2: () => {
//         console.log(this.name);
//     },
// }

// obj.getName();
// obj.getName2();


// console.log(a);
// a();
// var a = () => {
//     console.log("abc");
// }

// const user = {
//     name: "Souvick",
//     getName() {
//         console.log(this.name);
//     }
// }

// setTimeout(function () {
//     user.getName();
// }, 1000)



// var length = 4;

// function callback() {
//     console.log(this.length);
// }

// const obj = {
//     length: 10,
//     abc(fun) {
//         fun();
//     },
// }

// obj.abc(callback);



// Most Importent
// var length = 20;

// function callback() {
//     console.log(this.length);
// }

// const obj = {
//     length: 10,
//     abc() {
//         arguments[0]();
//     },
// }

// obj.abc(callback, 1, 2, 3);




// const fruits = ['Grapes', 'Apple', 'Mango'];
// fruits.length = 0;
// console.log(fruits[0]);


// function a(x) {
//     return function b() {
//         console.log(x);
//     }
// }

// a(10)();



// function p() {
//     let name = "Souvick"
// }

// let a = new p();
// console.log(a.name);


// let count = 0;

// setInterval(function () {
//     count++;
//     console.log(count);
// }, 1000);


// var a = 10;

// function b() {
//     console.log(a);
//     function y() {
//         console.log("abc");
//     }
//     y();
// }
// b();


// Callbacks


// let a = function () {
//     console.log("abc");
// }

// setTimeout(a, 1000);

// function a() {
//     setTimeout(() => {
//         console.log("a");
//     }, 2000)
// }

// function b(callback) {
//     setTimeout(() => {
//         console.log("b");
//         callback();
//     }, 3000)
// }

// b(a);



// let c = 10;
// console.log(c)


// var a = 10;
// function x() {
//     console.log(a);
//     let a = 20;
// }

// x();

// var a = 10;
// const obj = {
//     func1: function () {
//         console.log(this.a);
//     },
//     func2: () => {
//         console.log(this.a);
//     },
//     a: 20
// }

// obj.func1();
// obj.func2();






// deep drive into promise


// const cart = ['shirt', 'shoes', 'cap', 'glass'];
// createOrder(cart)
//     .then((id) => {
//         console.log(id)
//         return id
//     })
//     .then((orderid) => {
//         return proceedTopaymment(orderid)
//     })
//     .then((payInfo) => {
//         console.log(payInfo);
//     })
//     .catch((error) => {
//         console.log(error.message)
//     })

// function cartId(cart) {
//     return true;
// }

// function createOrder(cart) {
//     const pr = new Promise(function (resolve, rejected) {

//         if (!cartId(cart)) {
//             const error = new Error("cart is not valid !");
//             rejected(error);
//         }

//         const orderid = "12345"
//         if (orderid) {
//             setTimeout(function () {
//                 resolve(orderid)
//             }, 2000)
//         }

//     })

//     return pr;
// }

// function proceedTopaymment(orderid) {
//     const payment = new Promise(function (resolve, reject) {

//         if (orderid) {
//             resolve("Payment Successfully");
//         }
//     })

//     return payment;
// }


// var obj = {
//     name: 'souvick',
//     address: {
//         flat: 50,
//         city: 'kolkata',
//     }
// }

// let objCopy = obj.address;
// objCopy.flat = 100;
// console.log(obj.address.flat);



// let vs var vs const

// var a = 10;
// function b() {
//     console.log(a);
//     var a = 20;
// }
// b();


//lexical scope

// function inner() {
//     function b() {
//         function c() {
//         }
//         c()
//     }
//     b();
// }


// closures

// function inner() {
//     let a = 10;
//     return function () {
//         console.log(a);
//     }
// }
// inner()();


// function counter() {
//     let count = 0;
//     document.getElementById("click").addEventListener("click", function (e) {
//         count++;
//         console.log(count);
//     })
// }
// counter();



// callbacks

// function payment() {
//     setTimeout(() => {
//         console.log("payment");
//     }, 2000)
// }

// function cart(payment) {
//     setTimeout(() => {
//         console.log("add to cart");
//         payment();
//     }, 3000)
// }

// cart(payment);

// let obj = {
//     name: 'souvick',
//     address: {
//         flat: 50,
//         city: 'kolkata',
//     }
// }

// let objCopy = { ...obj };

// objCopy.name = "rejash";
// objCopy.address.flat = 100;
// console.log(obj.name);
// console.log(obj.address.flat);



// normal functiom vs arrow function
// a();

// var a = () => {
//     console.log("a");
// }

// a();

// function a() {
//     console.log("a");
// }


