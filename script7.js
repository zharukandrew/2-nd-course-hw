/*1 задание
let str = 'js';
console.log(str.toUpperCase());*/
/*задание 2
function searchStart(arr, str) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase().startsWith(str.toLowerCase())) {
      result.push(arr[i]);
    }
  }
  return result;
}


console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко')); 
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру')); 
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино')); 
*/

/*3 задание
let str = 32.58884;
console.log(Math.floor(str));
console.log(Math.ceil(str));
console.log(Math.round(str));
*/

/*4 задание
console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log(Math.min(52, 53, 49, 77, 21, 32.));
*/
/*
5 задание
function getRandomInt(min, max) {
    return Math.round (Math.random() * max + 1);
  }
  
  console.log(getRandomInt(1, 10));*/
/*6 задание
function getNum(a) {
    return(Array.from(Array(Math.floor(a / 2)), () => Math.round(Math.random() * a)));
 }
 console.log(getNum(9));
*/
 
/*7 задание
 function getRandomArbitary(min, max) {
	return(Math.round(Math.random() * (max - min)) + min) ;
}
console.log(getRandomArbitary(5,31));*/


/* 8 задание
let date = new Date();
let str  = date.getFullYear() + '-' + (date.getMonth() + 1)+  '-' + date.getDate();

console.log(str);
*/
/* 9 задание
let currentDate = new Date();
const NewDate = new Date();
NewDate.setDate(currentDate.getDate() + 73);
//дата через 73 дня//
console.log( NewDate);
*/
/*10 задание
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь","Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];


function getTime(date){
    let fullDate = "Дата: " + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear() + " - это " + days[date.getDay()] + ". Время: " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() ; 

    return fullDate; 
}

console.log(getTime(new Date()));
*/