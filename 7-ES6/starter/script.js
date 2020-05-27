//What's new in ES6?
//- can you ES6 and works in modern browsers but need to transpile for old browsers

//Variable Declarations with LET and CONST
//Var replaced by Let and Const

/*

//ES5
var name5 = 'Jane Smith'
var age5 = 23
name5 = 'Jane Miller'
console.log(name5);

//ES6
const name6 = 'Jane Smith' //const means it cannot change
let age6 = 23 //let means it can be mutated

// name6 = 'Jane Miller'
console.log(name6);

//var = function scoped
//let and const are object scoped

//ES5
function driversLicence5(passedTest) {
    if (passedTest) {
    var firstName = 'John';
    var birthyear = 1990;

    console.log(firstName + ' born in ' + birthyear + ' is now allowed to drive.')
    }
}

driversLicence5(true);

//ES6
function driversLicence6(passedTest) {
    
    //you can't use variables before they are declared. 
    //They are hoisted but need to be assigned a value before use
    
    //declare outside of block so they are available
    let firstName; //let needs to be declared outside of block
    const birthyear = 1990; //const needs to be set outside the block

    if (passedTest) {
        firstName = 'John';
//let and const are BLOCK scoped so they only exist inside the block
    }
    //this has access to these variables because they're OUTSIDE the block
    console.log(firstName + ' born in ' + birthyear + ' is now allowed to drive.')
}

driversLicence6(true);


let i = 23;

//another i is block scoped (because it is LET) so it is a separate variable
for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);

//var = variables function scoped
//let = mutable variable which is block scoped
//const = immutable variable which is block scoped

//New IIFE (Immediately Invoked Function Expression)
//IIFE used to be used for data privacy, but can now use a block

//we can simply create a block

{
    const a = 1;
    let b = 2;
    var c = 3
}

// console.log(a + b); //this will fail due to block scope
console.log(c); //this will work as var is function scoped


//IFE in ES5
(function() {
    var c = 3
})();
// console.log(c); //throws an error



//Changes to strings in ES6

let firstName = 'John';
let lastName = 'Smith';
const birthYear = 1990;

function calcAge(year) {
    return 2016 - year;
}

//ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + birthYear + ' and today is ' + calcAge(birthYear));

//ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${birthYear} and today is ${calcAge(birthYear)}.`);

//New string methods
const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J')); //true
console.log(n.endsWith('h')); //true
console.log(n.includes(' ')); //true
console.log(`${firstName} `.repeat(5));
*/


////////////////////////////////////////////////////////////////
//ARROW FUNCTIONS
const years = [1990,1965,1982,1937];

//ES5
var ages5 = years.map(function (el) {
    return 2016 - el
});
console.log(ages5);

//ES6
//1 argument, 1 line of code
let ages6 = years.map( el => 2016 - el);
console.log(ages6);

//two+ arguments means it needs parentheses
ages6 = years.map((el,index) => `Age element ${index + 1}: ${2020 - el}`);
console.log(ages6);

//multiple lines means it needs {} plus a return statement
ages6 = years.map((el,index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${2020 - el}`
})
console.log(ages6);

///////////////////////
//MORE ARROW FUNCTIONS
//arrow function don't have a THIS keyword, they use the surronding THIS variable.

/*
//ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        var self = this //this is a necessary hack because the innermost function takes
        //...a THIS from the window and so doesn't get the variables in the outer layer
        document.querySelector('.green').addEventListener('click',function() {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
};
box5.clickMe();
*/

//ES6
//now the innermost arrow function can access THIS of thebox6 object
//because an arrow function shares the scope of it's surroundings
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {

        document.querySelector('.green').addEventListener('click',
        () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
};
box6.clickMe();