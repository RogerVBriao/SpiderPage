// Classe Spider
export default class spider {
  // Construtor
  constructor(id, nameAtor, universe, icon, movies)  {
    this.id = id;
    this.nameAtor = nameAtor;
    this.universe = universe;
    this.icon = icon;
    this.movies = movies;
  }

  // Renderiza o conteúdo principal
  renderMainContent(movieIndex = 0){
    const movie = this.movies[movieIndex];
    return`
    <div class="s-main-content__top">
        <div class="s-logo">
          <img src="${movie.logo}" alt="${movie.title}"
            title="${movie.title}" />
        </div>

        <div class="s-description">
          <div class="pills">
            <ul>
              <li>${movie.title}</li>
              <li>${this.universe}</li>
            </ul>
          </div>

          <div class="s-description__text">
            <p><strong>Sinopse:</strong>&nbsp;${movie.synopsis}</p>
          </div>
        </div>

        <div class="s-links">
          <ul>
            <li>
              <a href="${movie.trailer}" class="link-button" target="_blank">
                <span class="icon">
                  <div class="play-icon">&nbsp;</div>
                </span>
                <span class="label">
                  Assistir trailer
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
  <div class="s-main-content__bottom">
    <div class="gallery">
          <ul>
          ${movie.photos.map(image=> `
            <li>
              <a data-fancybox href="${image}">
                <img src="${image}" alt="Imagens do Filme: ${movie.title}">
              </a>
            </li>
            `).join('')}
          </ul>
        </div>
      </div>    
    `
  }

 }


 