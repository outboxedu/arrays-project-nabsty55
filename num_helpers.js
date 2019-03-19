
const primelogger = (num) => {
  for( var num = 2; num < 100; num++)
   {
     count = 0;
     for (i = 2; i <= num/2; i++)
     {
     if(num%i === 0)
     {
         count++;
       break;
   }
     }
     if(count == 0 && num != 1 )
     {
       console.log(num + "prime");
     }
   }
   console.log(num);
}


const logEvens = (startNum) =>{
for (startNum = 1; startNum <=100; startNum++){
  if (startNum%2===0){
    console.log(startNum + "even");
  }else{
    console.log(startNum + "odd");
  }
}
}

const fizzBuzz = (startingNum) => {
  while (startingNum <= 100){
    if (startingNum%3===0 && startingNum%5===0){
      console.log(startingNum +"FizzBuzz");
    }else if (startingNum%3===0) {
      console.log(startingNum +"Fizz");
    }else if (startingNum%5===0){
      console.log(startingNum +"Buzz");
    }else{
      console.log(startingNum);
    }
    startingNum ++;
  }
}
console.log(fizzBuzz(1));
console.log(logEvens(1));
console.log(primelogger(1));
console.log("_____________________________________________________________");
