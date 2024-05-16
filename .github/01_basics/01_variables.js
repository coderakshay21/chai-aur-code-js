// const userId = 122212;
// var userName = "Jennifer";
// let userCity = "Jai[pur";
// let userPinCode = 445204;

// console.table([userId,userName,userPinCode,userCity]);


// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction)

// function myFunction(item, index, arr) {
//   arr[index] = item * 10;
// }
// console.log(numbers)

// -------------------------------------------------------------------------------------------------

// const one_arr = [1,2,3,4,5,6,,88,9,33,4,55,667,66]
// const new_arr= one_arr.filter((num) => {
//   return num > 4
// });

// console.log(new_arr)


// new_arr = []
// const my_arr = [1,2,3,4,5,6,7,8,9,11]
// my_arr.forEach((num) => {
//   if (num > 4){
//     new_arr.push(num);
//   }
// })
// console.log(new_arr)



// books = [
//     {"title1": "book1",genere : "History","publish":1990},
//     {"title2": "book2",genere : "Non Fiction","publish":1993},
//     {"title3": "book3",genere : "Fiction","publish":1992},
//     {"title4": "book4",genere : "History","publish":1999},

// ]

// const new_arr = books.filter((bk) => bk.genere==="History");
// console.log(new_arr)

// -----------------------------------------------------------------------------------------

// my_arr = [
//     {subject:"Polity",publish:1889,aurthor: "P.Kshayap"},
//     {subject:"Science",publish:1990,aurthor: "S.Bhaske"},
//     {subject:"Polity",publish:1889,aurthor: "R.Kolambe"},
//     {subject:"Economy",publish:1887,aurthor: "Kolambe"},
//     {subject:"Current",publish:2010,aurthor: "P.Parikrama"},
    
// ]
// // const new_arr = my_arr.filter((ar) => ar.subject === "Polity")
// // console.log(new_arr)

// let new_arr = my_arr.filter((bk) => { return bk.publish >= 1990})
// console.log(new_arr)

// -------------------------------------------------------------------------------------------

let arr1 = [1,2,3,4,5,67,8,9,0]
const arr2 = arr1
                .map((ar) => ar * 10)
                .map((ar) => ar + 0.5)
                .filter((ar) => ar >= 60)

console.log(arr2);













