let btn1 = document.getElementsByClassName('france')[0];
btn1.addEventListener('click', france);
let btn2 = document.getElementsByClassName('germany')[0];
btn2.addEventListener('click', germany);
let btn3 = document.getElementsByClassName('england')[0];
btn3.addEventListener('click', england);


function france () {
    console.log("Я работаю");
    let result = document.getElementsByClassName('main_card_wrapper')[0];
    result.innerHTML = `
    <div class="card_wrapper">
    <img src="./03.jpg" alt="">
    <h4>Марсель Руссо</h4>
    <h3>Охота Амура</h3>
    <p>Холст, масло (50х80)</p>
    <span>14 500 руб</span>
    <button>В корзину</button>
</div>
<div class="card_wrapper">
    <img src="./img/num2.jpg" alt="">
    <h4>Анри Селин</h4>
    <h3>Дама с собачкой</h3>
    <p>Акрил, бумага (50х80)</p>
    <span>16 500 руб</span>
    <button>В корзину</button>
</div>
<div class="card_wrapper">
    <img src="./img/num3.jpg" alt="">
    <h4>Франсуа Дюпон</h4>
    <h3>Процедура</h3>
    <p>Цветная литография (40х60)</p>
    <span>20 000 руб</span>
    <button>В корзину</button>
</div>
<div class="card_wrapper">
    <img src="./img/num4.jpg" alt="">
    <h4>Луи Детуш</h4>
    <h3>Роза</h3>
    <p>Бумага, акрил (50х80)</p>
    <span>12 000 руб</span>
    <button>В корзину</button>
</div>
<div class="card_wrapper">
    <img src="./img/num5.jpg" alt="">
    <h4>Франсуа Дюпон</h4>
    <h3>Птичья трапеза</h3>
    <p>Цветная литография (40х60)</p>
    <span>22 500 руб</span>
    <button>В корзину</button>
</div>
<div class="card_wrapper">
    <img src="./img/num6.jpg" alt="">
    <h4>Пьер Моранж</h4>
    <h3>Пейзаж с рыбой</h3>
    <p>Цветная литография (40х60)</p>
    <span>20 000 руб</span>
    <button>В корзину</button>
</div> 
`
}

function germany() {
    console.log(`Я тоже работаю`);
    let result = document.getElementsByClassName('main_card_wrapper')[0];
    result.innerHTML = `
    <div class="card_wrapper">
    <img src="./img/germany1.jpg" alt="germany1">
    <h4>Курт Вернер</h4>
    <h3>Над городом</h3>
    <p>Цветная литография (40х60)</p>
    <span>16 000 руб</span>
    <button>В корзину</button>
</div>
<div class="card_wrapper">
    <img src="./img/germany2.jpg" alt="">
    <h4>Макс Рихтер</h4>
    <h3>Птенцы</h3>
    <p>Холст, масло (50х80)</p>
    <span>14 500 руб</span>
    <button>В корзину</button>
</div>
<div class="card_wrapper">
    <img src="./img/germany3.jpg" alt="">
    <h4>Мартин Майер</h4>
    <h3>Среди листьев</h3>
    <p>Цветная литография (40х60)</p>
    <span>20 000 руб</span>
    <button>В корзину</button>
</div>
<div class="card_wrapper">
    <img src="./img/germany4.jpg" alt="">
    <h4>Герман Беккер</h4>
    <h3>Яркая птица</h3>
    <p>Цветная литография (40х60)</p>
    <span>13 000 руб</span>
    <button>В корзину</button>
</div>
<div class="card_wrapper">
    <img src="./img/germany5.jpg" alt="">
    <h4>Вульф Бауэр</h4>
    <h3>Дятлы</h3>
    <p>Бумага, акрил (50х80)</p>
    <span>20 000 руб</span>
    <button>В корзину</button>
</div>
<div class="card_wrapper">
    <img src="./img/germany6.jpg" alt="">
    <h4>Вальтер Хартманн</h4>
    <h3>Большие воды</h3>
    <p>Бумага, акрил (50х80) </p>
    <span>23 000 руб</span>
    <button>В корзину</button>
</div> 
`
}

function england() {
    let result = document.getElementsByClassName('main_card_wrapper')[0];
    result.innerHTML = `
    <div class="card_wrapper">
    <img src="./img/england1.jpg" alt="germany1">
    <h4>Пол Смит</h4>
    <h3>Дикий зверь</h3>
    <p>Акварель, бумага (50х80)</p>
    <span>19 500 руб</span>
    <button>В корзину</button>
</div>
<div class="card_wrapper">
    <img src="./img/england2.jpg" alt="">
    <h4>Джон Уайт</h4>
    <h3>Скалистый берег</h3>
    <p>Цветная литография (40х60)</p>
    <span>17 500 руб</span>
    <button>В корзину</button>
</div>
<div class="card_wrapper">
    <img src="./img/england3.jpg" alt="">
    <h4>Джим Уотсон</h4>
    <h3>Река и горы</h3>
    <p>Акварель, бумага (50х80)</p>
    <span>20 500 руб</span>
    <button>В корзину</button>
</div>
<div class="card_wrapper">
    <img src="./img/england4.jpg" alt="">
    <h4>Юджин Зиллион</h4>
    <h3>Белый попугай</h3>
    <p>Цветная литография (40х60) </p>
    <span>15 500 руб</span>
    <button>В корзину</button>
</div>
<div class="card_wrapper">
    <img src="./img/england5.jpg" alt="">
    <h4>Эрик Гиллман</h4>
    <h3>Ночная рыба</h3>
    <p>Бумага, акрил (50х80)</p>
    <span>12 500 руб</span>
    <button>В корзину</button>
</div>
<div class="card_wrapper">
    <img src="./img/england6.jpg" alt="">
    <h4>Альфред Барр</h4>
    <h3>Рыжий кот</h3>
    <p>Цветная литография (40х60)</p>
    <span>21 000 руб</span>
    <button>В корзину</button>
</div> 
    `
}