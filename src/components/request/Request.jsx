const apiKey = '889c6c698b758e37f5a9c5b22a486a89';
const movieId = 550;

const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    // Обробка отриманих даних
    console.log(data);
  })
  .catch(error => {
    // Обробка помилки
    console.error('Помилка при отриманні даних:', error);
  });
