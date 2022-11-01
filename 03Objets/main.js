
// //-----------------------------------------------------------------//--- 01 y 02 ---//

// let citizen1 = {
//     name: "Joseph",
//     lastName: "Trump",
//     age: 56,
// }

// citizen1.city = "Maracaibo"
// citizen1.age = 17

// //-----------------------------------------------------------------//--- 03 ---//
// function checkCitizenship(obj) {
//     if (obj.age > 18) {
//         obj.canVote = true
//     } else {
//         obj.canVote = false
//     }
// }

// checkCitizenship(citizen1)
// console.log(citizen1);
// //-----------------------------------------------------------------//--- 04 y 05---//

// function createCitizen(name, lastName, age) {
//     if (name == !!"" || lastName == !!"" || age == !!"") {
//         alert("Invalid parameter")
//         return
//     } else {
//         let obj = { name: name, lastName: lastName, age: age }
//         return obj
//     }
// }

// const citizenName = prompt("Please enter the following information:\n\n\n Citizen's NAME:")
// const citizenLastname = prompt("Please enter the following information:\n\n\n Citizen's LASTNAME:")
// const citizenAge = prompt("Please enter the following information:\n\n\n Citizen's AGE:") * 1

// let citizen2 = createCitizen(citizenName, citizenLastname, citizenAge)
// console.log(citizen2);

// //-----------------------------------------------------------------//--- 06 y 07---//

// function checkVoting(obj) {
//     if (Object.hasOwn(obj, "canVote")) {
//         return
//     } else {
//         return checkCitizenship(obj)
//     }
// }
// checkVoting(citizen2)

// //-----------------------------------------------------------------//--- 08---//

// function showValues(obj) {
//     let keys = Object.keys(obj)
//     for (let i = 0; i < keys.length; i++) {
//         console.log(obj[keys[i]]);
//     }
// }

// showValues(citizen2)

// //-----------------------------------------------------------------//--- 09---//


// function deleteLastProp(obj) {

//     let keys = Object.keys(obj)

//     if (keys.length > 4) {
//         delete obj[keys[keys.length - 1]]
//         return
//     } else {
//         console.log("False");
//         return
//     }
// }

// deleteLastProp(citizen1)
// console.log(citizen1)



//-----------------------------------------------------------------//--- 10 ---//
// FIGHT CLUB //

let tyler = {
    name: "Tyler",
    HP: 100,
    damage: 15,
    attack: function (obj) {
        return obj[damage]
    }
}

let chuck = {
    name: "Chuck",
    HP: 80,
    damage: 10,
    // attack: function (obj) {
    //     console.log(`${this.HP}`) 
}

tyler.attack(chuck)
console.log(tyler.attack());

// function prueba(obj){
//     return obj.damage
// }

// console.log(prueba( chuck));

// tyler.attack(chuck)
// console.log(tyler.attack());
// console.log(chuck.damage);








// let chuck = {
//     name: "Chuck",
//     HP: 80,
//     damage: 10,
//     attack: function (obj1) {
//         return [${this.HP} - obj1.damage]
// }

// console.log(tyler.HP);
// console.log(chuck.damage);

// console.log(tyler.HP - chuck.damage);

// function attack(obj1, obj2) {
//     return obj1.HP - obj2.damage
// }

// console.log(attack(tyler, chuck))

