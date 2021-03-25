//https://www.codewars.com/kata/56b29582461215098d00000f/train/javascript
function pipeFix(numbers){
    let x=0;
       var arr = new Array();
        for(let i=numbers[0];i<=numbers[numbers.length-1];i++,x++){
            arr.push(i);
        }
     return arr;
   }