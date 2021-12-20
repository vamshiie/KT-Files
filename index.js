console.log("hello this is 1st line of javascript...😎");

// function statement
// function anyName(x,y){

//     let fullName = "firstName is" +  ' ' + x + "lastName is" + ' ' + y;
//     /* let fullName = `<div><h1>Hey there...!</h1></div>`; */
//     return fullName;
// }
// anyName("john","Doe");

// function anyName1(){
//     let fullName = `firstName ${arguments[0]} lastName  ${arguments[1]}`;
//     // console.log(fullName,arguments);
//     // console.log(arguments);
//     return fullName;
// }
// var output1 = anyName1;
// console.log(output1("john", "cena"));

// function expression
// var funcExpression = function sample(params) {
//     return console.log("this is from function expression...😊");
// }

// console.log(funcExpression);
// funcExpression();

// arrow function
// var arrowFunction = () =>{
//     var x = "switch";
//     var y = "some";
//     return console.log("Array methods are", x, y);
// }

// function printArrow(params) {
//     return params;
// }

// printArrow(arrowFunction());

// // IIFE - Immediatly invoked function expression.
// (function yahoo(z){
//     return console.log("Hello there....🙈"+ ' ' + z);
// })("how are you");

// ------------- DataTypes in javascript ----------------//

var number = 10;
var string = "this is a string";
var boolean = true;
// var obj = new Object();
// var obj = {},
var obj = {
  firstName: "vamshidhar",
  lastName: "k",
  country: "japan",
};

// console.log(obj.firstName,obj.lastName,obj["country"]);

// var arr = [];
var arr = ["Merina", "Monalisa", "Mamatha"];

// console.log(arr[1],arr[2],arr[0]);

// let numbers = [1, 2, 4, 7, 3, 5, 6];
// numbers.sort((a, b) => a - b);
// console.log(numbers);

// function SomeFunction(val) {
//     if(val % 2 == 0)  console.log("this is even number");
//     else if (val % 2 !==0) console.log("this is odd number");
// }
// SomeFunction(27);

// function getDay(day){

// function SomeFunction() {
//     let number = Math.floor(Math.random(1) * 5);
//     console.log(number);
//     if(number % 2 == 0)  console.log("this is even number");
//     else if (number % 2 !==0) console.log("this is odd number");
// }
// SomeFunction();

// function getDay(day){

// // var day = 3;
// var dayName;
// switch (day) {
//     case 1:
//         dayName = 'Sunday';
//         break;
//     case 2:
//         dayName = 'Monday';
//         break;
//     case 3:
//         dayName = 'Tuesday';
//         break;
//     case 4:
//         dayName = 'Wednesday';
//         break;
//     case 5:
//         dayName = 'Thursday';
//         break;
//     case 6:
//         dayName = 'Friday';
//         break;
//     case 7:
//         dayName = 'Saturday';
//         break;
//     default:
//         dayName = 'Invalid day';
// }
// console.log(dayName);
// }

// getDay();

// let count = 1;
// while (count < 10) {
//     console.log(count);
//     count +=2;
//     break;
//     // count ++;
//     // count = count + 2;
// }

// let count = 1;
// do {
//     count++;
//     console.log('count is:' + count);
// } while (count <= 10);

let array1 = Array(1, 2, 4, 7, 3, 5, 6);
// let array1 = Array('1', '2', '4', '7', '3', '5', '6');
// console.log(array1)
// let element = 0;
// for (let index = 0; index < array1.length; index++) {
//     // element += (+array1[index]);
//     // element += Number(array1[index]);
//     element += parseInt(array1[index]);
// }
// console.log(element);

let obj2 = {
  firstName: "username",
  firstName2: "username2",
  firstName3: "username3",
};

//mot =  most of the times.
// For-of loop (which iterates over VALUES) --- user for Arrays(mot)
// for(let x of array1){
//     console.log(x)
// }

// For-in loop (which iterates over KEYS/INDEXES) ---- user for Objects(mot)
// for (let y in obj2){
//     console.log(obj2[y]);
// }

// forEach method.
// array1.forEach((x)=>{
//     console.log(x);
// })

/* 10/12/2021*/

// ======== Multi-dementional Array ==========

// let activities = [];  //Array Object literals
// let activities = [
//     ['Work', 9],
//     ['Eat', 1],
//     ['Commute', 2],
//     ['Play Game', 1],
//     ['Sleep', 7]
// ];
// console.table(activities);

// console.log(activities[0][1])

// Constructor functions
// function Person(firstName, lastName) {
//     // if (!new.target) {
//     //     throw Error("Cannot be called without the new keyword");
//     // }

//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.greetHello = function(){
//         return 'hello' + ' ' + this.firstName;
//     }
//     return this.firstName + this.lastName;
// }

// Person.prototype.sayHello = function(){
//     return 'hello' + ' ' + this.firstName;
// }

// // let person = new Person("raaj","kapoor");
// // let person2 = new Person("adithya rai","kapoor");
// let person2 = new Person("Sonali","Bindre");
// console.log(person2);
// console.log(person2.greetHello());

// // object literal
// let object = {
//     secondName : 'kaira',
//     lastName : 'adwani',
//     //method
//     getFunction : function(){
//         return (`The name of the person is
//           ${this.secondName} ${this.lastName}`)
//     },
//     //object within object
//     phone_number : {
//         mobile:'12345d',
//         landline:'6789'
//     }
// }

// console.log(object.getFunction());

// class Demo_class{
//     constructor(username,password){
//         this.username= username;
//         this.password = password;
//     }
//     getPassword(){
//         return this.password;
//     }
// }

// class Benq extends Demo_class{
//     constructor(username,password, country){
//         super(username,password)
//         this.country = country;
//     }
//     getCountry(){
//         return (`${this.username} from ${this.country}`)
//     }
// }

// let user1 = new Demo_class('Bruce','batmanBegins');
// console.log(user1.getCountry());
// let user2 = new Benq('scarlett','sdewage','USA');
// console.log(user2.getCountry());
// console.log(user2.getPassword());

// setTimeout(function() {
//     console.log("hello all how are you...😎");
// }, 5000);

// setTimeout(() => {
//     console.log("hello all how are you...😎");
// }, 10000);

// function callMe(time,callback) {
//     setTimeout(function() {
//         console.log("hello all how are you...😎");
//         callback();
//     }, time * 1000);
// }

// function toBeCalled() {
//     console.log("i'm being called now...")
// }

// callMe(3,toBeCalled);

// 11/12/2021
// BOM - Browser Object Modal - Used to control the Browser window
// using different inbuilt methods.
// ex: localstorage, sessionstorage, cookies, location, alerts, confirm, prompt,
// history, navigator, screen etc.

// let usreObj = {userName: "ranveer",Password: "Deepika"};
// //set an local storage item
// window.localStorage.setItem("userDetails",JSON.stringify(usreObj))
// // to get localstorage item
// window.localStorage.getItem("userDetails");
// // to clear or remove localstorage item
// window.localStorage.removeItem("userDetails");

/* 
DOM -  Document Object Modal - It is an programming interface to control the node 
of html elements, we can manipulate elements and add dynamic nature.
*/

// var kuch_kuch_Btn = document.getElementById('kuchh_bhi');
var kuch_kuch_Btn = document.querySelector("#kuchh_bhi");
// let allInputs = document.getElementsByTagName('input');
// let loadStuff = function (params) {
//     // alert("yeyyy content is loaded....🤣");

//     kuch_kuch_Btn.setAttribute("disabled","true");
//     // document.body.style.background = "yellow";
//     setTimeout(function() {
//         console.log("hello all how are you...😎");
//     }, 5000);
// }

// // var kuch_kuch_Btn = document.getElementById('kuchh_bhi')
// console.log(kuch_kuch_Btn);
// console.log(allInputs);

// kuch_kuch_Btn.addEventListener('click',loadStuff);

/* 14/12/2021 */ /**/

// Selecting Elements
document.getElementById("id");
document.getElementsByClassName("class");
document.getElementsByTagName("h1");
// Note: we need to pass css selector (ex: #id, .Class, Tagname, [attribute] and so on)
document.querySelector("[attribute]");
document.querySelectorAll(".class"); // array-like-object not array-object

/* Traversing Elements */
document.parentNode;
document.nextElementSibiling;
document.previousElementSibling;
/* Manipulating Elements */

//   createElement

// Maintaining Attributes
// Styling
// Handling Events

let h1Tag = document.querySelector(".center");

// h1Tag.style.color = "red";
// h1Tag.style.backgroundColor = "green";
// // h1Tag.style.display = "none";

// let list = h1Tag.classList
// let list1 = h1Tag.className
// console.log(list);
// console.log(list1);

// h1Tag.addEventListener('click',changeColor);

// function changeColor() {
//     console.log("heyyy u jst clicked me")
//     h1Tag.classList.toggle('red')
//     // h1Tag.classList.remove('green')
//     // h1Tag.classList.add('red')
//     // h1Tag.classList.replace('green','red')
// }

// let p = h1Tag.firstChild;
// let p = h1Tag.lastElementChild;
// console.log(p)
// // console.log(h1Tag)
// // var p = document.createElement('p')
// var someEle = document.createElement('b')
// // p.innerHTML = `<span>array-like-object not array-object</span>`;
// someEle.innerText = "text from b tag also called a strong";
// // console.log(p)
// // h1Tag.append(p)
// // h1Tag.replaceChild(p,someEle);
// h1Tag.replaceChildren(p,someEle);

// // cloning a html element
// let cloned = h1Tag.cloneNode(true);
// console.log(cloned)
// document.body.appendChild(cloned);
// // document.body[0].appendChild(cloned);

// h1Tag.insertAdjacentHTML('beforebegin',"<b>yo i\'m a bold tag</b>")
// h1Tag.insertAdjacentHTML('afterend',"<b>yo i\'m a bold tag</b>")
// h1Tag.insertAdjacentHTML('afterbegin',"<b>this is a bold tagggg</b>")
// h1Tag.insertAdjacentHTML('beforeend',"<b>this is a bold tagggg</b>")

// h1Tag.setAttribute("id","headTag");
// h1Tag.getAttribute("id");
// h1Tag.hasAttribute("class");
// h1Tag.removeAttribute("class");

let btn = document.querySelector("#btn");

// btn.addEventListener('click', function(event) {
//     console.log('The button was clicked!');
//     // event.stopPropagation();
//     // event.preventDefault();
// });

// document.body.addEventListener(
//   "click",
//   function (event) {
//     console.log("The body was clicked!");
//   }
// );
// let input = document.getElementById('id1');

// input.addEventListener('keyup',submitForm)
// function submitForm(e) {
//     console.log(e.target.value);
// }
// function checkEvents() {
//     console.log("this is another function");
// }

//page load events
/* 
DOMContentLoaded
load  ~ onload
beforeunload
unload
*/

/* 16/12/2021 */

let signupForm = document.getElementById("signup");
// console.log(signupForm.elements[0].value);
btn.addEventListener("click", function (event) {
  // console.log('The button was clicked!');
  // event.stopPropagation();
  // event.preventDefault();
  // console.log('signupForm',signupForm);
  // console.log(signupForm.elements[0].value);
  // console.log(signupForm.elements[1].value);
  // let signupArray = Array.from(signupForm.elements);
  // console.log(signupArray);
  // for (let x of signupArray){
  //     console.log(x.name, x.value);
  // }
  // let fd = new FormData();
  // let fd = new FormData(signupForm);
  // fd.append("key1","value")
  // fd.append("key1","value")
  // fd.get("key")
  // fd.keys();
  // fd.values
  /* Object Destructuring 👌👌👌*/
  //   let obj = {
  //     color: "blue",
  //     background: "white",
  //     gradientColor: "indianRed",
  //   };
  // //   object.key = value;
  // //   object[key] = value;
  //   const { color, background } = obj;
  //   console.log( color, background );
  // console.log(fd);
  // let formObj = {};
  // for (let [name, value] of fd) {
  //   //  Array Destructuring 👌👌👌👌
  //   console.log(name, value);
  //   formObj[name] = value;
  // }
  //   console.log(formObj);
  /* XHR = XMLHttpRequest It is a built-in browser object that allows to make HTTP requests in js. */
  // const xhr = new XMLHttpRequest();
  //   xhr.open("GET", "https://reqres.in/api/user/23", { async: true }); //xhr.open(method, URL, [async, user, password])
  // xhr.open("POST", "https://reqres.in/api/users");
  // if we want to send POST request, pass formObject in send method
  //   change method to POST
  //   xhr.send(formObj);
  // let formObjStr = JSON.stringify({
  //   name: "morpheus",
  //   job: "leader",
  // });
  //   const formobj1 = {
  //     name: "morpheus",
  //     job: "leader",
  //   };
  //   console.log(formobj1)
  // xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  // xhr.send(formObjStr);
  // xhr.onload = function () {
  //   if (!xhr.status) console.log("OOPS something went wrong", xhr.status);
  //   //   let jsonData =
  //   console.log(xhr.responseText);
  //   return;
  // };
  //   xhr.onprogress = function() {
  //       alert('loading')
  //   }

  /* 17/12/2021 */

  // fetch("https://reqres.in/api/users")
  //   .then((res) => res.json())
  //   .then((userList) => console.log(userList));
  // console.log(data);
  // const promise1 = new Promise((resolve, reject) => {
  //   const x = true;
  //   if (x) resolve();
  //   else reject();
  // });
  // // console.log(promise1);
  // promise1.then((response) => console.log("successfull"))
  // .catch(err => console.error("something went wrong"))
  // getUsers();
});

// let list = document.getElementById('usersDiv')
// async function getUsers() {
//   // let res = await fetch("https://reqres.in/api/users");
//   // let res = await fetch("data.json");
//   // console.log(res);
//   let data = await res.json();
//   console.log(data);
//   let value = '';
//   data['data'].forEach(element => {
//     console.log(element);
//     // value += `<img src=${element.avatar} alt=${element.id} />`
//     value += `<ul>
//                 <li>${element.first_name} ${element.last_name}</li>
//               </ul>`
//     list.innerHTML = value;
//     // list.textContent = value;
//     // list.innerHTML += `${element.avatar} ${element.id}`

//   });

// }

/** Regular Expressions */

// Regular expression are type of strings that define a pattern 
// we can create a regex with (/ /)
// it is case sensitive 

let regex;
regex = /Ok/;      
regex = /Ok/i;         
regex = /Ok/g;      

// const regex = new RegExp('h');

// let str = "ok Hello how are you? ok";

// console.log(str);
// console.log(regex);
// console.log(regex.source);
// let result = regex.test(str)
// let result = str.match(regex);
// let result = str.replace(regex,'Fine');
// console.log(result)

/* pattern flags */
// (i) - ignore flag - used to ignore cases 
// (g) - global flag - checks all the occurances
// (m) - multi-line - will allow multiline strings.

/* Character classes*/
// it is also called as character set -  used to match any symbol from a character set.
// They are indicated with backslash (\) inside regex

// (\d) - match a digit or a character from 0 to 9.
// (\s) - match a whitespace (tab - \t, newline - \n, space)
// (\w) - matches ASCII characters ex [A-Za-z0-9_]
// (\b) - boundry of particular string

// Inverse classes
// (\D) - Except 0-9 everything will be matched.
// (\S) - Except whitespaces, tabs , newline everthing will be matched.
// (\W) - Except [A-Za-z0-9_] everthing will be matched.

// quantifiers
// (.) - dot It is used to match only one (any)character except newline;
// (*) - Astrisk is used to match one or more characters
// (+) - plus is used to match zero or more characters
// {} - curly braces  used to match multiple characters
// (?) - optional used to match multiple characters

// (^) - caret used to specify starting digit/character 
// ($) - caret used to specify ending digit/character 


// Sets and Ranges

// let str = "+1-(408)-555-0105";
let str = 'Hello dfsdfds esff';
let str = 'hi i\'m fine';
// let str = "Hello 1234f 4545 45435435";
// let str = "Hello";
// console.log(str);

regex = /\d/
regex = /\D/      // Inverse
regex = /\s/
regex = /\S/      // Inverse
regex = /\w/gi
regex = /\W/gi    // Inverse
regex = /\d/g
regex = /h.llo/gi
// regex = /\d*/g
regex = /^h?H?ello/g
regex = /^[A-Za-z0-9][0-9]ello/g
regex = /^[A-Za-z0-9][0-9]ell[oO]$/g
regex = /h\w*/gi
regex = /\d{4}./gi
regex = /\d*/gi
regex = /\D+/gi
regex = /\w+/gi
regex = /\S/gi
regex = /^[^A-Za-z]ello$/g


const result1 = str.match(regex);
// console.log(typeof Number(result1.join('')));
console.log(result1);



// Email
var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
// abc@yahoo.com/org/in/edu/co.in
 


