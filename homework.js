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