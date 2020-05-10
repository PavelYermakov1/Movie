import renderSearch from '../renderSearch';

export default function RenderMovie() {
  const title = 'dream';
  const request = new Request(`https://www.omdbapi.com/?s=${title}&apikey=73a3159f`);
  renderSearch(request);
}
