/* Palindrom*/

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

/* idk...*/
function logInteger(array) {
    return rray.map( element => {
            if ( element % 3=== 0) {
                return "fizz";
            } else if ( element % 5 === 0) {
                return "buzz";
            } else if ( element % (3*5) === 0 ) {
                return "fizzbuzz";
            } else {
                return false;
            }
        ) 
    }
}






/* Check integer based on 
    input type, make sure dealing with number (assumed there is not-empty input)
    input form, not decimal number
    input forn, not contain special characters   
    problems: map and for loop automtically formats the first 0 digit after decimal point, ex: 2.0 will be 2 after being processed within map()and for loop method  
*/


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

/* fake data:
    array contains random numbers, string characters
*/
// let r = Math.random().toString(36).substring(7);

console.log(logInteger([1,2.01,4.009,'a', 5]))
