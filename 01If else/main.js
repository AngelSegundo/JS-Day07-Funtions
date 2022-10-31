
//------------------------------------------------------------------------------------------------------//
//--- 01 ---//
// let res = 0
// function evenOdd(num) {
//     if (isNaN(num)) {
//         return res = "Number is needed";
//     } else
//         if (num % 2 == 0) {
//             return res = "even"
//         } else
//             if (num % 2 !== 0) {
//                 return res = "odd"
//             }
// }

// let num = prompt("Dime un número")
// console.log(evenOdd(num));

//------------------------------------------------------------------------------------------------------//
//--- 02 ---//

// function largest(num1, num2) {
//     if (isNaN(num1) || isNaN(num2)) {
//         alert("Number is needed")
//         return
//     } else
//         if (num1 > num2) {
//             console.log("The largest number is ", num1);
//             return
//         } else
//             if (num1 < num2) {
//                 console.log("The largest number is ", num2);
//                 return
//             } else {
//                 console.log("The numbers are equal !!!");
//                 return
//             }
// }

// let firstNum = prompt("Let's compare numbers. What is the first number?") * 1
// let secondNum = prompt("And the second?") * 1
// largest(firstNum, secondNum)

//------------------------------------------------------------------------------------------------------//
//--- 03 ---//
// let sideA = prompt("What kind of triangle it is:\n\nTell me how long the first side is")
// let sideB = prompt("Now the second")
// let sideC = prompt("and finally the third one")

// let triangule = ""
// function type(num1, num2, num3) {

//     if (num1 == num2 && num2 == num3) {
//         //console.log("equilateral");
//         triangule = "equilateral"
//         return triangule
//     } else
//         if (num1 !== num2 && num1 !== num3 && num2 !== num3) {
//             //console.log("scalene");
//             triangule = "scalene"
//             return triangule
//         } else
//             // console.log("isosceles");
//             triangule = "isosceles"
//     return triangule
// }

// document.write("The triangule is:<br>", type(sideA, sideB, sideC))


//------------------------------------------------------------------------------------------------------//
//--- 04 ---//

// function isInRange(num, star, end) {
//     if (num > star && num < end) {
//         return "True"
//     } else {
//         return "False"
//     }

// }
// console.log(isInRange(4, 1, 10))

//------------------------------------------------------------------------------------------------------//
//--- 05 ---//

// function evalOperation(num1, num2, operation) {
//     if (operation === "add") {
//         let resoult = num1 + num2
//         document.write(`${resoult}  ( ${num1} + ${num2} )`);
//         return
//     } else
//         if (operation === "subtract") {
//             let resoult = num1 - num2
//             document.write(`${resoult}  ( ${num1} - ${num2} )`);
//             return
//         } else
//             if (operation === "multiply") {
//                 let resoult = num1 * num2
//                 document.write(`${resoult}  ( ${num1} * ${num2} )`);
//                 return
//             } else
//                 if (operation === "divide") {
//                     let resoult = num1 / num2
//                     document.write(`${resoult}  ( ${num1} / ${num2} )`);
//                     return
//                 } if (operation === "modulus") {
//                     let resoult = num1 % num2
//                     document.write(`${resoult}  ( ${num1} % ${num2} )`);
//                     return
//                 } else {
//         document.write("Invalid operation")
//     }
// }

// evalOperation(2, 3, "modulus")

//------------------------------------------------------------------------------------------------------//
//--- 06 ---//

// function isLeapYear(year) {
//     if (year % 4 === 0 && year % 100 !== 0) {
//         return document.write(`${year} is a leap year`);
//     } else {
//         return document.write(`${year} is not leap year`)
//     }
// }

// isLeapYear(2004)

//------------------------------------------------------------------------------------------------------//
//--- 07 ---//

function numberOfDay(year, month) {
    let d = new Date(year, month, 0);
    return d.getDate();
}

console.log(numberOfDay(2003,2))



