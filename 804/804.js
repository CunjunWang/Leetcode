/**
 * @param {string[]} words
 * @return {number}
 */

// Example:
// Input: words = ["gin", "zen", "gig", "msg"]
// Output: 2
// Explanation: 
// The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."

// There are 2 different transformations, "--...-." and "--...--.".

const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
const words = ["gin", "zen", "gig", "msg"];

const uniqueMorseRepresentations = function(words) {
    let morseArr = [];
    for (const word of words){
        let morseCode = "";
        for(const char of word) {
            morseCode += morse[char.charCodeAt() - "a".charCodeAt()];
        }
        morseArr.push(morseCode);
    }

    return morseArr.filter(onlyUnique).length;
};

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

console.log(uniqueMorseRepresentations(words));

