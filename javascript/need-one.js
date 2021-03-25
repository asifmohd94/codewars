// https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/javascript
function check(a, x) {
    // your code here
    let bol=false;
      for(let i of a){
        if(i==x){
          bol=true;
          break;
        }
      }
      return bol;
    }