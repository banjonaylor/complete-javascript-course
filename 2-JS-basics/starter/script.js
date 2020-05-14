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
 * Boolean logic
 */
// var firstName = 'John'
// var age = 20

// if (age < 13) {
//     console.log(firstName + ' is a boy');
// } else if (age >= 13 && age < 20) {
//     console.log(firstName + ' is a teenager')
// } else if (age >= 20 && age < 30) {
//     console.log(firstName + ' is a young man')
// } else {
//     console.log(firstName + ' is a man');
// }

/*******************************
 * Ternary operator and Switch
 */

 /*
var age = 16
var firstName = 'John'

//ternary operator
age > 18 ? console.log(firstName + ' drinks beer') 
: console.log(firstName + ' drinks juice');

var drink  = age > 18 ? 'beer' : 'juice'

console.log(firstName + ' drinks ' + drink)

//Switch statement
var job = 'cop';

switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code');
        break;
    case 'driver':
        console.log(firstName + ' drives an Uber in Lisbon');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites');
        break;
    default:
        console.log(firstName + ' does something else');
}
//how to do with with a range rather than simple === 
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenage');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man');
        break;
    default:
        console.log(firstName + ' is a man');                    
}
*/

/*******************************
 * Falsy Values
 */

//falsey values = undefined, null, 0, '', NaN
//these all equal false in a boolean

// truthy values = all values which are not falsey
// these all equal true in a boolean

/*
var height;
height = 23;

if (height || height === 0) {
    console.log('The variable is defined');
} else {
    console.log('The variable has not been defined');
}

//The or check above is common because 0 is FALSEY and so can trick that it is undefined

// The assignment == does type conversion. The operator === is strict. SO....
if (height = '23') {
    console.log('The == operator does type coercion!');
}
// Best practice is to use === for strict equals
*/

/*******************************
 * Coding Challenge 2
 */
/*
var avgJohnScore = (89 + 120 + 103 )/ 3
var avgMikeScore = (116 + 94 + 123)/ 3
var avgMaryScore = (97 + 134 + 105)/ 3

console.log('John: ' + avgJohnScore);
console.log('Mike: ' + avgMikeScore);
console.log('Mary: ' + avgMaryScore);

if (avgJohnScore > avgMaryScore && avgJohnScore > avgMikeScore) {
    console.log('John is the winner');
} else if (avgMaryScore > avgJohnScore && avgMaryScore > avgMikeScore) {
    console.log('Mary is the winner');
} else if (avgMikeScore > avgJohnScore && avgMikeScore > avgMaryScore) {
    console.log('Mike is the winner');
} else {
    console.log('No single player wins');
}
*/

/*******************************
 * Functions
 */
/*
function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn,ageMike,ageJane);

'Don\'t Repeat Yourself! *DRY* Use functions instead' 

function yearsUntilRetirement(year,firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired');
    }
}

yearsUntilRetirement(1990,'John');
yearsUntilRetirement(1948,'Mike');
yearsUntilRetirement(1969,'Jane');
*/

/*******************************
 * Function Statements and Expressions
 */

/*
 //function declation

//  function whatDoYouDo(job, firstName) {}

 //function expression
var whatDoYouDo = function(job,firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives an Uber in Lisbon';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default: 
            return firstName + ' has some other job';
    }
}

console.log(whatDoYouDo('teacher','John'));
console.log(whatDoYouDo('driver','Mark'));
console.log(whatDoYouDo('cop','Mary'));
*/
// A JavaScript *expression* always produces a single value 
// A JavaScript *statment" does not produce an outcome
/*
var names = ['John','Mark','Jane'];
var years = new Array(1990,1969,1948);

console.log(names[0]);
console.log(names.length);

//mutate array data
names[1] = 'Ben'
names[5] = 'Mary'
names[names.length] = 'Jim' //This adds 1 item
console.log(names);

//different data types in an array

var john = ['John','Smith',1990,'designer',false];
john.push('blue'); //append an item
console.log(john);

john.unshift('Mr') //add new first element
console.log(john);

john.pop();
john.pop(); //lose last element
john.shift(); //lose first element
console.log(john);

console.log(john.indexOf(1990)); //a result of -1 means that it is not in the array

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John is a designer'
console.log(isDesigner);
*/
/*
function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2
    } else if (bill < 200) {
        percentage = .15
    } else {
        percentage = .1
    }
    return bill * percentage
}

console.log(tipCalculator(10));

var bills = [124,48,268];
var tips = [tipCalculator(bills[0]),tipCalculator(bills[1]),tipCalculator(bills[2])];
var finalValues = [bills[0] + tips[0],bills[1] + tips[1],bills[2] + tips[2]]

console.log(tips, finalValues);
*/

/*******************************
 * Objects and properties
 */
/*
 //object literal = use the curly braces
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane','Mark','Bob','Emily'],
    job: 'teacher',
    isMarried: false
}
console.log(john);
console.log(john.firstName); //a dot notation can be used to see a property
console.log(john['lastName']); //this is like accessing something in array by location
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer'
john['isMarried'] = true

console.log(john);

//new object = use the NEW and OBJECT key words
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Harley';

console.log(jane);
*/
/*******************************
 * Objects and methods
 */
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane','Mark','Bob','Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018  - this.birthYear;
    }
};
john.calcAge();
console.log(john);

var john = {
    firstName = 'John',
    lastName = 'Smith',
    height = 1.59,
    weight = 78
}
var Mark = {
    firstName = 'Mark',
    lastName = 'Walhberg',
    height = 1.34,
    weight = 84    
}
*/
/*******************************
 * Loops and Iteration
 */
/*
for (var i = 0; i < 10; i++) {
    console.log(i);
} //i++ is i = i + 1

// var john = {
//     firstName = 'John',
//     lastName = 'Smith',
//     birthYear = 1990
//     job = 'designer',
//     isMarried = false
// }

var john = ['John','Smith',1990,'designer',false]

for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

//this is an equivalent while loop
var i = 0;
while (i < john.length) {
    console.log(john[i]);
    i++;
}
*/
//continue and break statements
// var john = ['John','Smith',1990,'designer',false]

// for (var i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') continue;
//     console.log(john[i]);
// }

// for (var i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') break;
//     console.log(john[i]);
// }

//loop backwards
// for (var i = (john.length)-1; i >= 0; i -= 1) {
    // if (typeof john[i] !== 'string') break;
    // console.log(john[i]);
// }

var john = {
    fullName: 'John Smith',
    bills: [124,48,268,180,42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
        for (var i = 0; i < this.bills.length; i++) 
        //determine percentage based on tipping rules
        {
            var percentage
            var bill = this.bills[i]

            if (bill < 50) {
                percentage = .2
            } else if (bill <= 200) {
                percentage = .15
            } else {
                percentage = .1
            }
            //add result to corresponding array
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + (bill * percentage);
        }
    }
}

function calcAverage(tips) {
    var sum = 0
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i]
    }
    return sum / tips.length;
}

john.calcTips();


john.average = calcAverage(john.tips);

console.log(john);



/*****************************************************************
 * SECTION 3
 *  
 */






































