// https://www.codewars.com/kata/5f70e4cce10f9e0001c8995a/train/javascript
function solve(stones) {
    let count=0;
    let arr = stones.split("");
    for(let i=0;i<stones.length-1;i++){
      if(arr[i]==arr[i+1]){
        count++;
      }
    }
    return count;
  }