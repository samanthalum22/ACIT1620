//pass by value
//access/ modify arrays
//change values array
// push, pop

//let numbers = new Array(1,2,3,4,5);
//console.log(numbers); // prints [1,2,3,4,5,]

//let values = new Array(5);
//console.log(values); //

//let arr = Array.of(5); //when creating one element use this
//console.log(arr); //prints [5]

let arr = [1,2,3];
arr.push(4);
console.log(arr); //prints [1,2,3,4]

arr.pop();
console.log(arr); //prints [1,2,3]

arr.unshift(0); //if u want to add smt to the beginning
console.log(arr); //prints [0,1,2,3]

arr.shift(); //removes the first element by defult
console.log(arr); //prints [1,2,3]

console.log(arr.indexOf(7)); //returns -1 (defualt of not found)
console.log(arr.IndexOf(2)); //returns 1
console.log(arr.lastIndexOf(2));

console.log(arr.includes(1)); //returns true 
console.log(arr.includes(10)); //returns false 

arr.slice(2,1,10,20); //prints [1,2,10,20]
arr.slice(2,0,10,20); //prints [1,2,10,20,3]
console.log(arr);

let sliced = arr.slice(1,4); // [1,10,20] (last value is exclusive)
console.log(sliced); 

let arr1 = [1,2,3];
let arr2 = [4,5,6];

let combined = arr1.concat(arr2);
console.log(combined); // [1,2,3,4,5,6]

let words= ["hello","world"];
console.log(words.join(" "))// "hello world"

let sentence = "javascript is fun";
let wordsArray = sentence.split(" ") // ["javascript", "is", "fun"]
console.log(wordsArray);








