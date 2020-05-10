import renderSearch from './renderSearch';
import translate from './translate';

export default function changeLanguage(str) {
  const match = /^[а-яё]*$/i.test(str);
  if (match) {
    const request = new Request(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200510T141718Z.a1159acd9fdb8b6b.33b5a240a371e0470e04c9c8bfc3ded85b5d19b4&text=${str}&lang=ru-en`);
    translate(request);
  } else {
    document.querySelector('.info').textContent = '';
    const request = new Request(`https://www.omdbapi.com/?s=${str}&apikey=73a3159f`);
    renderSearch(request);
  }
}
