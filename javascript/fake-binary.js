// https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript

function fakeBin(x){
    let ans='';
    for(let i=0;i<x.length;i++){
      if(x[i]<5){
        ans+=0
      }else if(x[i]>=5){
        ans+=1
      }
    }  
      return ans;
    }