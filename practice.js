// var name = "eisha";
// console.log(name);
// var city = "rahimyarkhan";
// console.log(city);
// let age = "21";
// console.log(age);
// let x = 5;
// let x = 10;
// console.log(x);
// console.log(count);
// var count = 42;
// console.log(a);
// let a = 1;
// const array = [
//     '1',
//     "2",
//     "3"
// ];
// array.push('4');
// console.log(array);

function getScore(score){
     if(score>=90 && score<=100){
        return'A+';
     }
     else if(score>=80 && score <=89){
        return'A';
     }
      else if(score>=70 && score <=79){
        return'B';
     }
      else if(score>=60 && score <=69){
        return'C';
     }
      else if(score>=50 && score <=59){
        return'D';
     }
      else{
        return 'Fail'

      }
}
let result = getScore(78);
console.log(result);