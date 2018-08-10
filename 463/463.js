var grid1 = 
[[0,1,0,0],
[1,1,1,0],
[0,1,0,0],
[1,1,0,0]];

function islandPerimeter(grid){
	var island = 0;
	var neighbours = 0;
	var outerSize = grid.length;
	var innerSize = grid[0].length;

	for(var i=0; i<outerSize; i++){
		for(var j=0; j<innerSize; j++){
			if(grid[i][j] === 1){
				island++;
				if(i < grid.length-1 && grid[i+1][j] === 1){
					neighbours++; // count down neighbours
				} 
				if(j < grid[i].length-1 && grid[i][j+1] === 1) {
					neighbours++; // count right neighbours
                }
            }
        }
    }
    return island * 4 - neighbours * 2;
}

console.log(islandPerimeter(grid1));