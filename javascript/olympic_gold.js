//  https://www.codewars.com/kata/57d06663eca260fe630001cc/train/javascript
function olympicRing(a){
    let len = a.length;
    let count=0;
    for(let c of a.split("")){
      if(c=='a'||c=='b'||c=='d'||c=='e'||c=='g'||c=='o'||c=='p'||c=='q'||c=='r'){
        count++;
      }
      if(c=='A'||c=='D'||c=='O'||c=='P'||c=='Q'||c=='R'){
        count++;
      }
      if(c=='B'){
        count=count+2;
      }
    }
    let ans = parseInt(count/2);
    if(ans<=1) return "Not even a medal!";
    else if(ans==2) return "Bronze!";
    else if(ans==3) return "Silver!";
    return "Gold!";
  }