// document.getElementById('display').innerHTML = "Souvick Chakraborty";

// function calc(){
//     var a = +document.getElementById('num1').value;
//     var b = +document.getElementById('num2').value;
//     var sum = a+b;
//     document.getElementById('result').value = a + b;
// }
// function calc1(){
//     var a = +document.getElementById('num1').value;
//     var b = +document.getElementById('num2').value;
//     var sum = a+b;
//     document.getElementById('result').value = a - b;
// }
// function calc2(){
//     var a = +document.getElementById('num1').value;
//     var b = +document.getElementById('num2').value;
//     var sum = a+b;
//     document.getElementById('result').value = a * b;
// }
// function calc3(){
//     var a = +document.getElementById('num1').value;
//     var b = +document.getElementById('num2').value;
//     var sum = a+b;
//     document.getElementById('result').value = a / b;
// }

// let a = document;
// console.log(a);

// document.body.style.background = "red";
// document.body.style.color = "white";


//initialize count variable
// let count = 0;

// document.getElementById("add-button").addEventListener("click", function () {
//     count++;
//     document.getElementById("count-display").innerHTML = count;
// });

// document.getElementById("delete-button").addEventListener("click", function () {
//     if(count === 0){
//         count = 0;
//     } else count--;
//     document.getElementById("count-display").innerHTML = count;
// });

// document.getElementById("delete-all").addEventListener("click", function () {
//     count = 0;
//     document.getElementById("count-display").innerHTML = count;
// });


// document.getElementById('btn').addEventListener("click", function () {
//     if(document.querySelector('input').value.length == 0) {
//         alert("please enter your name")
//     }
//     else{
//         document.querySelector('#display').innerHTML = `<span>${document.querySelector('input').value}</span>`;
//     }
// })


// document.getElementById('btn').addEventListener('click', function () {
//     var a = document.getElementById('input').value;
//     var x = document.getElementById('display');
//     if(a.length == 0){
//         alert("please Enter Somethings");
//     } else {
//         x.innerHTML += `<span>${a}</span><br>`;
//     }
//     document.getElementById('input').value = '';
// })


// document.getElementById('click').onclick = function () {
//     document.getElementById('text').style.fontStyle = "italic";
// }

// let count = 0;
// document.getElementById('count').onclick = function () {
//     count ++;
//     document.getElementById('display').innerHTML = count;
// }
// document.getElementById('count2').onclick = function () {
//     if(count != 0) count --;
//     document.getElementById('display').innerHTML = count;
// }


// document.getElementById('add').onclick = function () {
//    var x = document.getElementById('input').value;
//    var y = document.getElementById('display');
//    y.innerHTML = x;
// }


// let ele = document.getElementById('text');

// let h1 = document.createElement('h1');

// let text = document.createTextNode('Hii i am souvick Chakraborty');

// h1.appendChild(text);
// ele.appendChild(h1);


// DOM => Document Object Model

// let ans = document;
// console.log(document)


// document.write(`<h2 style="color: blue">Indranil</h2>`);

// let ans = document.getElementById('print').innerHTML = "Souvick";

// let ans = document.getElementsByTagName("h1");
// ans.innerHTML = "souvick"


// let input = document.getElementById('input');
// let display = document.getElementById('display');

// document.getElementById('btn').addEventListener('click', () => {
//     document.getElementById('display').innerHTML = `<p>${document.getElementById('input').value}</p>`;
//     input.value = " "
// })


// let parent = document.getElementById('info');
// let ele = parent.firstElementChild.nextElementSibling;
// parent.removeChild(ele);

// let parent = document.getElementById('info');
// let ele = document.createElement('li');
// ele.textContent = "Service";
// let replace = parent.firstElementChild.nextElementSibling;

// parent.replaceChild(ele, replace)


// let btn = document.getElementById('btn');
// let val = btn.getAttribute('id');
// console.log(val)


// let btn = document.getElementById('btn');
// btn.style.cssText = "background-color: skyblue";



// let btn = document.getElementById('btn');

// function onAlart() {
//     alert("Button Was Clicked !");
// }



// let btn = document.getElementById('btn');
// let count = 0;
// btn.addEventListener("click", () => {
//     count += 5;
//     document.getElementById('display').innerHTML = count;
// });



