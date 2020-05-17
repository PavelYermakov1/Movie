/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
import Swiper from 'swiper';


export default function renderSearch(request) {
  const mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: false,
    grabCursor: true,
    loopFillGroupWithBlank: true,
    simulateTouch: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },

      425: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },

      1440: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  fetch(request)
    .then((result) => result.json()).then((data) => {
      if (data.Response === 'False') {
        document.querySelector('.info').textContent = `No results for ${document.querySelector('.search-input').value} `;
        RenderMovie();
      }
      if (document.querySelector('.swiper-wrapper').childNodes.length !== 1) {
        const myNode = document.querySelector('.swiper-wrapper');
        while (myNode.firstChild) {
          myNode.removeChild(myNode.firstChild);
        }
      }
      const searchEl = document.querySelector('.swiper-wrapper');
      const len = data.Search.length;
      for (let i = 0; i < len; i++) {
        const swiperSlide = document.createElement('div');
        swiperSlide.classList.add('swiper-slide');

        const slideCard = document.createElement('div');
        slideCard.classList.add('slide-card');

        const titleCard = document.createElement('div');
        titleCard.classList.add('title-card');

        const titleLink = document.createElement('a');
        titleLink.classList.add('title-link');
        titleLink.textContent = `${data.Search[i].Title}`;
        titleLink.setAttribute('href', `https://www.imdb.com/title/${data.Search[i].imdbID}/`);

        const cardImage = document.createElement('img');
        cardImage.classList.add('card-image');
        if (data.Search[i].Poster === 'N/A') {
          cardImage.setAttribute('src', './src/assets/image/no-poster.jpg');
        } else {
          cardImage.setAttribute('src', `${data.Search[i].Poster}`);
        }
        cardImage.setAttribute('alt', `${data.Search[i].Title}`);

        const cardInfo = document.createElement('div');
        cardInfo.classList.add('card-info');

        const infoYear = document.createElement('span');
        infoYear.classList.add('year');
        infoYear.textContent = `${data.Search[i].Year}`;

        const infoMdb = document.createElement('span');
        infoMdb.classList.add('MDb');
        infoMdb.setAttribute('style', 'background-image: url(./src/assets/image/star.svg);');


        const idMovie = data.Search[i].imdbID;
        fetch(`https://www.omdbapi.com/?i=${idMovie}&apikey=73a3159f`)
          .then((response) => response.json())
          .then((data) => {
            infoMdb.textContent = `${data.imdbRating}`;
          });


        cardInfo.append(infoYear, infoMdb);

        titleCard.append(titleLink);

        slideCard.append(titleCard, cardImage, cardInfo);
        swiperSlide.append(slideCard);

        searchEl.appendChild(swiperSlide);
        mySwiper.update();
      }
    });
}
