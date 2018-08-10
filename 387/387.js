/**
 * @param {string} s
 * @return {number}
 */
 function firstUniqChar(s){
 	var v = s.split('');
 	v.sort();
 	var collect = [];
 	if(v.length < 1){
 		return -1;
 	}
 	else if(v.length === 1){
 		return 0;
 	}
 	else{
 		for(var i=0; i<v.length; i++){
 			if(i === 0){
 				if(v[0] !== v[1]){
 					collect.push(v[0]);
 				}
 			}
 			else if(i === v.length -1){
 				if(v[v.length-1] !== v[v.length -2]){
 					collect.push(v[v.length -1]);
 				}
 			}
 			else{
 				if((v[i] !== v[i+1]) && (v[i] !== v[i-1])){
 					collect.push(v[i]);
 				}
 			}
 		}
 		if(collect.length === 0){
 			return -1;
 		}
 		for(var j=0; j<collect.length; j++){
 			collect[j] = s.indexOf(collect[j]);
 		}
 		return Math.min.apply(null, collect);
 	}
 };



 console.log(firstUniqChar("cc"));
