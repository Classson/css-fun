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

function spinalCase(str) {
    let wordsArr = str.split(/(?=[A-Z])| |_/g);
    let newStr = wordsArr.join("-").toLocaleLowerCase();
    //let wordsArr = str.split(/ |_/g);
    console.log(newStr);
  
}

spinalCase('ThisIs Spinal tap');