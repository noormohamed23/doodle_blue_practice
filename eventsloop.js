// console.log("A")
// setTimeout(()=> console.log("B"), 0);
// Promise.resolve().then(()=> console.log("C"));
// console.log("D");


// console.log("start");
// setTimeout(()=>console.log("timer"),0);
// Promise.resolve().then(()=>console.log("promise"));
// console.log("finish");


// const stu = {name:"maya",age:20};
// const jsonText = JSON.stringify(stu);
// console.log(jsonText);



// const jsonText = '{"name":"maya","age":20}';
// const stu = JSON.parse(jsonText);
// console.log(stu);


localStorage.setItem("theme","dark");
const savedTheme = localStorage.getItem("theme");
console.log(savedTheme);
sessionStorage.setItem("step","2");
const savedstep = sessionStorage.getItem("step");