// // this is my first js 
// //  console.log("Hello World !");

// // variabel
// let name = "Aan";
// console.log(name);

// // Rule Penamaan Variabel => 1. Jangan memakai reserved keyword 
// // 2. Harus bermakna => 3. Jangan make angka di depan variabel cth : (1name)
// // 4. Jangan ada spasi dan tanda strip(-) => 5. Variabel itu case-sensitive

// // konstanta
// const interestRate = 0.3;
// //interestRate = 1;
// console.log(interestRate);

// //  Primitive Types
// let name = "Aan"; // ini string
// let age = 20; // ini number
// let isApproved = true; // ini boolean -- true / false
// let firstName = undefined;
// let selectedColor = null;

// Dynamic Typing ==> typeof name dst ..... 

// // Object
// let person = {
//   name : "Aan",
//   age : 25
// }
// // Dot Notation
// person.name = "Aan";
// // Bracket Notation
// person["name"] = "Budi";

// console.log(person.name);

// // Array digunakan untuk menyimpan list sesuatu :o

// let selectedColor = ["red", "blue"];

// selectedColor[2]= 1;

// console.log(selectedColor.length);

// Function ==> greet(name) name disini adalah PARAMETER
function greet(name, LastName) {
  console.log('Hello ' + name + ' ' + LastName)
}

// Aan disini adalah ARGUMENT
greet('Aan', 'Faisal');



// Types of Function

function square(number){
  return number*number
}

console.log(square(3));