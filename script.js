// Question-1. -- create the example for logical operators?
// Answer-
let a = 10;
let b = 20;
let c = 30;

//AND operator (&&)
console.log((a>b && a>c));

  // OR operator (||)
console.log((c>b || a>c)); 

// Not operator (!=)  
console.log((a!=b));          

//Question-5. -- Take input from user and find the odd and even number?
// Answer-
let num = prompt("enter a number here :");
num = Number(num);
let result = (num%2==0);
console.log("is enter number even ?"+result);