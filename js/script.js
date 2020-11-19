/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promo = document.querySelectorAll('.promo__adv img');
const genre = document.querySelector('.promo__genre');
const promoBg = document.querySelector('.promo__bg');
const promoItem = document.querySelector('.promo__interactive-list');


// Удаляем рекламу
for(let i = 0; i<3; i++)
{
promo[i].remove();
}
// Заменяем Комедию на Драму
genre.textContent = "Драма";
// Изменяем Bg
promoBg.style.backgroundImage = 'url("img/bg.jpg")';
// Удаляем не нужный Html код
promoItem.innerHTML = '';
// Сортируем Фильмы
movieDB.movies.sort();
// Перебираем фильмы
movieDB.movies.forEach((film, i) => {
    promoItem.innerHTML += `<li class="promo__interactive-item">${++i}: ${film}<div class="delete"></div></li>`;
});

