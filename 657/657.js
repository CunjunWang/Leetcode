/**
 * @param {string} moves
 * @return {boolean}
 */
function judgeCircle(moves) {
	var leftCount = 0;
	var rightCount = 0;
	var upCount = 0;
	var downCount = 0;
	for(var i=0; i<moves.length; i++){
		if(moves[i] === "L"){
			leftCount++;
		}
		else if(moves[i] === "R"){
			rightCount++;
		}
		else if(moves[i] === "U"){
			upCount++;
		}
		else{
			downCount++;
		}
	}
	if((leftCount !== rightCount) || (upCount !== downCount)){
		return false;
	}
	else{
		return true;
	}
}

var moves1 = ["L","L","R","R"];
var moves2 = ["U","D","L","R"];
console.log(judgeCircle(moves2));