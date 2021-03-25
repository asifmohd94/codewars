//  https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript
class SmallestIntegerFinder {
    findSmallestInt(args) {
      let min=Number.MAX_VALUE;
      for(let i=0;i<args.length;i++){
        if(args[i]<min){
          min=args[i];
        }
      }
      return min;
    }
  }
