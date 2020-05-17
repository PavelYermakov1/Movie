/* eslint-disable no-shadow */
import renderSearch from './renderSearch';

export default function sendTranslateWorld(request) {
  fetch(request)
    .then((result) => result.json()).then((data) => {
      const title = data.text[0];
      document.querySelector('.info').textContent = `Showing results for ${title}`;
      const request = new Request(`https://www.omdbapi.com/?s=${title}&apikey=73a3159f`);
      renderSearch(request);
    });
}
