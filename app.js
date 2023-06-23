// JOHN SMILGA TUT

// document.write('HEllo worlld');
// alert('hello world');
// console.log('heloo world');
// ----------------------------
// document.write('hello world');
// alert('pop-up message baby');
// console.log('hello world');
//-------------------------------\

// => STATEMENTS = set of instructions
// => comments = shortcut command + /

// console.log("HEllo world");


// VARIABLES - most basic building block
// variables - store, access , modify == value
// declare, assigment operator, assign value
/*
let name = "hello moon";
console.log(name);  */



// RULES FOR NAMING THE VARIABLES
// can contain digits, letters, underscore, $
// no keyword
// cannot start with numbers
// case sensitive
// camelCase or underscoree


// LET VS VAR VS CONST
 /* var name = "moon";
let name1 = "moon1";
const name2 = "moon3";
console.log(name1); */


// STRING CONCATENATION -> combine strring values
// `` -> BACKTICKS (template strings) easier option

// const name = "John";
// const lastName = "Smith";
// let fullName;
// console.log("Helo there your full name is: " + name + " " + lastName);


// NUMBERS
// loosly typed -> don't declare type

// const number = 34;
// const number1 = 34.5345;
// let add = number + number1;
// console.log("the additon is: " + add);

// let nm = 20;
// nm += 1;
// nm -= 1;
// nm *= 2;
// nm /= 2; 
// nm++;
// nm--;
// nm % 2;
// console.log(nm);


// IMPLICT TYPE CONVERSION

// let nm1 = '30';
// let nm2 = '50';
// const result = nm1 - nm2; 
// // if result = nm1 + nm2) its going to perform string concatenation
// console.log(result);



// DATATYPES -> 7 TYPES
// primitive -> String, Number, Boolea, Null, Udefined, Symbol
// object -> Arrays, Functions, Objects


// typeof - operator (typeof variable) (typeof value)


// // String
// const text = "Some of my texts";

// // Number
// const number = 44;

// // Boolean
// const value = true;
// // NUll
// const result = null;

// // Undefined


// // Symbol (ES6)
// console.log(typeof text);
// console.log(typeof number);
// console.log(typeof true);


// ARRAYS, FUNCTIONS AND OBJECTS

// ARRAYS -> [], o index based

// const names = ['hello', 'john', 'smith', 'peter', 'harry', 'ron', 56, 66];
// console.log(names);
// console.log(names[2]);


// FUNCTIONS -> declare, and invoke

// function helloNames(){
//     console.log("Hello, myself ron");
//     console.log("Hello, myself harry");
//     console.log("Hello, myself peter");
// }
// helloNames();


// PARAMS -> when declare/define
// plaveholders, local vars
// ARGUMENTS -> when invoke/run/call
// use vars/values, multiple params, undefined

// function greet(name){
//     console.log("Hello, Good morning " + name);
// }
// greet("Harry");
// greet("Peter");
// greet("John");


// RETURN
// default undefined, shortcuts, ignores after
// EXPRESSION

// function addValues(num1, num2){
//     return num1 + num2;
// }

// const firstValue = addValues(3, 5);
// const secondValue = addValues(10, 20);
// // expression
// const add = function(num1, num2){
//     return num1 + num2;
// }
// const thirdValue = add(2,3);
// const values = [firstValue, secondValue, thirdValue];
// console.log(values);


// OBJECTS - key/values pairs methods
// dot notation

// const person = {
//     name: "Harry",
//     lastName: "Potter",
//     age: 40,
//     education: true,
//     married: false,
//     siblings: ['harry', 'potter', 'ron'],
//     greeting: function(){
//         console.log("Hello my name is Harry");
//     },
// };

// console.log(person.name);
// console.log(person.age);


// CONDITIONAL STATEMENTS 
// >, <, >=, <=, ==, ===, !=, !===

// if(true){
//     console.log("HEllo world");
// }

//if - else if - else

// ==  -> check only values
// === -> check both values and type

// let a = 10;
// let b = 6;
// if(a > b){
//     console.log('a is greater than b');
// } else {
//     console.log('b is smaller than a');
// }


// LOGICAL OPERATORS
// (|| - OR) (&& - AND)

// SWITCH CASES
// dice values 1 - 6;

// let dice = 2;
// switch (dice) {
//     case 1:
//         console.log('you got one');
//         break;
//     case 2:
//         console.log('you got two');
//         break;
//     case 3:
//         console.log('you got three');
//         break;    
//     default:
//         break;
// }


// LOOPS
// repeatedly run a block of code while condition is true
// while loop

// let num = 10;
// while(num > 1){
//     console.log("I have the number " + num);
//     num--;
// }


// DO WHILE LOOP
// code block first, condition second
// runs at least

// let num = 0;

// do{
//     console.log('your number is ' + num); 
//     num++;
// } while(num < 10);


// FOR LOOP

// for(let i=0; i<10; i++){
//     console.log('the number is ' + i);
// }


// STRING PROPERTIES AND METHODS
// wrapper String OBject, don't memorize methods

// let text = 'Harry Potter';
// console.log(text.length);
// console.log(text.toLowerCase());
// console.log(text.toUpperCase());


// TEMPLATE LITERALS
// Backtick character `` 
// Interpolation ${} - insert expression(value)

// let name = "Peter Parker";
// let age = 19;

// const result = `Hello its's ${name} and he is ${age} years old`;
// console.log(result);



// ARRAYS PROPERTIES AND NETHODS
// let names = ['harry', 'john', 'peter', 'james', 'clark', 'rose'];

// // length
// console.log(names.length);

// // concat
// let lastNames = ['potter', 'smilga', 'snowden'];
// let fullNames = names.concat(lastNames);
// console.log(fullNames);

// // reverse 
// console.log(fullNames.reverse());

// // unshift -- inserting item at the beginning
// fullNames.unshift('anna');
// fullNames.unshift('dobby');
// console.log(fullNames);

// // shift -- removing item at the beginning
// fullNames.shift();
// fullNames.shift();
// console.log(fullNames);

// // push --- inserting at the last
// // pop  --- removing at the last

// // splice --- mutates original array
// const specificNames = fullNames.splice(3,1);
// console.log(specificNames);



// ARRAYS AND FOR LOOP

// const names = ['harry', 'john', 'edward', 'anna', 'rose', 'cristan'];
// const lastname = 'potter';
// let newArray = [];

// for(let i=0; i<names.length;i++){
//     console.log(i);
//     console.log(names[i]);
//     const fullname = `${names[i]} ${lastname}`;
//     newArray.push(fullname);
// }
// console.log(newArray);


// FUNCTIONS, RETURN, IF, ARRAYS, FOR LOOP

// const gas = [100,30,20,56,35];
// const food = [66,100,10,30,90];

// function calculateTotal(arr){
//     let total = 0;
//     for(let i = 0; i< arr.length; i++){
//         // console.log(arr[i]);
//         total += arr[i];
//     }
//     console.log(total);
// }
// calculateTotal(gas);
// calculateTotal(food);



// REFERENCE vs VALUE
// Primitive datatypes 
// string, number, symbol, boolean, undefined, null
// arrays, functions, Objects = object
// typeof

// when assigning primitive data type value to a variable any 
// changes are made directly to that value, without affecting
// original value

// when assigning non-primitive data type value to a variable is done
// by reference so any changes will effect all the references 

/*
const number = 2;
let number2 = number;
number2 = 5;
console.log(`the first value is ${number}`);
console.log(`the second value is ${number2}`);


let person = {name: 'harry'};
let person2 = {...person};
person2.name = 'potter';
console.log(`the name of first person is ${person.name}`);
console.log(`the name of second person is ${person2.name}`); */



// NULL AND UNDEFINED
// both represent "no value"

// Undefined -> "javascript cannot find value for this"

// variable without value
// missing function arguments
// missing object properties

// null -> "developer sets the value"
/* 
let number = 20 + null;
console.log(number);
let number2 = 20 + undefined;
console.log(number2);   */


// TRUTHY AND FALSY
// "", '', ``, 0, -0, NaN, false, null, undefined --> false
/*
const text = '';

if(text){
    console.log('value is truthy');
} else {
    console.log('value is falsy');
}                                       */



// TERNARY OPERATOR

// const val = 9>10;

// val ? console.log('value is true') : console.log('value is false');



// GLOBAL SCOPE vs LOCAL SCOPE
// any variable outside code block {} is said to be is global scope
// can be access anywhere n the program
// Gothas: name collisons, modify by mistake
/*
let name = 'harry';
name = 'potter';

function cal(){
    console.log(name);
    name = 'mine';
}
cal();

if(true){
    console.log(name);
    name = 'mine true';
}
console.log(`my name is ${name} and im doing great`);    */

// LOCAL SCOPE -> can not be access from outside code blocks


// VARIABLE LOOKUP
// {} -> code block

// const globalNumber = 10;

// function add(num1, num2){
//     const globalNumber = 1;
//     const result = num1 + num2 + globalNumber;
//     return result;
// }

// console.log(add(4,5));



// CALLBACK FUNCTION, HIGHER ORDER FUNCTIONS, FUNCTIONS AS FIRST CLASS OBJECTS/CITIZENS
//  Functions are the first class objects -> stored in a variable (expression)
//  passed as an argument to another function, return from the function(closure)..

// Higher order functions -> accepts another function as an argument or 
//                          returns another function as a result

// Callback function -> passed to a another function as an argument 
//                    and executed inside that function

// function greetMorning(name){
//     const myName = 'Harry';
//     console.log(`Good Morning ${name}, my name is ${myName}`);
// }
// greetMorning('Harry Potter');

// better method->>>
/*
function morning(name){
    return `Good Morning ${name.toUpperCase()}`;
}
function afternoon(name){
    return `Good Afternoon ${name.toUpperCase()}`;
}
function greet(name,cb){
    const myName = 'Harry';
    console.log(`${cb(name)}, my name is ${myName}`);
}
greet("Peter", morning);
greet("Bob", afternoon);   */



// POWERFULL ARRAY METHODS
// forEach, Map, Filter, Find, Reduce
// Iterate over array -> no for loop required
// Accept CALLBACK function as an argument, calls Callback
// against each item in the array. Reference item in callback parameter..
/*
const numbers = [2,4,5,3,6,2,1];

for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}                                   */

// FOREACH
// does not return new array
/*
const people = [
    {name:'Harry', age:20, position:'developer'},
    {name:'Peter', age:22, position:'designer'},
    {name:'Anna', age:26, postion:'boss'}
];

function showPerson(){
    console.log(people);
}
people.forEach(showPerson);     */


// MAP
// does return a new array
// does not change size of original array
// uses values of original arrays when making new one
/*
const people = [
    {name:'Harry', age:20, position:'developer'},
    {name:'Peter', age:22, position:'designer'},
    {name:'Anna', age:26, postion:'boss'}
];

const ages = people.map(function(person){
    console.log(person);
    return 'hello world';
});
console.log(ages);          */



// FILTER
// does return a new array
// can manipulate the size of new array
// returns based on condition
/* 
const people = [
    {name:'Harry', age:20, position:'developer'},
    {name:'Peter', age:22, position:'designer'},
    {name:'Anna', age:26, postion:'boss'},
    {name:'Ron', age:25, postion:'Manager'}
];

const youngPeople = people.filter(function(person){
    return person.age <= 25;
});
console.log(youngPeople);           */



// FIND
// returns single instances -> (in this case object)
// returns first match, if no much undefined
// great for getting unique value
/*
const people = [
    {name:'Harry', age:20, position:'developer', id:1},
    {name:'Peter', age:22, position:'designer', id:2},
    {name:'Anna', age:26, postion:'boss', id:3},
    {name:'Ron', age:25, postion:'Manager', id:4}
];

const person = people.find(function(person){
    return person.id === 2;
});
console.log(person);        */



// REDUCE 
// iterates, callback function
// reduces to a single value -> number, array, object
// 1 parameter ('acc')  -> total of all calculations
// 2 parameter ('curr') -> current iteration/value
/*
const people = [
    {name:'Harry', age:20, position:'developer', id:1, salary:2000},
    {name:'Peter', age:22, position:'designer', id:2, salary:2100},
    {name:'Anna', age:26, postion:'boss', id:3, salary:5000},
    {name:'Ron', age:25, postion:'Manager', id:4, salary:3000}
];
const total = people.reduce(function(acc, currItem){
    console.log(`total ${acc}`);
    console.log(`current money ${currItem.salary}`);
    acc += currItem.salary
    return acc;
},0);
console.log(total);         */


// MATH
// standard build-in objects --> always available

// const number = 5.3433442;
// const result = Math.floor(number);

// const number = 5.3433442;
// const result = Math.ceil(number);
// console.log(result);

/*--------------------------------------------------------*/


// DOM -> DOCUMENT OBJECT MODEL
// similar to css

// select the elemnt or group of elments thet you want to effect
// decide the effect we want to apply to the selection 

// many different ways

// document.body.style.backgroundColor = 'red';
// document.body.style.color = 'black';
// document.getElementById('btn').style.color = 'blue';


// WINDOW OBJECT -> browser api
// document
// console.dir

// console.dir(document);



// SELECT THE ELEMENT OR GROUP OF ELEMENT
// Decide the effect we want to apply to the selection
// getElementById('element')

// const h1 = document.getElementById('title');
// h1.style.color = 'red';

// document.getElementById('btn').style.backgroundColor = 'blue';


// SELECT THE ELEMENT OR GROUP OF ELEMENTS THAT WE WANT
// Decide the effecct we want to apply to the selection

// getElementByTagName('tagname');
// node-list -> array-like objects
// index, length property but not array methods

//-----------------------------------------------------------------------------------------------------//


// CWH

