function findWords(words){
	var toReturn = [];
	var row1 = ["q","Q","w","W","e","E","r",
	"R","t","T","y","Y","u","U","i","I","o","O","p","P"];
	var row2 = ["a","A","s","S","d","D","f","F","g","G","h","H","j","J",
	"k","K","l","L"];
	var row3 = ["z","Z","x","X","c","C","v","V","b","B","n","N","m","M"];
	for(var word of words){
		var wordCopy = word;
		for(var i=0; i<wordCopy.length; i++){
			if(row1.includes(wordCopy[i])){
				wordCopy = wordCopy.replace(wordCopy[i],1);
			}
			else if(row2.includes(wordCopy[i])){
				wordCopy = wordCopy.replace(wordCopy[i],2);
			}
			else{
				wordCopy = wordCopy.replace(wordCopy[i],3);
			}
		}
		wordCopy = wordCopy.split("");
		wordCopy = wordCopy.sort();
		if(wordCopy[0] === wordCopy[wordCopy.length-1]){
			toReturn.push(word);
		}
	}
	return toReturn;
}

var words = ["Hello", "Alaska", "Dad", "Peace"];
console.log(findWords(words));
