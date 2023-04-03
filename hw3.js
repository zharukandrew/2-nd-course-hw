let password = 'пароль';
let passwordWord = prompt('Введите пароль');
if(password){
    alert('Пароль введен верно');
}else{
    alert('Пароль введен неправильноо');
}

//let c = 12;
//c>=0 && c<10 ? console.log('Верно') : console.log('Неверно');
//с=0;
//c>=0 && c<10 ? console.log('Верно') : console.log('Неверно');
//c=10;
//c>=0 && c<10 ? console.log('Верно') : console.log('Неверно');
//c=-3;
//c>=0 && c<10 ? console.log('Верно') : console.log('Неверно');
//c=2;
//c>=0 && c<10 ? console.log('Верно') : console.log('Неверно');
let d=5;
let e=105;
d>100 || e>100 ? console.log('Верно') : console.log('Неверно'); 
let a = parseInt('2',10);
let b = parseInt('3',10);

alert(a+b);
const monthNumber = Number(prompt('Введите число'))
switch (monthNumber) {
  case 1:
  case 2:
  case 12:
      alert('This  is winter');
      break;
  case 3:
  case 4:
  case 5:
      alert('This is spring');
      break;
  case 6:
  case 7:
  case 8:
      alert('This is summer');
      break;
  case 9:
  case 10:
  case 11:
      alert('This is autumn');
      break;
  default:
      alert('Error');
}
let OK=prompt('Пожалуста введите целое число');
if(OK%2){
    alert('Число четное');
}else{
    alert('Число нечетное');
}
//let clientOS=prompt('Пожалуйста, укажите 0, если вы пользователь IOS, и 1, если вы пользователь Android');
//if(clientOS==0){
    //alert('Установите версию приложения для iOS по ссылке');
//}else if (clientOS==1){
    //alert('Установите версию приложения для Android по ссылке');
//}else{
    //alert('Извините, но мы не работаем с другими ОС, кроме IOS или Android!');
//}
