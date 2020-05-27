//Function constructor

// var john = {
//     name: 'John',
//     birthYear: 1990,
//     job: 'teacher'
// };

//write it with a capital
// var Person = function(name,birthYear,job) {
//     this.name = name;
//     this.birthYear = birthYear;
//     this.job = job;
//     // this.calcAge = function(){
//     //     console.log(2020-this.birthYear);
//     // }
// }

// Person.prototype.calcAge = function(){
//     console.log(2020-this.birthYear);
// }

// Person.prototype.lastName = 'Smith';



//INSTANTIATION (because these are instances of the object constructor above)
//the "new" operator sets the this variable to point to the new empty object, 
//...which means "this" applies to the new object when it is called, 
//...and these values are applied to that new object
// var john = new Person('John',1990,'teacher')

// // john.calcAge();

// //INHERITANCE
// var jane = new Person('Jane',1969,'designer');
// var mark = new Person('Mark',1948,'retired');

// john.calcAge();
// jane.calcAge();
// mark.calcAge();

// console.log(john.lastName,jane.lastName,mark.lastName);



//Object Create Method (same outcome, different process)
//First define an object to act as prototype
//Then create instances

//write prototype as an object
/*
var personProto = {
    calcAge: function() {
        console.log(2016 - this.birthYear);
    }
}

var john = Object.create(personProto);
john.name = 'John'
john.birthYear = 1990
john.job = 'teacher'

//or add all the other object properties in a second argument inside the Object.create

var jane = Object.create(personProto, {
    name: {value: 'Jane'},
    birthYear: {value: 1969},
    job: {value: 'designer'}
});
*/
//object.create VERSUS Function Constructor
//Object.create inherits directly from the function we create
//Function constructor the object inherts through the prototype property of the parent object

//PRIMITIVES vs OBJECTS
//primitives: strings, numbers, booleans, undefined
//primitives contain their info within the variable
//objects point to where the information is stored in memory

//these two primitive variables hold their own copy of the data
/*
var a  = 23;
var b = a;
a = 46;

console.log(a,b);

//objects
var obj1 = {
    name: 'John',
    age: 26
}

var obj2 = obj1;
obj1.age = 30

console.log(obj1.age,obj2.age)

//functions
var age = 27
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
}

function change(a,b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age,obj.city);

console.log(age, obj.city);
*/


//FUNCTIONS
//functions are objects and behave like them
//we can store functions in a variable
//we can pass a function as an argument to another function
//we can return a function from a function
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr,fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

//callback function
function calcAge(el) {
    return 2020 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el < 81) {
        return Math.round(206.9 - (.67 * el));    
    } else {
        -1
    };
}

//now we call back the function (if we used brackets we would be calling it here)
var ages = arrayCalc(years,calcAge);
var fullAges = arrayCalc(ages,isFullAge);
var rates = arrayCalc(ages,maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(rates);
*/

//Functions Returning Functions
/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');

var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('Mark');

//when a function is returned, it goes left to right, so this calls back the function for teachers first,
//then it applies that function to the argument Mark
interviewQuestion('teacher')('Mark');
*/

//Immediately Invoked Function Expressions IIFE
/*
//normal function
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

//IIFE
(function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

// console.log(score);

(function game(goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);
*/

//CLOSURES
function retirement(retirementAge) {
    var a  = ' years left until retirement.';
    return function(birthYear) {
        var age = 2016 - birthYear;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGerm = retirement(65);
var retirementIce = retirement(67)
retirementUS(1990);

retirement(66)(1990);

retirementGerm(1990);
retirementIce(1990);

//an inner function always has access to outer function variables, even once the variable has returned

//so can rewrite the interview question above like
/*
function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job = 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('teacher')('John')
*/

//BIND, CALL, APPLY

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style,timeOfDay) {
        if (style === 'formal') {
            console.log('Good' + timeOfDay + ', Ladies and Gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ', and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey, what\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ', and I\'m ' + this.age + ' years old.');
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}


john.presentation('formal','morning');

//call method allows us to set the THIS variable in the first argument. Allows you to borrow a method
john.presentation.call(emily,'friendly','evening');

//apply method only has two arguments, but the second argument can be an array of all the arguments needed in the borrowed method
john.presentation.apply(emily,['formal','morning']);

//bind method - copies the function to store it somewhere. Does not return the function.
//allows you to PRE-SET arguments if you want
var johnFriendly = john.presentation.bind(john,'friendly');

johnFriendly('morning');
johnFriendly('evening');

var emilyFormal = john.presentation.bind(emily,'formal')

