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

function smallestCommons(arr) {
    let range = [];
    let resultNum = null;
    arr.sort((a,b) => a-b);
    
    for(let i = arr[0]; i <= arr[1]; i++){
        range.push(i);
    }

    for(let i = arr[0]; !resultNum; i++){
        let testNum = i;
        let result = true;
        for(let j = range[0]; j <= range[range.length-1]; j++){
            if(testNum % j !== 0){
                result = false;
            }
        }
        if(result === true){
            return testNum;
        }
    }
}

console.log(smallestCommons([1, 13]));