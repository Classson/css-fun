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

//var Person = function(firstAndLast) {
//  // Complete the method below and implement the others similarly
//  this.getFullName = function() {
//    return "";
//  };
//  return firstAndLast;
//};
//
//var bob = new Person('Bob Ross');
//bob.getFullName();

//Write a function sing that returns the lyrics for the song 99 Bottles of Beer as a an array.

//var sing = function () {
//    let arr = [];
//    for(let i = 99; i > 2; i--){
//        arr.push(`${i} bottles of beer on the wall, ${i} bottles of beer.`);
//        arr.push(`Take one down and pass it around, ${i-1} bottles of beer on the wall.`);
//    }
//    arr.push(`2 bottles of beer on the wall, 2 bottles of beer.`, `Take one down and pass it around, 1 bottle of beer on the wall.`, `1 bottle of beer on the wall, 1 bottle of beer.`, `Take one down and pass it around, no more bottles of beer on the wall.`, `No more bottles of beer on the wall, no more bottles of beer.`, `Go to the store and buy some more, 99 bottles of beer on the wall.`);
//    return arr;
//};
//
//let song = sing();
//
//console.log(song[197]);

//Given an integral number, determine if it's a square number:
//
//In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

//const is_square = (num) => {
//    for(let i = 0; i <= num; i++){
//        if(i * i === num){
//            return true;
//        }
//    }
//    return false;
//}
//
//console.log(is_square(1));

//You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

//function getMiddle(s)
//{
//    if(s.length % 2 !== 0){
//        return s[((s.length/2).toFixed(0))-1];
//    }
//    return s[((s.length/2).toFixed(0))-1] + s[((s.length/2).toFixed(0))];
//}
//
//console.log(getMiddle('wioyiw'));

//A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
//
//For example, take 153 (3 digits):
//
//    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
//and 1634 (4 digits):
//
//    1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634
//The Challenge:
//
//Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.

//function narcissistic( value ) {
//    let sum = 0;
//    let numStr = value.toString();
//    for(let i = 0; i < numStr.length; i++){
//        console.log(numStr[i]);
//        sum += Math.pow(numStr[i], numStr.length);
//    }
//    
//    if(value === sum){
//        return true;
//    }
//    return false;
//}
//
//
//console.log(narcissistic(153));

//Write a method that, when given a number, returns the number of factors of that number (including the number itself) that are prime. You may wish to write two helper methods: prime?(n) and factors(n).

//const primes = (num) => {
//    let count = 0;
//    const isFact = (posFact) => {
//        if(num % posFact === 0){
//            return true;
//        }
//        return false;
//    }
//    
//    const isPrime = (posPrime) => {
//        if(posPrime === 2){
//            return true;
//        }
//        for(let i = 2; i < posPrime; i++){
//            if(posPrime % i === 0){
//                return false;
//            }
//            return true;
//        }
//    }
//
//   for(let i = 2; i <= num; i++){
//       if((isFact(i)) && (isPrime(i))){
//           console.log(i);
//           count++;
//       }
//   }
//    return count;
//}
//
//console.log(primes(12));

//Write a method that accepts two strings as arguments. If the second string can be spelled using letters from the first, return an array of the indices of the letters of the second string as they occur in the first (choose the earlier occurrence if a letter occurs more than once). Otherwise, return false. The second string may reuse letters from the first.
//Examples:
//wordplay('substandard', 'bad') => [2, 5, 7]
//wordplay('shadowless', 'dashes') => [3, 2, 0, 1, 7, 0]
//wordplay('cartoon', 'lineograph') => false

//const wordplay = (strOne, strTwo) => {
//    let resultsArr = [];
//    for(let i = 0; i < strTwo.length; i ++){
//        let currentLetter = strTwo[i];
//        if(strOne.indexOf(currentLetter) === -1){
//            return false;
//        } 
//        resultsArr.push(strOne.indexOf(currentLetter));
//    }
//    
//    return resultsArr;
//}
//
//console.log(wordplay('cartoon', 'lineograph'));

//Given a string, remove every vowel if its index is odd.
//
//const noOddVowels = (str) => {
//    let newStr = '';
//    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//    for(let i = 0; i < str.length; i++){
//        if(i % 2 === 0){
//            newStr += str[i];
//        } else {
//            if(vowels.indexOf(str[i]) === -1){
//                newStr += str[i];
//            }
//        }
//    }
//    return newStr;
//}
//
//console.log(noOddVowels("AICOPee")); // => ACPe
//
//Write the method golfScoreCalculator/GolfScoreCalculator which accepts two strings and calculates the golf score of a game. The two arguments can always be assumed to be strings. In Javascript, the length of these two strings will always match.

//function golfScoreCalculator(parList, scoreList){
//    let score = 0;
//    for(let i = 0; i < parList.length; i++){
//        score += scoreList[i] - parList[i];
//    }
//    return score;
//}

//console.log(golfScoreCalculator("453454444344544443", "354445334534445344"));


//Write a program that finds the summation of every number between 1 and num. The number will always be a positive integer greater than 0.

//var summation = function (num) {
//    let sum = 0;
//    for(let i = 1; i <= num; i++){
//        sum += i;
//    }
//    return sum;
//}
//
//console.log(summation(8));


//Write a function called repeatStr which repeats the given string string exactly n times.


//function repeatStr (n, s) {
//    let str = '';
//    for(let i = 0; i <= n; i++){
//        str += s;
//    }
//    
//    return str;
//}

//A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.
//
//He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).
//
//His mother looks out of a window 1.5 meters from the ground.
//
//How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?
//
//Three conditions must be met for a valid experiment:
//Float parameter "h" in meters must be greater than 0
//Float parameter "bounce" must be greater than 0 and less than 1
//Float parameter "window" must be less than h.
//If all three conditions above are fulfilled, return a positive integer, otherwise return -1.
//
//Note: The ball can only be seen if the height of the rebounding ball is stricty greater than the window parameter.
                                                                         
//function bouncingBall(h,  bounce,  window) {
//    let ballAlt = h;
//    let count = 0;
//    if(h <= 0 || bounce >= 1 || bounce <= 0 || window > h){
//      return '-1';
//    }
//    
//    for(let i = 0; ballAlt > window; i++){
//        if(ballAlt > window){
//            count++;
//        }
//        ballAlt = h * bounce;
//        h = ballAlt;
//        console.log(h);
//        if(ballAlt > window){
//            count++;
//        }
//    }
//    if(count === 0){
//        return -1
//    }
//    return count;
//}
//
//console.log(bouncingBall(3, 0.66, 1.5));

//In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

//function nbYear(p0, percent, aug, p) {
//    let year = 0;
//    let pop = p0;
//    for(let i = 0; pop < p; i++){
//        year++;
//        pop += pop * (percent * 0.01);
//        pop += aug;
//    }
//    return year;
//}
//
//console.log(nbYear(1500, 5, 100, 5000));

//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.

//function sumTwoSmallestNumbers(numbers) {  
//    numbers.sort((a,b) => a-b);
//    return numbers[0] + numbers[1];
//};
//
//console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]));

//Given a series of numbers as a string, determine if the number represented by the string is divisible by three.

//function divisibleByThree(str){
//    let numsArr = str.split('');
//    let sum = 0;
//    for(let i = 0; i < numsArr.length; i++){
//      sum += parseInt(numsArr[i]);
//    }
//    if (sum % 3 === 0){
//        return true;
//    }
//    return false;
//}
//
//console.log(divisibleByThree('123'));

//There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!
//
//The function has two input variables:
//
//customers: an array (list in python) of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
//n: a positive integer, the number of checkout tills.

//function queueTime(customers, n) {
//    if(customers.length === 0){
//        return 0;
//    }
//    if(n > customers.length){
//        customers.sort((a,b) => a+b)
//        return customers[0];
//    }
//    let total = 0;
//    let currentTotal = 0;
//    for(let i = 0; i < customers.length; i+=n){
//        currentTotal += customers[i];
//        console.log(i + " is i");
//        console.log(currentTotal + ' is currentTotal');
//        if(currentTotal > total){
//            total = currentTotal;
//        }
//    }
//    return total;
//}
//
//let result = queueTime([1,2,3,4,5], 2);
//console.log(result);


//Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

//function persistence(num) {
//    let strNum = num.toString();
//    let count = 0;
//    if (strNum.length === 1){
//        return count;
//    }
//    count++;
//    let numArr = num.toString().split('');
//    let sum = numArr[0];
//    for(let i = 1; i < numArr.length; i++){
//        sum *= parseInt(numArr[i]);
//    }
//    console.log(sum);
//    if(sum.toString().length === 1){
//        return count;   
//    }
//    if(sum.toString().length > 1){
//        return count += persistence(sum);
//    }
//    
//}
//
//
//console.log(persistence(999));

//In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
//
//The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...
//
//Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm.
//
//You have to write a function printer_error which given a string will output the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
//
//The string has a length greater or equal to one and contains only letters from ato z.
//
//
//function printerError(s) {
//    let correct = 'abcdefghijklm';
//    let errors = 0;
//    for(let i = 0; i < s.length; i++){
//        if(correct.indexOf(s[i]) === -1){
//            errors++;
//        }
//    }
//    return `${errors}/${s.length}`
//}

//function comp(array1, array2){
//  if(!array1 || !array2){
//  return false}
//  if(array1.length !== array2.length){
//    return false;
//  }
//  array1.sort((a,b) => a-b);
//  array2.sort((a,b) => a-b);
//  for(let i = 0; i < array1.length; i++){
//      let squared = array1[i] * array1[i];
//      if(squared !== array2[i]){
//        return false;
//      }
//    }
//    return true;
//}

//You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.
//
//Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

//var number = function(busStops){
//    let count = 0;
//    for(let i = 0; i < busStops.length; i++){
//        count += busStops[i][0];
//        count -= busStops[i][1];
//    }
//    
//    return count;
//}

//You have an array of numbers.
//Your task is to sort ascending odd numbers but even numbers must be on their places.
//
//Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

//function sortArray(array) {
//    let placeHolderArr = [];
//    let oddsArr = [];
//    for(let i = 0; i < array.length; i++){
//        if(array[i] % 2 === 0){
//            placeHolderArr.push(array[i]);
//        } else {
//            placeHolderArr.push("p");
//            oddsArr.push(array[i]);
//        }
//    }
//    oddsArr.sort((a,b) => a-b);
//    for(let i = 0; i < placeHolderArr.length; i++){
//        if(placeHolderArr[i] === 'p'){
//            placeHolderArr[i] = oddsArr[0];
//            oddsArr.shift();
//        }
//    }
//    return placeHolderArr;
//}
//
//console.log(sortArray([]));

//Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

//function duplicateCount(text){
//    let lowerStr = text.toLowerCase();
//    let letterObj = {};
//    let count = 0;
//    for(let i = 0; i < lowerStr.length; i++){
//        if(!letterObj[lowerStr[i]]){
//            letterObj[lowerStr[i]] = 1;
//        } else {
//            letterObj[lowerStr[i]]++;
//        }
//    }
//    for(letter in letterObj){
//        if(letterObj[letter] > 1){
//            count++;
//        }
//    }
//
//    return count;
//}
//
//console.log(duplicateCount("aabbcde"));

//You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block in a direction and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

//function isValidWalk(walk) {
//  if(walk.length !== 10){
//      return false;
//  }
//    let location = 0;
//    for(let i = 0; i < walk.length; i++){
//        switch(walk[i]){
//            case "n" : location ++;
//                break;
//            case "s" : location --;
//                break;
//            case "e" : location ++;
//                break;
//            case "w" : location --;
//        }
//    }
//    if(location === 0){
//        return true;
//    }
//    return false;
//}
//
//console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s', 'e']));

//The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

//var maxSequence = function(arr){
//    let max = 0;
//    for(let i = 0; i < arr.length; i++){
//        let count = -1;
//        for(let j = i; j < arr.length; j++){
//            count++;
//            let sum = 0;
//            for(let k = i; k < arr.length-count; k++){
//                sum += arr[k];
//            }
//            if(sum > max){
//                max = sum;
//            }
//        }
//    }
//    if(max < 0 || (!max)){
//        max = 0;
//    }
//    return max;
//}
//
//console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

//function tribonacci(signature,n){
//    let arr = signature;
//    if(n === 0){
//       return [];
//    }
//    for(let i = 0; i < n-3; i++){
//        arr.push(arr[i] + arr[i+1] + arr[i+2]);
//    }
//    if(n === 1){
//        return [arr[0]];
//    }
//    if(n === 2){
//        return [arr[0], arr[1]];
//    }
//    return arr;
//}
//
//console.log(tribonacci([1,1,1],1));

//Your task is to make function, which returns the sum of a sequence of integers.
//
//The sequence is defined by 3 non-negative values: begin, end, step.
//
//If begin value is greater than the end, function should returns 0
//
//Examples
//
//sequenceSum(2,2,2) === 2
//sequenceSum(2,6,2) === 12 // 2 + 4 + 6
//sequenceSum(1,5,1) === 15 // 1 + 2 + 3 + 4 + 5
//sequenceSum(1,5,3) === 5 // 1 + 4

//const sequenceSum = (begin, end, step) => {
//    let sum = 0;
//    for(let i = begin; i <= end; i+=step){
//        sum += i;
//    }
//    return sum;
//};
//
//console.log(sequenceSum(10,5,1));

//likes [] // must be "no one likes this"
//likes ["Peter"] // must be "Peter likes this"
//likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
//likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
//likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"

//function likes(names) {
//    if(names.length < 1){
//        return "no one likes this";
//    }
//    if(names.length === 1){
//        return `${names[0]} likes this`;
//    }
//    if(names.length === 2){
//        return `${names[0]} and ${names[1]} like this`
//    }
//    if(names.length === 3){
//        return `${names[0]}, ${names[1]} and ${names[2]} like this`
//    }
//    if(names.length > 3){
//        return `${names[0]}, ${names[1]} and ${names.length -2} others like this`
//    }
//}

function to_nato(words) {
    let newStr = '';
	let NATOdict = {
  "A":"Alfa",
  "B"	: "Bravo",
  "C"	: "Charlie",
  "D"	: "Delta",
  "E"	: "Echo",
  "F"	: "Foxtrot",
  "G"	: "Golf",
  "H"	: "Hotel",
  "I"	: "India",
  "J"	: "Juliett",
  "K"	: "Kilo",
  "L"	: "Lima",
  "M"	: "Mike",
  "N"	: "November",
  "O"	: "Oscar",
  "P"	: "Papa",
  "Q"	: "Quebec",
  "R"	: "Romeo",
  "S"	: "Sierra",
  "T"	: "Tango",
  "U"	: "Uniform",
  "V"	: "Victor",
  "W"	: "Whiskey",
  "X"	: "Xray",
  "Y"	: "Yankee",
  "Z"	: "Zulu",
  "-"	: "Dash"
  }
   let upperWords = words.toUpperCase().replace(/ /g, '');
    console.log(upperWords);
    for(let i = 0; i < upperWords.length; i++){
        if(NATOdict[upperWords[i]]){
        newStr+= `${NATOdict[upperWords[i]]} `;}
        else {
            newStr+= `${upperWords[i]} `;
        }
    }
    if(newStr[newStr.length-1] === " "){
        newStr = newStr.slice(0, -1);
    }
    return newStr;
}

console.log(to_nato("If you can, read"));