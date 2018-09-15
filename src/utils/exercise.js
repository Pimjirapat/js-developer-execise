
//----------A----------//
const sum = function (...numbers) {
  console.log(numbers)
  var result=0

  for (var i of numbers) {
    result +=i
    
  }

    return result;
}


//----------B----------//
const insertData = function([...array], char) {
  array.push(char)
    return array
}


//----------C----------//
const fizzBuzz = function (n) {

  if (typeof n === 'number' && n % 5 === 0 && n % 3 === 0) {
    return "FizzBuzz";
  }
 
  if(typeof n === 'number' && n % 3 === 0) {
      return "Fizz";
  }
  
  if(typeof n === 'number' && n % 5 === 0) {
      return "Buzz";
  }

  return n;
}
 
   
//----------D----------//
const isPrime = function (n)
   {
      
    if(typeof n !== 'number' || n <= 1 || n % 1 !== 0){
       return false;
        }
    for(var i = 2; i <= Math.sqrt(n); i += 1){
     if(n % i === 0){

       return false;
           }
        }
       return true;
}  
   

//----------E----------//
const calculator = function (n1, n2) {
  return ({
    add: function () { return n1 + n2 },
    sub: function () { return n1 - n2 },
    div: function () { return n1 / n2 },
    multi: function () { return n1 * n2 }
  })
} 




module.exports = {
    sum,
    isPrime,
    insertData,
    fizzBuzz,
    calculator
}