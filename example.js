const reverseString = (str) => {
      let reversedString = "";

      for(let lastIndex = str.length -1; lastIndex >= 0; lastIndex--) {
        reversedString += str[lastIndex];
      }

      return reversedString;
}


reverseString('StrangerThings');

const isFunction = typeof reverseString === 'function';
const expectedReturn =  'tac';
const expectedReturnType = typeof reverseString('cat');

console.log(`We expect reverseString to be a function ${isFunction}`);
console.log(`When invoked "cat" we expect "tac" to be returned ${expectedReturn}`);
console.log(`We expect reverseString to return a string ${expectedReturnType}`);


