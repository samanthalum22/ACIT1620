function add(a,b){
    return a + b;
}
console.log(add(1,2));

//arrow function
let add_arrow = (a,b) => a + b;

let multiply = (a,b) => {
    console.log("multiply"+ a + " and "+ b);
    return a * b;
}
console.log(multiply(4,5));

const square = x => x * x;
console.log(square(6)); //36

const greet = () => "Hello World";
console.log(greet());



