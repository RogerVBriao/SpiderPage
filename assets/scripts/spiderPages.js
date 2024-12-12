// Importa a classe Spider e os dados dos Spiders
import { spiders } from './spidersData.js';

// Cria a fonte de video
function sourceVideo(spiderMovie) {
  const bgVideo = document.querySelector('video');
  bgVideo.muted;
  bgVideo.src = spiderMovie.bgTrailer;
}

// Captura o parâmetro `id` da URL
function getSpiderIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id'); 
  const movieIndex = params.get('movieIndex');
  return [id, movieIndex]; // Retorna o valor do parâmetro `id` and `movieIndex`
}

// Busca o Spider pelo ID
function getSpiderById(id) {
  return spiders.find(spider => spider.id === parseInt(id));
}

// Insere os dados do Spider na página
function renderSpider(spider,movieIndex) {
  const container = document.getElementById('spider-container');
  container.innerHTML = spider.renderMainContent(movieIndex);
}

// Adicicona o Navegador lateral pela quantidade de filmes dos Spiders
function renderNavigator(spider) {
  const containerAside = document.querySelector('aside');
  const navIcon = containerAside.querySelector('.navigator__icon a img');
  navIcon.src = spider.icon;

  for (let index = 0; index < spider.movies.length; index++) {
    // Cria o item do Navegador
    const movieItem = document.createElement('li');
    movieItem.classList.add('movieItem');
    movieItem.value = index;
    // Cria o link
    movieItem.innerHTML = `<a href="spiderman1.html?id=${spider.id}&movieIndex=${index}"> ${index + 1}</>`
  
    containerAside.querySelector('ul').appendChild(movieItem);
  }

}

// Função principal
function main(){
  // Captura o parâmetro `id` da URL através da função
  const [spiderId, movieIndex] = getSpiderIdFromURL();
  
  // Busca o Spider pelo ID
  const selectedSpider = getSpiderById(spiderId);
  console.log(selectedSpider);

  // Chama o sourceVideo com index inicial
  sourceVideo(selectedSpider.movies[movieIndex]);
  
  // Adicicona o Navegador lateral plea quantidade de filmes dos Spiders
  renderNavigator(selectedSpider);
  // getMovieIndex(selectedSpider);

  // Verifica se o Spider foi encontrado
  if (!selectedSpider) {
    console.error('Spider não encontrado!');
  } else {
    renderSpider(selectedSpider, movieIndex);
  }

}

// Chama a função principal
main();