/**
 * @param {string[]} strs
 * @return {string}
 */
 function longestCommonPrefix(strs) {
 	if(strs.length === 0 || !strs){
 		return "";
 	}

 	let str = strs[0];
 	let i=1;

 	while(i<strs.length){
 		while(strs[i].indexOf(str) !== -1){
 			str = str.substr(0, str.len-1);
 		}
 		i++;
 	}

 	return str;
 }

 let strs = ["flower","flow","flight"];

 console.log(longestCommonPrefix(strs));