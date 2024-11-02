let x;          // Now x is undefined
let number = 5;          // Now x is a Number
let name = "John";     // Now x is a String
let y = 123e5;  // Exponential value (123 * 10^5)
let z = 123e-5; // Exponential value (123 * 10^-5)
let b = BigInt("123456789012345678901234567890"); // BigInt value
let isLoggedIn = false;
const car = ["bmw", "volvo", "audi"];  // Array of car brands
const person = { firstName: "Khaja", lastName: "Moinuddin", age: 24 };  // Object with personal details

console.table([x, number, name , y, z, b, isLoggedIn, car, person]);

// to check the typeof
console.log( typeof x)
console.log( typeof number)
console.log( typeof name)
console.log( typeof y)
console.log( typeof b)
console.log( typeof isLoggedIn)
console.log( typeof car)
console.log( typeof person)

console.table([typeof x , typeof number ,typeof name ,typeof y, typeof b , typeof isLoggedIn ,typeof car ,typeof person])

