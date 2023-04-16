/*
1 задание
const arr = [1, 5, 4, 10, 0, 3];

 for (let elem of arr) {
     if (elem === 10){
        console.log(elem);
        break;
     }
	console.log(elem);
 }
*/
/*
задание-2
let arr = [1, 5, 4, 10, 0, 3]; 
console.log(arr.indexOf(4));
*/
/*
3 задание
let arr = [1, 3, 5, 10, 20];
let str=arr.join(' ');
console.log(str);
*/
/*4 задание
let arr = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];
console.log(arr);
*/
/*задание 5
let arr = [1, 1, 1];
arr.push(2, 2, 2);
console.log(arr); 
*/
/*задание 6
let arr = [9, 8, 7, 'a', 6, 5];
arr.sort().pop();
console.log(arr); 
*/
/*задание 7
const arr = [9, 8, 7, 6, 5];
let num = Number(prompt('Введите число от 1 до 10'));
if (arr.indexOf(num) >= 0){
         console.log(`Число ${num} есть в массиве`)
     }else{
        console.log(`Число ${num} нет в массиве`)
     }
*/
/* 8 задание
let str = 'abcdef';
let arr1 = str.split('');
let arr2 = arr1.reverse();
let result = arr2.join(''); 
console.log(result);
*/
/*9 задание
let arr = [[1, 2, 3,],[4, 5, 6]];
let result = [].concat(...arr);
console.log(result);
*/
/*10 задание
let arr = [3, 5, 6, 3, 9, 7];
 for (let i = 0; i < (arr.length - 1); i++) {
    console.log((arr[i]+arr[i+1]));
 }*/
/*Задание 11

 const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

 const result = num.map(function (item) {
  return item ** 2;
 })

 console.log(result);*/
/* Задание 12

 const getLength = arr => arr.map(str => str.length);

 console.log(getLength(['один', 'два', 'три', 'четыре', 'пять']));
 console.log(getLength(['слово', '', 'слог', 'длинное предложение', 'буква']));
 */
/* Задание 13

const getNum = array => array.filter(item => item < 0);

console.log(getNum([1, -3, 5, 6, -4, -9, -7, 2, -8]));
 */
/*доп задания 
Задания 14
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(0, 10));
Задания 15
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 10));

*/