// const obj = {
//   name: 'Human',
//   score: 3,
// };
const obj = ['aakash', 'mehta'];

console.log(JSON.parse(localStorage.getItem('name')));
// localStorage.setItem("name",obj);
const data = JSON.parse(localStorage.getItem('name'));
obj.push('karan');
localStorage.setItem('name', JSON.stringify(obj));
