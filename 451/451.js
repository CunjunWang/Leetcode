/**
 * @param {string} s
 * @return {string}
 */
 function frequencySort(s) {
 	var collect = {};
 	var v = '';
 	for(var i=0; i<s.length; i++){
 		if(!collect.hasOwnProperty(s[i])){
 			collect[s[i]] = 1;
 		}
 		else{
 			collect[s[i]]++;
 		}
 	}
 	var sortable = [];
 	for (var thing in collect){
 		sortable.push([thing,collect[thing]]);
 	}
 	sortable.sort(function(a, b) {
 		return b[1] - a[1];
 	})
 	for(var i=0; i<sortable.length; i++){
 		var count = sortable[i][1];
 		while(count>0){
 			v = v + sortable[i][0];
 			count--;
 		}
 	}
 	return v;
 }

 console.log(frequencySort("aaadasdrjksdafljasfbgfbasdfgahgfuihwfbasklglg"));