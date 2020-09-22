const arr = [
  {
    id: 26,
    title: 'Побег из Шоушенка',
    imdb: 9.30,
    year: 1994,
  },
  {
    id: 25,
    title: 'Крёстный отец',
    imdb: 9.20,
    year: 1972,
  },
  {
    id: 27,
    title: 'Крёстный отец 2',
    imdb: 9.00,
    year: 1974,
  },
  {
    id: 1047,
    title: 'Тёмный рыцарь',
    imdb: 9.00,
    year: 2008,
  },
  {
    id: 223,
    title: 'Криминальное чтиво',
    imdb: 8.90,
    year: 1994,
  },
];

const movies = document.getElementById('movies');
const headers = document.getElementsByClassName('headers');

const sortedByIdLow = [...arr.sort((a, b) => (a.id > b.id ? 1 : -1))];
const sortedByIdHigh = [...arr.sort((a, b) => (a.id > b.id ? 1 : -1)).reverse()];
const sortedByTitleLow = [...arr.sort((a, b) => (a.title > b.title ? 1 : -1))];
const sortedByTitleHigh = [...arr.sort((a, b) => (a.title > b.title ? 1 : -1)).reverse()];
const sortedByYearLow = [...arr.sort((a, b) => (a.year > b.year ? 1 : -1))];
const sortedByYearHigh = [...arr.sort((a, b) => (a.year > b.year ? 1 : -1)).reverse()];
const sortedByImdbLow = [...arr.sort((a, b) => (a.imdb > b.imdb ? 1 : -1))];
const sortedByImdbHigh = [...arr.sort((a, b) => (a.imdb > b.imdb ? 1 : -1)).reverse()];

function createMovieList(data) {
  movies.innerHTML = '';
  data.forEach((el) => {
    movies.insertAdjacentHTML('beforeend', `<tr><td>${el.id}</td><td>${el.title}</td><td>(${el.year})</td><td>imdb: ${el.imdb.toFixed(2)}</td></tr>`);
  });
}

function changeArrow(item, direction) {
  headers.forEach((el) => {
    if (el.classList.contains('sorting-up') || el.classList.contains('sorting-down')) {
      // eslint-disable-next-line no-param-reassign
      el.className = 'headers';
    }
  });
  if (direction === 'up') {
    headers[item].classList.add('sorting-up');
  }
  if (direction === 'low') {
    headers[item].classList.add('sorting-down');
  }
}

createMovieList(arr);
let sortingIndex = 1;
setInterval(() => {
  switch (sortingIndex) {
    case 1:
      createMovieList(sortedByIdLow);
      changeArrow(0, 'low');
      break;
    case 2:
      createMovieList(sortedByIdHigh);
      changeArrow(0, 'up');
      break;
    case 3:
      createMovieList(sortedByTitleLow);
      changeArrow(1, 'low');
      break;
    case 4:
      createMovieList(sortedByTitleHigh);
      changeArrow(1, 'up');
      break;
    case 5:
      createMovieList(sortedByYearLow);
      changeArrow(2, 'low');
      break;
    case 6:
      createMovieList(sortedByYearHigh);
      changeArrow(2, 'up');
      break;
    case 7:
      createMovieList(sortedByImdbLow);
      changeArrow(3, 'low');
      break;
    case 8:
      createMovieList(sortedByImdbHigh);
      changeArrow(3, 'up');
      break;
    default:
      sortingIndex = 0;
      break;
  }
  sortingIndex += 1;
}, 2000);
