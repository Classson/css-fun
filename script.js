//Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
//
//For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.


//function whatIsInAName(collection, source){
//    let arr = [];
//    
//    for(let i = 0; i < collection.length; i++){
//        let currentObj = collection[i];
//        
//        let sourceKeys = Object.keys(source);
//        let count = 0;
//    
//        for(let i = 0; i < sourceKeys.length; i++){
//            let currentSourceKey = sourceKeys[i];
//            let currentSourceValue = source[currentSourceKey];
//            
//            
//            if(currentObj.hasOwnProperty(currentSourceKey) && currentObj[currentSourceKey] === source[currentSourceKey]){
//                count++;
//            }
//        }
//        
//        if(count === sourceKeys.length){
//            arr.push(currentObj);
//        }
//    }
//    console.log(arr);
//    return arr;
//}
//
//whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 });
//
////should return [{ "apple": 1, "bat": 2, "cookie": 2 }].


//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

//function spinalCase(str) {
//    let wordsArr = str.split(/(?=[A-Z])| |_/g);
//    let newStr = wordsArr.join("-").toLocaleLowerCase();
//    return newStr;
//  
//}
//
//spinalCase('ThisIs Spinal tap');

//Find the missing letter in the passed letter range and return it.
//
//If all letters are present in the range, return undefined.


//function fearNotLetter(str) {
//    let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//    let letterArr = str.toLowerCase().split('');
//    
//    for(let i = 1; i < str.length; i++){
//        let ind = alpha.indexOf(letterArr[i]);
//        if(ind !== alpha.indexOf(letterArr[i-1])+1){
//            console.log(alpha[alpha.indexOf(letterArr[i-1])+1]);
//            return alpha[alpha.indexOf(letterArr[i-1])+1];
//        }
//    }
//}
//
//fearNotLetter("abce");

//Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

//function sumFibs(num) {
//    let numArr = [];
//    let oddArr = [];
//    let sum = 0;
//    for(let i = 1; i <=num; i++){
//        if(i <= 2){
//            numArr.push(1);
//        }else{
//            let nextNum = numArr[i-2] + numArr[i-3];
//            if(nextNum > num){
//                break;
//            } else {
//                numArr.push(nextNum);
//            }
//        }
//    }
//
//    for(let i = 0; i < numArr.length; i++){
//        if(numArr[i] % 2 === 1){
//            oddArr.push(numArr[i]);
//            sum+= numArr[i];
//        }
//    }
//    console.log(oddArr);
//    return sum;
//}
//
//sumFibs(75025);

//Sum all the prime numbers up to and including the provided number.
//
//A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
//
//The provided number may not be a prime.




//function sumPrimes(num) {
//    let sum = 0;
//    for(let i = 2; i <= num; i++){
//        let currentNum = i;
//        let isPrime = true;
//        for(let j = 2; j < currentNum; j++){
//            if(currentNum % j === 0){
//                isPrime = false;
//            }
//        }
//        if(isPrime === true){
//            sum+= currentNum;
//        }
//    }
//    console.log(sum);
//}
//
//sumPrimes(977);


// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
//
//Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

//function dropElements(arr, func) {
//    let newArr = [];
//    let count = 0;
//    for(let i = 0; i < arr.length; i++){
//        if(func(arr[i])){
//            arr.splice(0, count);
//            console.log(arr);
//            return arr;
//        }else{
//            count++;
//        }
//    }
//    return [];
//}
//
//dropElements([1, 2, 3, 4], function(n) {return n >= 3;});

//Flatten a nested array. You must account for varying levels of nesting.


//function steamrollArray(arr) {
//    let currentArr = [];
//    for(let i = 0 ; i < arr.length; i++){
//        let elem = arr[i];
//        if(Array.isArray(elem)){
//            currentArr = currentArr.concat(steamrollArray(elem));
//        } else {
//            currentArr.push(elem);
//        }
//    }
//    console.log(currentArr);
//    return currentArr;
//}
//
//steamrollArray(['a', ['b']]);

//Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
//
//In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

//function truthCheck(collection, pre) {
//  for(let i = 0; i < collection.length; i++){
//     let currentObj = collection[i];
//      if(!currentObj[pre]){
//          return false;
//      }
//  }
//    
//  return true;
//}
//
//truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

//Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
//
//For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

//function addTogether(a, b) {
//    console.log(b);
//  if((typeof a === 'number') && (typeof b === 'number')){
//      return a+b;
//  } 
//    else if(typeof a === 'number' && typeof b === 'undefined'){
//        console.log('running');
//        return function(num){
//            if(typeof num === 'number')
//            return num + a;
//        }
//    }
//
//}

//console.log(addTogether(2)([3]));

//Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
//
//The range will be an array of two numbers that will not necessarily be in numerical order.
//
//For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

//function smallestCommons(arr) {
//    let range = [];
//    let resultNum = null;
//    arr.sort((a,b) => a-b);
//    
//    for(let i = arr[1]; i >= arr[0]; i--){
//        range.push(i);
//    }
//
//    for(let i = arr[0]; !resultNum; i++){
//        let testNum = i;
//        let result = true;
//        for(let j = range[0]; j >= range[range.length-1]; j--){
//            if(testNum % j !== 0){
//                result = false;
//            }
//        }
//        if(result === true){
//            console.log('result is ' + testNum);
//            return testNum;
//        }
//    }
//}
//
//
//smallestCommons([1, 13]);
//
//Return an English translated sentence of the passed binary string.
//
//The binary string will be space separated.

//function binaryAgent(str) {
//    let biArr = str.split(" ");
//    let wordsArr = [];
//    let binaryDictObj = {
//        '01100001': 'a',
//        '01100010': 'b',
//        '01100011': 'c',
//        '01100100': 'd',
//        '01100101': 'e',
//        '01100110': 'f',
//        '01100111': 'g',
//        '01101000': 'h',
//        '01101001': 'i',
//        '01101010': 'j',
//        '01101011': 'k',
//        '01101100': 'l',
//        '01101101': 'm',
//        '01101110': 'n',
//        '01101111': 'o',
//        '01110000': 'p',	
//        '01110001': 'q',
//        '01110010': 'r',
//        '01110011': 's',
//        '01110100': 't',
//        '01110101': 'u',
//        '01110110': 'v',
//        '01110111': 'w',
//        '01111000': 'x',
//        '01111001': 'y',
//        '01111010': 'z',
//        '01000001': 'A',
//        '01000010': 'B',
//        '01000011': 'C',
//        '01000100': 'D',
//        '01000101': 'E',	
//        '01000110': 'F',	
//        '01000111': 'G',		
//        '01001000': 'H',	
//        '01001001': 'I',	
//        '01001010': 'J',		
//        '01001011': 'K',		
//        '01001100': 'L',	
//        '01001101': 'M',		
//        '01001110': 'N',	
//        '01001111': 'O',	
//        '01010000': 'P',	
//        '01010001': 'Q',		
//        '01010010': 'R',	
//        '01010011': 'S',		
//        '01010100': 'T',
//        '01010101': 'U',	
//        '01010110': 'V',	
//        '01010111': 'W',
//        '01011000': 'X',
//        '01011001': 'Y',
//        '01011010': 'Z',
//        '00111111': '?',
//        '00100111': '\'',
//        '00100000': ' ',
//        '00100001': '!',
//        '00100010': '"'
//    }
//
//    for(let i = 0; i < biArr.length; i++){
//        let currentBiInt = biArr[i];
//        wordsArr.push(binaryDictObj[biArr[i]]);
//    }
//    return wordsArr.join('');
//    
//}
//
//binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

//function uniteUnique(arr) {
//    let newArr = [];
//    let finalArr = [];
//    for(let i = 0; i < arguments.length; i++){
//        newArr = newArr.concat(arguments[i]);
//    }
//    
//    for(let i = 0; i < newArr.length; i++){
//        if(finalArr.indexOf(newArr[i]) === -1){
//            finalArr.push(newArr[i])
//        }
//    }
//        console.log(finalArr);
//}
//
//uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
//
//Return true if the given string is a palindrome. Otherwise, return false.
//
//A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
//
//Note
//You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

//function palindrome(str) {
//    let newStr = str.toLowerCase().replace(/\W|_/ig, '');
//    for(let i = 0; i < newStr.length; i++){
//        if(newStr[i] !== newStr[(newStr.length-1)-i]){
//            return false;
//        }
//    }
//  return true;
//}
//
//
//console.log(palindrome("0_0 (: /-\ :) 0-0"));
//

//Return true if the passed string looks like a valid US phone number.

//
//function telephoneCheck(str) {
//    if(str[0]==='-'){
//        console.log('running');
//        return false;
//    }
//    console.log(str.indexOf('?'));
//    if(str.indexOf('?') !== -1){
//        console.log('running');
//        return false;
//    }
//    if(str[0]=== "(" && str[str.length-1] === ")"){
//        return false;
//    }
//    let regExParth = /\)|\(/g;
//    if(str.match(regExParth) && str.match(regExParth).length % 2 !== 0){
//        console.log('running');
//        return false;
//    }
//    let numStr = str.replace(/\D/g, '');
//    if(numStr[0] === '1'){
//      if(numStr.length === 11){
//          return true;
//      } else {
//          return false;
//      }
//    }
//    if(numStr.length === 10){
//        return true;
//    }
//    
//    return false;
//}
//
//
//console.log(telephoneCheck("1 555-555-5555"));

//Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
//
//The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
//
//The values should be rounded to the nearest whole number. The body being orbited is Earth.
//
//The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.


//function orbitalPeriod(arr) {
//    let GM = 398600.4418;
//    let earthRadius = 6367.4447;
//
//        const getOrb = (altNum) => {
//        let semMajAx = altNum + earthRadius;
//        let semMajAx3 = semMajAx * semMajAx * semMajAx;
//        let semMajAx3OvGM = semMajAx3/GM;
//        let resultSqr = Math.sqrt(semMajAx3OvGM);
//        let orbPerSec = 2 * Math.PI * resultSqr;
//        return orbPerSec.toFixed(0);
//    }
//    
//    for(let i = 0; i < arr.length; i++){
//        let currentObj = arr[i];
//        currentObj.orbitalPeriod = parseInt(getOrb(currentObj.avgAlt));
//        delete currentObj.avgAlt;
//    }
//    console.log(arr);
//    return arr;
//}
//
//orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])
//
//Fill in the object constructor with the following methods below:
//
//getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
//Run the tests to see the expected output for each method.
//
//The methods that take an argument must accept only one argument and it has to be a string.
//
//These methods must be the only available means of interacting with the object.

var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return "";
  };
  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();