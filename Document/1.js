// learning from javascript.info Great Resource!

// DOCUMENT - Browser environment, specs

/*
function sayHi(){
    alert("hello");
}
window.sayHi();
alert(window.innerHeight);
*/


// DOM (Document Object Model)

/*The Document Object Model, or DOM for short, represents all page content as objects that can be modified.
The document object is the main “entry point” to the page. We can change or create anything on the page using it. */

// document.body.style.background = 'red';
// setTimeout(() => document.body.style.background = "", 1000);


// BOM (Browser Object Model)

/*represents additional objects provided by the browser (host environment) 
for working with everything except the document */
/*
alert(location.href);
if(confirm("go to wikipedia")) {
    location.href = "https://wikipedia.org";
}  */