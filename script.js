function mincost(arr)
{ 
//write your code here
// return the min cost
  arr.sort((a, b) => a - b);
	let totalCost = 0;
	 while (arr.length > 1) {
		 const firstRope = arr.shift();
        const secondRope = arr.shift();
		 const combinedLength = firstRope + secondRope;
        arr.push(combinedLength);
		 totalCost += combinedLength;
		 arr.sort((a, b) => a - b);
		  }
    
    return totalCost;
}

module.exports=mincost;
