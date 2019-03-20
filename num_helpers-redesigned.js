
//main function to check all numbers for even, odd, prime, buzz, fizz, and fizzbuzz
const main = (y) => {
//create variables to keep count for each number group.
  var countForOdd=0;
  var countForEven=0;
  var countForFizz=0;
  var countForBuzz=0;
  var countForFizzBuzz=0;
  var countForPrime=0;

 for (c=0; c<y+1; c++) {

   var types = [];

   if (odd(c)==true) {
     types.push("odd")
     countForOdd++;

   } else {
     types.push("even")
     countForEven++;
   }
   if (prime(c)==true) {
     types.push("prime")
     countForPrime++;
   }

   if (fizz(c)==true){
     types.push("fizz")
     countForFizz++
   }
   if (fizzbuzz(c)==true){
     types.push("fizzBuzz")
     countForFizzBuzz++;
   }
   if (buzz(c)==true){
     types.push("buzz")
     countForBuzz++;
   }
   console.log(c, types);

}
console.log("_______________________________________________________________");
console.log("There are "+ countForOdd+ " odd numbers,"+countForEven+ " even numbers,"+countForFizz+" numbers for fizz,"+ countForBuzz+" numbers for buzz,"+countForFizzBuzz+" numbers for fizzbuzz, and "+countForPrime+" numbers for prime.");

}
//function to check whether number is odd or even
var odd = (n) => {
 if (n%2 == 0) {
   return false
 } else{
   return true

 }
}
//function to check whether a number is prime
var prime = (n) => {
    for (var x = 2; x < n; x++) {
      // console.log(x);
      if (n%x==0) {
        return false;
        }
   }
   if (n>1){
     return true;
   }

};
//function to check whether number is a factor of 3
var fizz=(n)=>{
  if(n%3==0 && n%5!=0){
    return true
  }
}
//function to check whether number is a factor of 5
var buzz=(n)=>{
  if(n%5==0 && n%3!=0){
    return true
  }
}
//function to check whether number is a factor of 5 and 3

var fizzbuzz=(n)=>{
  if(n%5==0 && n%3==0&& n!==0){
    return true
  }
}


//calling main function with variable of 100 print the array
main(100);
console.log("________________________________________________");
