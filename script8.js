/*
1 задание
function getResult(arr, callback) {
    console.log(callback(arr));
};
function  mult(arr) {
    return arr.flat(Infinity).reduce((a, b) => a+b);
}
function  sum(arr) {
    return arr.flat(Infinity).reduce((a, b) => a*b);
}

getResult ([3, 4, 1, 9], mult); 
getResult ([3, 4, 1, 9], sum); */
/* 2 задание 
const users = [
    { name: 'Jon', age: 22 },
    { name: 'Richard', age: 18 },
    { name: 'Anton', age: 32 },
    { name: 'Lida', age: 23 },
    { name: 'Bob', age: 44 }
];

function getSortedArrayObj() {
    return users.sort(function (a, b) {
        return a.age - b.age;
    });
};

console.log(getSortedArrayObj(users));

 */

  
 



/* 3 задание
const arr1 = [1, '4', 9, 'two'];
const arr2 = [1, '4', false, 9, 'two'];

const reversArr = (arr) => {
    let reversed = arr.reverse();
    console.log(reversed);
    return reversed;
};

const toNumberArr = (arr) => {
    arr = arr.map(str => { return +str }).filter(function (value) {
        return !Number.isNaN(value);
    });

    console.log(arr);
    return arr;
};
const each = (arr, callback) => {
    callback(arr);
};

each(arr1, reversArr);
each(arr2, toNumberArr);
*/
/* 4 задание
function printDate() {
    console.log(new Date());
  }
  
  let counter = 0;
  const intervalId = setInterval(() => {
    printDate();
    counter += 3;
    if (counter >= 30) {
      clearInterval(intervalId);
      console.log('30 секунд прошло.');
    }
  }, 3000);
*/
/*
5 задание
function calling() {
    console.log('Звоню!');
    beeps();
  }
  
  function beeps() {
    setTimeout(() => {
      console.log('Идут гудки...');
      talk();
    }, 1000);
  }
  
  function talk() {
    console.log('Разговор');
  }
  
  calling();*/