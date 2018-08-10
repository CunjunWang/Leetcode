function reverseWords(s){
	var wordArray = s.split(" ");
	// console.log(wordArray);
	for(var i=0; i<wordArray.length; i++){
		var chars = wordArray[i].split("");
		var reversedChars = chars.reverse();
		var reversedWord = reversedChars.join("");
		wordArray[i] = reversedWord;
	}
	var reversedSentense = wordArray.join(" ");
	return reversedSentense;
}

var s = "Let's take Leetcode contest";
console.log(reverseWords(s));