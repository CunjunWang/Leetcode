// Given two sentences words1, words2 (each represented as an array of strings), 
// and a list of similar word pairs pairs, determine if two sentences are similar.

// For example, "great acting skills" and "fine drama talent" are similar, if the 
// similar word pairs are pairs = [["great", "fine"], ["acting","drama"], 
// ["skills","talent"]].

// Note that the similarity relation is not transitive. For example, 
// if "great" and "fine" are similar, and "fine" and "good" are similar, 
// "great" and "good" are not necessarily similar.

// However, similarity is symmetric. For example, "great" and "fine" being
// similar is the same as "fine" and "great" being similar.

// Also, a word is always similar with itself. For example, the sentences 
// words1 = ["great"], words2 = ["great"], pairs = [] are similar, even though 
// there are no specified similar word pairs.

// Finally, sentences can only be similar if they have the same number of words.
// So a sentence like words1 = ["great"] can never be similar to 
// words2 = ["doubleplus","good"].

// Note:
// The length of words1 and words2 will not exceed 1000.
// The length of pairs will not exceed 2000.
// The length of each pairs[i] will be 2.
// The length of each words[i] and pairs[i][j] will be in the range [1, 20].

function areSentencesSimilar(words1, words2, pairs) {
    if(words1.length !== words2.length){
        return false;
    }
    for(var i =0; i<words1.length; i++){
        if(!isSimilar(words1[i], words2[i], pairs)){
            return false;
        }
    }
    return true;
}

function isSimilar(word1, word2, pairs){
    // console.log(word1, word2, pairs);
    if(word1 === word2) {
        return true;
    } else {
        for (pair in pairs) {
            if([word1, word2].equals(pairs[pair]) || [word2, word1].equals(pairs[pair])){
                return true;
            }
        }
        return false;
    }
}

Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l = this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});

var words1 = ["great","acting","skills"];
var words2 = ["fine","drama","talent"];
var pairs = [["great","fine"],["drama","acting"],["skills","talent"]];

console.log(areSentencesSimilar(words1, words2, pairs));


