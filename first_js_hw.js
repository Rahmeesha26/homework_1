// =============================SECTION 1========================================

// 1. The acronym DRY means "Don't Repeat Yourself". It's important for readability and maintenance. 
// I believe loops are the 'tools' we've used.

// 2. const changes variables
// let does not hoist values
// var hoists values 

// ==============================SECTION 2=======================================

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;
const g = b + c;

console.log(a < b)
console.log(c > d)
console.log('Name' === 'Name')
console.log(a < b < c)
console.log(a !== a < d)
console.log(e !== 'Kevin')
console.log(48 >= '48')
console.log(f !== e)
console.log(g)

// ==============================SECTION 3=======================================

// this fitst while loop seems like it will be not infinite loop because it's true.

// the second loop looks like it will be a infinite loop because it's looking 
// for a false statement

//identifying the letters value
let letters = "A";
//giving i the value of 0
let i = 0;
//setting up while loop
while (i < 20) {
    //i'm not sure whats going on here
	letters += "A";
    // adding  1 in a loop
	i++;
}
//logging the results of letters
console.log(letters);

//i didn't know what it was going to do, but i did think it would make 20  "A's"

// ==============================SECTION 4======================================

// the difference between for loop and while loop are for loops use when the 
// number of iterations are known and while loops run until a statement
// have to be proved wrong.
//they are similar because they run statements repeatedly while program runs.

for (let i = 0; i < 100; i++) {
	console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
}
// the first part of the control panel is: where the number starts from.
// the second part of the control panel is: how many times the log runs for.
// the third part of the control panel is: adding 1 in asending order

// for loop 2:
for (let i = 1; i < 1000; i++){
    console.log(i);
}

// ==============================SECTION 5======================================