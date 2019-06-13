/* 1/ Palindrom */

/* https://www.javatpoint.com/palindrome-program-in-java

    Get the number to check for palindrome
    Reverse the string order and assign it to a temporary variable
    Compare the temporary string with reversed string
    Return true if palindrom, false otherwise

*/

function palindrom(string) {
    const reversed = string.toLowerCase().split('').reverse().join('')
    if (reversed === string) {
        return true;
    } 
    return false;
}


/* For loop 
    idea: https://stackoverflow.com/questions/4138827/check-string-for-palindrome?page=1&tab=votes#tab-top
*/
function palindrom(string) {
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === string.charAt(string.length - 1)) {
            return true;
        }
    }
    return false;
}


console.log(palindrom('madam'))

/* 2/
console logs the numbers from 1 to n, where n is the integer the function takes as its parameter
logs fizz instead of the number for multiples of 3
logs buzz instead of the number for multiples of 5
logs fizzbuzz for numbers that are multiples of both 3 and 5
*/

/* Given an array of number datatype w/ n length
https://stackoverflow.com/questions/5836833/create-a-array-with-random-values
*/
const testArray = (n) => Array.from({ length: n }, () => Math.floor(Math.random() * 40));

function logInteger(array) {
    console.log(array)
    return array.map( element => {
            if ( element % 3 === 0) {
                return "fizz";
            } else if ( element % 5 === 0) {
                return "buzz";
            } else if ( element % (3*5) === 0 ) {
                return "fizzbuzz";
            } else {
                return false;
            }
    });
}

console.log(logInteger(testArray(10)))

/* Side note */
/* FATAL ERROR: invalid array length Allocation failed - JavaScript heap out of memory if following the below solution... My fault*/
// const testArray = Array(10)

// for (let i = 0; i < testArray.length; i++) {
//     testArray.push(Math.floor(Math.random() * 10 + 1))
// }



/* They did not ask me to do this ... I'm sorry 
Create a trash data in an array
Return only integer
logs fizz instead of the number for multiples of 3
logs buzz instead of the number for multiples of 5
logs fizzbuzz for numbers that are multiples of both 3 and 5

My ideas:
    Check integer based on 
    input type, make sure dealing with number (assumed there is not-empty input)
    input form, not decimal number
    input forn, not contain special characters   
    problems: map and for loop automtically formats the first 0 digit after decimal point, ex: 2.0 will be 2 after being processed within map()and for loop method  
*/

/* fake data:
    array contains random numbers, string characters
*/
const testStringArray = (n) => Array.from({ length: n }, () => Math.random().toString(36).substring(7)); 
const testNumArray = (n) => Array.from({ length: n }, () => Math.floor(Math.random() * 40));
// const testArray = testStringArray.concat(testNumArray)
const testArray = (testStringArray, testNumArray, n) => {
    for (let i = 0; i < n; i++) {

    }
}
console.log(testArray)

function logInteger(array) {
    // for (let i=0; i < array.length; i++) {
    //     firstcheck = parseFloat(array[i])
    //     const decpoint = firstcheck.toString().indexOf('.');
    // }
    return setTimeout(array.map( element => {
        firstcheck = parseFloat(element)
        const decpoint = firstcheck.toString().indexOf('.'); // returning -1 means that there is no period within the string
        console.log(firstcheck, decpoint)
        while (typeof firstcheck === "number") {
            if (element.toString().indexOf(2) && decpoint === -1) {
                return "fizz";
            } else if (element.toString().indexOf(4) && decpoint === -1) {
                return 'buzz';
            } else if (element.toString().indexOf(2) && element.indexOf(4) && decpoint === -1) {
                return 'fizzbuzz';
            }
        }
    }), 1000)
}


console.log(logInteger([1,2.01,4.009,'a', 5]))
