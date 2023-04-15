/*1 задание
const a = 8;
const b = 4;

function min(a, b) {
    if (a < b) {
      return a;
    } else if(a < b) {
      return b;
    }
    else {
       return a;
    }
  }

  min(a,b);

  console.log(min(a,b))
*/
/*2 задание
function func(n){
    if(n % 2 == 0){
        return'Число четное';
    }else{
        return'Число нечетное';
    }
}
console.log(func(3));
console.log(func(2));

*/
/*3 задание
let Number=+prompt('Введите число');
function func(Number){
  return Number**2;
}
console.log(func(Number));
*/
/*4 задание
function howManyYears () {
    const userYears= prompt('Сколько тебе лет?')
    if (userYears < 0) {
        alert('Вы ввели неправильное значение')
    } else  if (userYears<=12){
      alert('Привет, друг!')  
    }else{
        alert('Добро пожаловать')
    }
}

*/
/*5задание
let num1 = prompt('Введите первое число');
let num2 = prompt('Введите второе число');

function fun (num1, num2) {
    if( !isNaN(num1) && !isNaN(num2) ){
       return console.log(num1*num2)
       }
       else console.log (`Одно или оба значения не являются числом`)
  }
  fun(num1,num2);*/
/*6 задание
let num=prompt(`назовите число возводимое в куб`);
function func(){
if(!isNaN(num)){
  return(console.log(num**3));
}
else {
  console.log(`не число`)
} 
}
func(num);
*/
/* задание 7

 const pi = 3.14;

 function getArea () {
    return (this.radius ** 2) * pi;
 }

 function getPerimeter () {
    return (this.radius * 2) * pi;
}

const circle1 = {
    radius: 5,
    getSphereArea: getArea, 
 }

 const circle2 = {
    radius: 12,
   getSpherePerimeter: getPerimeter,
 }

 console.log(circle1.getSphereArea());
console.log(circle2.getSpherePerimeter());
*/
//8задание см.homework.js