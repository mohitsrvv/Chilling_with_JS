/*  Write a JavaScript program to get the current date. */

let today = new Date();
let dd = today.getDate();

let mm = today.getMonth();
const yyyy = today.getFullYear();

if(dd < 10){
    dd = `0${dd}`;
}
if(mm < 10){
    mm = `0${mm}`;
}
today = `${dd}-${mm}-${yyyy}`;
console.log(today);