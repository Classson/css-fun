//Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
//
//For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.
//
//function whatIsInAName(collection, source) {
//  // What's in a name?
//  let arr = [];
//  // Only change code below this line
//    let sourceKeys = Object.keys(source);
//    
//    for(let i = 0; i < sourceKeys.length; i++){
//        let currentSourceKey = sourceKeys[i];
//        let currentSourceValue = source[currentSourceKey];
//        let count = 0;
//        
//        for(let collectionKey in collection){
//            let currentObj = collection[collectionKey];
//            if (currentObj.hasOwnProperty(currentSourceKey) && currentObj[currentSourceKey] === source[currentSourceKey]){
//                console.log(currentSourceKey);
//                count++;
//            }
//        }
//        console.log(count);
//        
//    }
//
//  // Only change code above this line
//    console.log(arr);
//    return arr;
//}



function whatIsInAName(collection, source){
    let arr = [];
    
    for(let i = 0; i < collection.length; i++){
        let currentObj = collection[i];
        
        let sourceKeys = Object.keys(source);
        let count = 0;
    
        for(let i = 0; i < sourceKeys.length; i++){
            let currentSourceKey = sourceKeys[i];
            let currentSourceValue = source[currentSourceKey];
            
            
            if(currentObj.hasOwnProperty(currentSourceKey) && currentObj[currentSourceKey] === source[currentSourceKey]){
                count++;
            }
        }
        
        if(count === sourceKeys.length){
            arr.push(currentObj);
        }
    }
    console.log(arr);
    return arr;
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 });

//should return [{ "apple": 1, "bat": 2, "cookie": 2 }].