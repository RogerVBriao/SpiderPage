
let isAnimation = false;

function handleMouseEnter() {
  focusCardHover(this.id);
  this.classList.add('s-card--hovered');
  document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave() {
  this.classList.remove('s-card--hovered');
  document.body.id = '';
}

function addEventListenersToCards() {
  const cardElements = document.getElementsByClassName('s-card');
  for (let index = 0; index < cardElements.length; index++) {
    const card = cardElements[index];
    card.addEventListener('mouseenter', handleMouseEnter );
    card.addEventListener('mouseleave', handleMouseLeave);
  }
}

async function focusCardHover(cardHoveredId){
  console.log("id do -card hovered: " + cardHoveredId);
  if(cardHoveredId === "spider-man-01"){
    selectCarouselItem(document.getElementById('1'));
    console.log("elemento 1: "+document.getElementById('1'));
  }
  if(cardHoveredId === "spider-man-02"){
    selectCarouselItem(document.getElementById('2'));
  }
  if(cardHoveredId === "spider-man-03"){
    selectCarouselItem(document.getElementById('3'));
  }
  
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);

async function selectCarouselItem(selectedButtonElement) {
  // Verifica se a animação já está em andamento
  if (isAnimation) return;

  // Marca a animação como em andamento
  isAnimation = true;
  console.log("Animation start");

  // Realiza a animação
  await new Promise(resolve => {
    
    //Pega o valor do Id o botão selecionado
    const selectedItem = selectedButtonElement.id;
    // Seleciona o elemento do carrossel
    const carousel = document.querySelector('.s-cards-carousel');
    const transform = carousel.style.transform;
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
    const rotateYDeg = -120 * (Number(selectedItem) - 1);
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);

    carousel.style.transform = newTransform;

    // Adiciona classe s-controller__button--active no botão selecionado
    const activeButtonElement = document.querySelector('.s-controller__button--active');
    activeButtonElement.classList.remove('s-controller__button--active');
    selectedButtonElement.classList.add('s-controller__button--active');

    // Adiciona classe s-controller__nameSpider--active no nome do Spider selecionado
    const activeNameElement = document.getElementById(`nameSpider${selectedItem}`);
    const nameElement = document.querySelector('.s-controller__nameSpider--active');
    nameElement.classList.remove('s-controller__nameSpider--active')
    activeNameElement.classList.add('s-controller__nameSpider--active');

    // Faz a animação demorar 500ms
    setTimeout(() => {
      console.log("Animation end");
      resolve();
    }, 1000);

  });

  // Marca a animação como finalizada
  isAnimation = false;
}

function main(){
  
  document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);
}

main();