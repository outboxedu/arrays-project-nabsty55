
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
