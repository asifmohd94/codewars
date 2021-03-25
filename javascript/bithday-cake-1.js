// https://www.codewars.com/kata/5805ed25c2799821cb000005/train/javascript
function cake(x, y){
    let ans = 0;
   let arr = y.split("");
  
   for (let i=0;i<arr.length;i++){
     ans += i % 2 == 0 ? arr[i].charCodeAt(0) : arr[i].charCodeAt(0) - 96;
   }
   if(ans>x*0.7){
     return 'Fire!'
   }
   return  'That was close!';
 }