
// localStorage.setItem("favouriteColour","blue, green");
// const savedTheme = localStorage.getItem("theme");
// console.log(savedTheme);
// sessionStorage.setItem("step","2");
// const savedstep = sessionStorage.getItem("step");




const book = [ 'Harry Potter', 'The Alchemist', 'Wings of Fire' ];
const jsonText = JSON.stringify(book);
console.log(jsonText);
localStorage.setItem("books",jsonText);
const savedBooks = localStorage.getItem("books");
console.log(savedBooks);