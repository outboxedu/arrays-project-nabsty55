


/*I will create 3 arrays, one to store prime numbers*/

//create a fuction to check for prime numbers called primelogger
/*const primelogger = (num) => {
  var arrayPrimes = [];//create an array, arrayPrimes to store the prime numbers
  for( var num = 2; num < 100; num++)
   {
     count = 0;
     for (i = 2; i <= num/2; i++)
     {
     if(num%i === 0)     {
         count++;
       arrayPrimes.push(num);
        }
     }
     if(count == 0 && num != 1 )
     {
       arrayPrimes.push(" prime");
     }
   }
   //arrayPrimes.push(num);
   return arrayPrimes;
}


//create a function to print even and odd next
const logEvens = (startNum) =>{
  for (startNum = 1; startNum <=100; startNum++){
  if (startNum%2===0){
    return true;
  }else{
    return false;
  }
}
  return arrayEvens;
}

const fizzBuzz = (startingNum) => {
  var arrayFizzBuzz = [];
  while (startingNum <= 100){
    if (startingNum%3===0 && startingNum%5===0){
      arrayFizzBuzz.push(startingNum +" FizzBuzz");
    }else if (startingNum%3===0) {
      arrayFizzBuzz.push(startingNum +" Fizz");
    }else if (startingNum%5===0){
      arrayFizzBuzz.push(startingNum +" Buzz");
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

const numHelper = (array1, array2, array3)=>{
  arrayNumHelper = [];
  for (let x= 0; x<100; x++){
    arrayNumHelper.push(array1[x]+ array2[x] +array3[x]);
  }
  return arrayNumHelper;
}
console.log(numHelper(primelogger, logEvens, fizzBuzz));*/

const main = (y) => {
 for (c=0; c<y+1; c++) {
   var types = [];


   if (odd(c)==true) {
     types.push("odd")
   } else {
     types.push("even")
   }
   if (prime(c)==true) {
     types.push("prime")
   }

   if (fizz(c)==true){
     types.push("fizz")
   }
   if (fizzbuzz(c)==true){
     types.push("fizzBuzz")
   }
   if (buzz(c)==true){
     types.push("buzz")
   }
   console.log(c, types);
}

}

var odd = (n) => {
 if (n%2 == 0) {
   return false
 } else{
   return true
 }
}

var prime = (n) => {
    for (var x = 2; x < n; x++) {
      // console.log(x);
      if (n%x==0) {
        return false;
        }
   }
   if (n>1){
     return true;
}};
var fizz=(n)=>{
  if(n%3==0 && n%5!=0){
    return true
  }
}

var buzz=(n)=>{
  if(n%5==0 && n%3!=0){
    return true
  }
}

var fizzbuzz=(n)=>{
  if(n%5==0 && n%3==0&& n!==0){
    return true
  }
}



main(100);
