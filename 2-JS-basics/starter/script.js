/***************** 
* Variables and Data Types 
*/

/*
// console.log('Hello, world again !!!');

var firstName = 'John';
var lastName = 'Smith';
var age = 28;
var fullAge = true;

console.log(fullAge);
*/

/***************** 
* Variable Mutation and Data Coercion 
*/

/*
var firstName = 'John';
var age = 28;

//Type Coercion
console.log(firstName + ' ' + age);
//This automatically converts age into a string so it can be joined with other strings

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried)

//Variable Mutation
age = 'twenty eight'
job = 'driver'

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried)

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);

*/
/***************** 
* Operators 
*/
/*
var year, yearJohn, yearMark, ageJohn, ageMark;

now = 2020
ageJohn = 28
ageMark = 33
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

//Math operators
console.log(now + 2);

var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

//typeof operator
console.log(typeof johnOlder);

var x;
console.log(typeof x);
*/

/***************** 
* Operator Precedence
*/

/*
//multiple operators
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge; 
console.log(isFullAge);

//grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;

console.log(average);

//multiple assignments
var x, y;
x = y = (3+5) * 4 - 6; //8* 4 - 6 // 32 - 6 // 26
console.group(x, y);

//more operators
// x = x * 2;
x *= 2;
console.log(x);
x += 10
console.log(x);
x++ //adds 1
console.log(x);
*/

/*******************************
 * Coding challenge 1
 */

 /*
var massJohn, massMark, heightJohn, heightMark, bmiJohn, bmiMark;

massJohn = 68;
massMark = 68;
heightJohn = 1.57;
heightMark = 1.58;
bmiJohn = massJohn / (heightJohn * heightJohn)
bmiMark = massMark / (heightMark * heightMark)
isMarkFatter = bmiMark > bmiJohn

// console.log("Is Mark's BMI greater than John's? " + isMarkFatter)
console.log('Is Mark\'s BMI greater than John\'s? ' + isMarkFatter)
console.log(bmiMark,bmiJohn);
*/

/*******************************
 * If / Else statements
 */
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon..');
}

var isMarried = true

if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon..');
}



var massJohn, massMark, heightJohn, heightMark, bmiJohn, bmiMark;

massJohn = 68;
massMark = 68;
heightJohn = 1.57;
heightMark = 1.58;
bmiJohn = massJohn / (heightJohn * heightJohn)
bmiMark = massMark / (heightMark * heightMark)
isMarkFatter = bmiMark > bmiJohn

// console.log("Is Mark's BMI greater than John's? " + isMarkFatter)
// console.log('Is Mark\'s BMI greater than John\'s? ' + isMarkFatter)
// console.log(bmiMark,bmiJohn);

if (bmiMark > bmiJohn) {
    console.log('Mark has a bigger BMI than John');
} else {
    console.log('John has a bigger BMI than Mark');
}
*/

/*******************************
 * If / Else statements
 */














