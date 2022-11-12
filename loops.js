const numbers = [67, 23, 12, 89, 56];

var i=10
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
console.log("---------------------------------------------")
console.log("value of variable i is: "+ i)
console.log("---------------------------------------------")


let x=10

for (let x = 0; x < numbers.length; x++) {
    console.log(numbers[x]);
}

console.log("---------------------------------------------")
console.log("value of variable x is: "+ x)
console.log("---------------------------------------------")

// using for in  loop
console.log("for in loop ---------------------------------------------")

for(let num in numbers){
    console.log(numbers[num]);
}

console.log("---------------------------------------------")
console.log("for of loop ---------------------------------------------")


// using for of  loop
for(let num of numbers){
    console.log(num);
}


console.log("---------------------------------------------")


//using for each
 printArrayElements= (value)=>
    console.log(value);


numbers.forEach(printArrayElements)

console.log("---------------------------------------------")

// using map function
 doubleArrayElements= (value)=>
    console.log(value*2);


numbers.map(doubleArrayElements);

console.log("---------------------------------------------")

// using filter: 


numbers.filter(value=>value%2==0).forEach(printArrayElements)




// while loop
let j=0
while (j < 10) {
    console.log("The value of j now is:", j);
    j++;
  }

  console.log("outside the loop");
  console.log("The value of j now is:", j);


//do while loop
  let result = '';
  let k = 0;
  
  do {
   k = k + 1;
  result = result + ' ' + k;
} while (k < 5);

console.log(result);