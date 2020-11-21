/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "логан",
            "лига справедливости",
            "ла-ла лэнд",
            "одержимость",
            "скотт Пилигрим против..."
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
    
    
    // Создаём фукцию записи и сортировки фильмов
    function writeFilm(){
        // Сортируем Фильмы
        movieDB.movies.sort();
        // Перебераем фильмы
        movieDB.movies.forEach((film, i) => {
        promoItem.innerHTML += `<li class="promo__interactive-item">${++i}: ${film}<div class="delete"></div></li>`;
    });
    }
    
    writeFilm();
    
    
    // Урок 033 //
    
    const form = document.querySelector('.add');
    const inputForm = form.querySelector('.adding__input');
    const btn = form.querySelector('button');
    /* let newMovie = ''; */
    
    btn.addEventListener('click', (e) => {
        // Отменяем стандартное поведение браузера
        e.preventDefault();
        let newMovie = inputForm.value;
        newMovie = newMovie.toLowerCase();
        // Проверка соответствует ли условиям введенный фильм
        if(newMovie){
        if (newMovie.length > 5){
            newMovie = newMovie.slice(0, 5) + `...`;
            console.log(newMovie);
        }
        // Запись масиив нвого фильма 
        let a = movieDB.movies.length;
        movieDB.movies[a] = newMovie;
        console.log(movieDB.movies);
        console.log(inputForm.value);
        promoItem.innerHTML = '';
        writeFilm();
        }    
    });
    
    document.querySelectorAll('.delete').forEach((item, i) => {
        item.addEventListener('click', () =>{
            item.parentElement.remove();
            movieDB.movies.splice(i, 1);
        });
    });
    
    
    
    // Проверка длинны массива
    console.log(movieDB.movies.length);
    
    
    
    
});

