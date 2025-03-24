import { createBackButton } from '../components/common/BackButton.js';
import { createCard } from '../components/common/Card.js';

export function createSportsPage() {
  return `
    <div class="category-page">
      <div class="container py-5">
        ${createBackButton()}
        <h1 class="section-title mb-4">
          <i class="bi bi-trophy-fill text-success me-2"></i>
          Esportes
        </h1>
        
        <!-- Featured Sports News -->
        <div class="row mb-5">
          <div class="col-lg-8">
            <div class="featured-news position-relative rounded-4 overflow-hidden shadow-lg">
              <img src="es4.jpg" class="w-100" alt="Notícia em Destaque">
              <div class="featured-content position-absolute bottom-0 start-0 w-100 p-4 text-white" 
                   style="background: linear-gradient(transparent, rgba(0,0,0,0.9));">
                <span class="badge bg-success mb-2">Destaque</span>
                <h3 class="mb-2">Brasil tem domingo dourado no Mundial de atletismo paralímpico</h3>
                <p class="mb-3">Graças ao paulista André Rocha e a potiguar Thalita Simplício o Brasil teve um domingo (19) dourado no Mundial de atletismo paralímpico.</p>
                <div class="d-flex align-items-center gap-3">
                  <span><i class="bi bi-clock"></i> Há 1 hora</span>
                  <span><i class="bi bi-eye"></i> 5.2k visualizações</span>
                  <a href="#" class="btn btn-sm btn-light">Ler mais</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="bg-white rounded-4 shadow-lg p-4 h-100">
              <h4 class="mb-4">
                <i class="bi bi-graph-up-arrow text-success me-2"></i>
                Mais Lidas
              </h4>
              ${createTopSportsNews()}
            </div>
          </div>
        </div>

        <!-- Latest Sports News -->
        <div class="row g-4">
          ${createSportsNews()}
        </div>

        <!-- Sports Categories -->
        <div class="mt-5">
          <h3 class="section-title mb-4">
            <i class="bi bi-grid-3x3-gap-fill text-success me-2"></i>
            Categorias Esportivas
          </h3>
          <div class="row g-4">
            ${createSportsCategories()}
          </div>
        </div>
      </div>
    </div>
  `;
}

function createTopSportsNews() {
  const topNews = [
    {
      title: "Pedro decide e Fla derrota Millonarios para avançar na Libertadores",
      views: "3.2k",
      time: "2 horas"
    },
    {
      title: "Goiás é derrotado na ressacada pelo Avaí",
      views: "2.8k",
      time: "3 horas"
    },
    {
      title: "Vila Nova dá sinais de que desistiu da Copa Verde",
      views: "2.5k",
      time: "4 horas"
    },
    {
      title: "Goiás goleia o Botafogo-SP",
      views: "7.5k",
      time: "1 horas"
    },
    {
      title: "Atletas goianos conquistam 11 medalhas no primeiro dia das Paralimpíadas Escolares 2021",
      views: "3.5k",
      time: "2 horas"
    },
    {
      title: "Aparecidense é o primeiro semifinalista da Série D Camaleão empatou em 1 a 1 com o Uberlândia",
      views: "1.5k",
      time: "8 horas"
    }
  ];

  return topNews.map((news, index) => `
    <div class="trending-item ${index < topNews.length - 1 ? 'border-bottom' : ''} py-3">
      <div class="d-flex align-items-start gap-3">
        <span class="trending-number fw-bold text-success">#${index + 1}</span>
        <div>
          <h6 class="mb-2">${news.title}</h6>
          <div class="d-flex align-items-center gap-3 text-muted small">
            <span><i class="bi bi-eye"></i> ${news.views}</span>
            <span><i class="bi bi-clock"></i> Há ${news.time}</span>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function createSportsNews() {
  const sportsNews = [
    {
      title: "Vila Nova acerta com o técnico Luizinho Lopes, ex-Brusque",
      description: "O Vila Nova contratou o técnico Luizinho Lopes. Ele tem 42 anos e chegou a Goiânia na noite desta quinta-feira para assinar com o novo clube.",
      image: "es1.jpeg",
      category: "Futebol",
      date: "Há 2 horas"
    },
    {
      title: "18 municípios goianos terão campos sintéticos de futebol society",
      description: "Governo de Goiás vai construir campos de futebol Society em 18 municípios goianos.",
      image: "es2.jpg",
      category: "Society",
      date: "Há 3 horas"
    },
    {
      title: "Após jogo adiado, Jair Ventura monta time do Atlético Goianiense para decisão na Copa do Brasil",
      description: "O Atlético Goianiense tinha previsto uma viagem para Salvador para entrar em campo no ultimo sábado (18), mas a Confederação Brasileira de Futebol.",
      image: "es3.jpeg",
      category: "Tecnico",
      date: "Há 4 horas"
    }
  ];

  return sportsNews.map(news => `
    <div class="col-lg-4">
      ${createCard(news)}
    </div>
  `).join('');
}

function createSportsCategories() {
  const categories = [
    { name: "Futebol", icon: "dribbble", count: "158 notícias" },
    { name: "Vôlei", icon: "circle-fill", count: "64 notícias" },
    { name: "Basquete", icon: "circle-half", count: "42 notícias" },
    { name: "Atletismo", icon: "lightning-charge", count: "35 notícias" }
  ];

  return categories.map(category => `
    <div class="col-md-3 col-sm-6">
      <div class="category-card p-4 text-center h-100">
        <i class="bi bi-${category.icon} display-4 text-success mb-3"></i>
        <h5 class="mb-2">${category.name}</h5>
        <p class="text-muted mb-0">${category.count}</p>
      </div>
    </div>
  `).join('');
}