
const primelogger = (num) => {
  var arrayPrimes = [];
  for( var num = 2; num < 100; num++)
   {
     count = 0;
     for (i = 2; i <= num/2; i++)
     {
     if(num%i === 0)
     {
         count++;
       console.log(num);
   }
     }
     if(count == 0 && num != 1 )
     {
       arrayPrimes.push(num + "prime");
     }
   }
   arrayPrimes.push(num);
   return arrayPrimes
}


const logEvens = (startNum) =>{
  var arrayEvens = [];
for (startNum = 1; startNum <=100; startNum++){
  if (startNum%2===0){
    arrayEvens.push((startNum + "even"));
  }else{
    arrayEvens.push((startNum + "odd"));
  }
}
  return arrayEvens;
}

const fizzBuzz = (startingNum) => {
  var arrayFizzBuzz = [];
  while (startingNum <= 100){
    if (startingNum%3===0 && startingNum%5===0){
      arrayFizzBuzz.push(startingNum +"FizzBuzz");
    }else if (startingNum%3===0) {
      arrayFizzBuzz.push(startingNum +"Fizz");
    }else if (startingNum%5===0){
      arrayFizzBuzz.push(startingNum +"Buzz");
    }else{
      arrayFizzBuzz.push(startingNum);
    }
    startingNum ++;
  }
  return arrayFizzBuzz;
}
console.log(fizzBuzz(1));
console.log(logEvens(1));
console.log(primelogger(1));
console.log("_____________________________________________________________");

/*const numHelper = (){

}*/
