///////////////////////////////////////
// Lecture: Hoisting

//It works to call a function before it is decleared, because the code is HOISTED before it is executed
// calcAge(1965);
// yearsUntilRetire(1983);

// function calcAge(birthYear) {
//     console.log(2020-birthYear);
// }

// var yearsUntilRetire = function(birthYear) {
//     console.log(65-(2020-birthYear));
// }

// calcAge(1990);














///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

// console.log(this)
// calcAge(1985)

// function calcAge(birthYear) {
//     console.log(2020-birthYear);
//     console.log(this);
// }

var john = {
    name: 'John',
    birthYear: 1990,
    calcAge: function() {
        console.log(this);
        console.log(2020 - this.birthYear);
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
}

john.calcAge();

var mike  = {
    name: 'Mike',
    birthYear: 1984
};

mike.calcAge = john.calcAge;

mike.calcAge();


