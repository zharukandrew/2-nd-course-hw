// 2.5 Функции,8задание
function seasonsGame() {
    let season = Number(prompt("Введите номер любого месяца года"));
                                       
    if (season > 0 && season <= 2 || season === 12) {
       console.log ("Это зима!");
    } else if (season >= 3 && season <= 5) {
       console.log("Это весна!");
    } else if (season >= 6 && season <= 8) {
        console.log("Это лето!");
    } else if (season >= 9 && season <= 11) {
       console.log("Это осень!");
    } else {
      console.log('неверный месяц');
    }
    }
    // 2.7 Встроенные обьекты
    let array = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

function rememberWords(){
    alert(array = array.sort(() => Math.random() - 0.5));

    let firstElement = prompt('Чему равнялся первый элемент массива?');
    let lastElement = prompt('Чему равнялся последний элемент массива?');
    
    if (firstElement.toLowerCase() == array[0].toLowerCase() && lastElement.toLowerCase() == array[array.length - 1].toLowerCase()){
        alert("Поздравляю, вы все угадали!")
    }else if(firstElement.toLowerCase() == array[0].toLowerCase() || lastElement.toLowerCase() == array[array.length - 1].toLowerCase()){
        alert("Вы были близки к победе!")
    }else {
        alert("Вы ответили неверно!")
    }

}

