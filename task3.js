// let book = {
//     title: "JavaScript Basics",
//     author: "John",
//     price: 500
// };

// book.price = 600;

// console.log(book);


// let user = {
//     name: "Sam",
//     age: 21,
//     address: {
//         city: "Chennai",
//         state: "Tamil Nadu"
//     }
// };

// console.log(user.address.city);



// let products = [
//     { name: "Laptop", price: 50000 },
//     { name: "Mobile", price: 20000 },
//     { name: "Headphones", price: 2000 }
// ];

// for (let product of products) {
//     console.log(product.name);
// }


// let student = {
//     name: "noor mohamed M",
//     age: 21,
//     department: "CSE"
// };

// let { name, age } = student;

// console.log(name);
// console.log(age);


// let arr1 = [10, 20, 30];
// let arr2 = [40, 50, 60];

// let copy = [...arr1];
// let combined = [...arr1, ...arr2];

// console.log(copy);
// console.log(combined);


// function add(...numbers) {
//     return numbers.reduce((sum, num) => sum + num, 0);
// }

// console.log(add(10, 20));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15, 20));


let user = {
    name: "noor mohamed"
};

let city = user.address?.city ?? "City not available";

console.log(city);