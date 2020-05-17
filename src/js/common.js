
import RenderMovie from './view/renderMovies';
import changeLanguage from './changeLanguage';


RenderMovie();


document.querySelector('.search-button').addEventListener('click', (event) => {
  event.preventDefault();
  const title = document.querySelector('.search-input').value;
  if (title) {
    changeLanguage(title);
  } else {
    RenderMovie();
  }
});


document.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    const title = document.querySelector('.search-input').value;
    if (title) {
      changeLanguage(title);
    } else {
      RenderMovie();
    }
  }
});
