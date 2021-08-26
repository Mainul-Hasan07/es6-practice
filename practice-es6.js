const firstName = 'Mainul';
const lastName = 'Hasan';
let eggPrice = 45;
eggPrice = 32;
const numbers = [2,3,4,5,6,7];
let array = [];
for(const number of numbers){
    array.push(number);
}
// console.log(array);
array = [ 2,4,6];


// 2. Template String
const product = {
    name : 'Phone',
    color : 'Balck',
    company : 'Samsung',
    price : 18000
}
const fullName = `My Name is : ${firstName} ${lastName}. My phone name is ${product.company} and price is ${product.price}`;
// console.log(fullName);

// 3-1. Arrow Function
const division = x => x / 5;
// console.log(division(955));


//3-2. Arrow Function with two parameter
const multiply = (x,y) => (x + 2) * (y + 2);
// console.log(multiply(3,23));


// 3-3. Arrow Function with Three parameter
const multiplication = (x,y,z) => x * y * z;
// console.log(multiplication(20,3,4));


// 3-4. Arrow Function with two parameter and Multiple Line
const multiplyTwoInput = (x,y) => {
    const x1 = x + 2;
    const y1 = y + 2;
    const result = x1 * y1;
    return result;
}
// console.log(multiplyTwoInput(3,2));


// 4. javascript function declaration vs arrow function 


// 4-5. Let , var and Const
/*  https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/ */

/* const greeting = {
    message: "say Hi",
    times: 4
}
greeting.message = "say Hello instead"; */

// console.log(greeting);


// 5. map in array
const nums = [2,3,4,5,12,13,14,15,91,99,0]
const array5Times = nums.map(num => num * 5);
// console.log(array5Times);


// 6. Find out odd number with Filter in array
const oddNumber = nums.filter( num => num % 2 != 0)
// console.log(oddNumber);


// 7. Find in array 
const products = [
    {name : 'phone', color: 'black', price: 18000},
    {name : 'Earphone', color: 'Bluish', price: 300},
    {name : 'laptop', color: 'silver', price: 64000},
    {name : 'Fan', color: 'Black and Green', price: 800}
];
const expensive = products.find(product => product.price > 5000)
// console.log(expensive);



// 8. Destructuring in Object
const {name,color} = product;
// console.log(name,color);


// 9. Destructuring in Array
const [one,two,three] = products;
// console.log(three,one);


// 10. Default value Parameter
function add(num1, num2, num3 = 7){
    const result = num1 + num2 + num3;
    return result;
}
// console.log(add(23,7));


// 11. nested Object
const company = {name: 'GP',
 ceo: {id: 1, name: 'ajmol', food: 'fuchka'},
  web: {
      work: 'website development',
       employee: 22,
        framework: 'react',
    
    tech: {
        first: 'html',
        second: 'css',
        third: 'js'
    }
}
};
const {tech} = company.web;
// console.log([tech]);

