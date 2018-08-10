var fizzBuzz = function(n){
	var toReturn = [];
	for(var i=1; i<=n; i++){
		if(i % 3 === 0 && i % 5 !== 0){
			toReturn.push("Fizz");
		}
		else if(i % 3 !== 0 && i % 5 === 0){
			toReturn.push("Buzz");
		}
		else if(i % 3 === 0 && i % 5 === 0){
			toReturn.push("FizzBuzz");
		}
		else{
			toReturn.push(i.toString());
		}
	}
	return toReturn;
};

console.log(fizzBuzz(30));