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

console.log(logInteger([1,2.01,4]))
