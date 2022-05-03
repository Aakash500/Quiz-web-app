// let id = val => document.getElementById(val)
// let btn = id("btn");
// let  btnforward = id("btn-forward")
// let text = id("text")
// *
// // console.log("start of js")
// // let promise = (btn) =>{
// //     return new Promise(function(resolve,reject){
// //         btn.addEventListener('click',()=>{
// //             resolve(console.log("button clicked promise resolved"));
// //         })
// //     })
// // }

// // async function onsubmit(){
// //    await promise(btn);
// //    console.log("you clicked submit button")
// // }

// // console.log("before calling onsubmit")
// // onsubmit();
// // console.log("end of js")
// // let i=2;
// // function doPromise(){
// //     return new Promise(function(resolve,reject){
// //         if(i==2){
// //             resolve(i+2)
// //         }
// //         else reject(i-2)
// //     })
// // }
// // let result
// // async function check(){
// //     await doPromise().then((x)=>{
// //         result = x;
// //     })
// //     console.log(result);
// // }
// //  check()

// let forResponse = (i) => {
//     console.log("Request received")
//     return new Promise(function (resolve, reject) {
//         btnforward.addEventListener('click',()=>{
//             resolve(console.log("Request resolved"))
//         })
//     })
// }

// let choices = ['Hola','hi','hello','how are you']

// let create = (i) =>{
//     let ele = document.createElement("h4")
//     ele.textContent = choices[i];
//     text.appendChild(ele)
// }

// async function recursion(i) {
//     if (i == 4) return;
//     console.log(i);
//     create(i)
//     await forResponse(i)
//     text.innerHTML = ' '
//     recursion(i + 1);
// }

// btn.addEventListener('click', () => {
//     recursion(0)
// // })
// const arr = [10, 20, 30, 40, 55];
// const output = arr.reduce(function (acc, curr) {
//   acc = acc + curr;
//   return acc;
// }, 0);

// console.log(output);

const users = [
  { firstName: 'akashay', lastName: 'saini', age: 23 },
  { firstName: 'elon', lastName: 'musk', age: 45 },
  { firstName: 'aakash', lastName: 'mehta', age: 21 },
  { firstName: 'kirti', lastName: 'sahni', age: 23 },
];

// const output = users.reduce(function(acc,curr){
//     if(acc[curr.age]){
//         acc[curr.age] = acc[curr.age] + 1;
//     }else{
//         acc[curr.age] = 1;
//     }
//     return acc;
// },{})

// console.log(output);

const output = users
  .filter(x => x.age < 30)
  .map(x => `${x.firstName} ${x.lastName}`);
console.log(output);
