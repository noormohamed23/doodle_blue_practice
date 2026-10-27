// let campusName = "SA Engineering College";

// function displayCampus() {
//     console.log(campusName);
// }

// displayCampus();


// if (true) {
//     let a = 10;
//     var b = 20;

//     console.log(a);
//     console.log(b);
// }

// console.log(b);
// console.log(a); 


// console.log(a);
// var a = 10;

// console.log(a);


function makeCounter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

let counter = makeCounter();
counter();
counter();
counter();