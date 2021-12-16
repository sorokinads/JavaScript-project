"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres:[],
    privat: false
};

const film = prompt('Один из последних просмотренных фильмов?', ''),
      rate = prompt('На сколько оцените его?', ''),
      film2 = prompt('Один из последних просмотренных фильмов?', ''),
      rate2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[film] = rate;
personalMovieDB.movies[film2] = rate2;

console.log(personalMovieDB);
