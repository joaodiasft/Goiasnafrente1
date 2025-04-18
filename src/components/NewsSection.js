import { createCard } from './common/Card.js';

export function createNewsSection() {
  return `
    <div class="container my-5">
      <!-- Featured and Trending Section -->
      <div class="row g-4 mb-5">
        <div class="col-lg-8">
          ${createFeaturedNews()}
        </div>
        <div class="col-lg-4">
          ${createTrendingNews()}
        </div>
      </div>

      <!-- Latest News Section -->
      <div class="latest-news-section mb-5">
        <h2 class="section-title mb-4">
          <i class="bi bi-newspaper text-success me-2"></i>
          Últimas Notícias
        </h2>
        <div class="row g-4">
          <div class="col-lg-8">
            <div class="row g-4">
              ${createMainNews()}
            </div>
          </div>
          <div class="col-lg-4">
            ${createSideNews()}
          </div>
        </div>
      </div>
      
      <!-- Categories Section -->
      <div class="categories-section">
        <h3 class="section-title mb-4">
          <i class="bi bi-grid-3x3-gap-fill text-success me-2"></i>
          Explore por Categoria
        </h3>
        <div class="row g-4">
          ${createCategoryCards()}
        </div>
      </div>

      <!-- View More Button -->
      <div class="text-center mt-5">
        <a href="/noticias" class="btn btn-success btn-lg px-5" data-route="/noticias">
          <i class="bi bi-arrow-right-circle me-2"></i>
          Ver Todas as Notícias
        </a>
      </div>
    </div>
  `;
}

function createFeaturedNews() {
  return `
    <div class="featured-news position-relative rounded-4 overflow-hidden shadow-lg h-100">
      <img src="https://img.ge/i/7zCHH63.png" class="w-100 h-100 object-fit-cover" alt="Notícia em Destaque">
      <div class="featured-content position-absolute bottom-0 start-0 w-100 p-4 text-white" 
           style="background: linear-gradient(transparent, rgba(0,0,0,0.9));">
        <span class="badge bg-success mb-2">Destaque</span>
        <h3 class="mb-2">Meia Ponte Expedição</h3>
        <p class="mb-3">Estado se destaca em práticas ambientais e crescimento econômico sustentável.</p>
        <div class="d-flex align-items-center gap-3">
          <span><i class="bi bi-clock"></i> Há 20 Dias</span>
          <span><i class="bi bi-eye"></i> 9.2k visualizações</span>
          <a href="#" class="btn btn-sm btn-light">Ler mais</a>
        </div>
      </div>
    </div>
  `;
}

function createTrendingNews() {
  const trendingNews = [
    {
      title: "Davi Alcolumbre reassume presidência do Senado com apoio expressivo.",
      views: "1k",
      time: "Publicado em 18/04/2025 às 08h00"
    },
    {
      title: "IFG abre inscrições para cursos gratuitos de qualificação profissional",
      views: "1.8k",
      time: "Publicado em 17/04/2025 às 15h30"
    },
    {
      title: "Projeto “Goiás Mais Verde” atinge marca de 1 milhão de árvores plantadas",
      views: "1.5k",
      time: "Publicado em 17/04/2025 às 14h00"
    }
  ];

  return `
    <div class="trending-news bg-white rounded-4 shadow-lg p-4 h-100">
      <h4 class="mb-4">
        <i class="bi bi-graph-up-arrow text-success me-2"></i>
        Em Alta
      </h4>
      ${trendingNews.map((news, index) => `
        <div class="trending-item ${index < trendingNews.length - 1 ? 'border-bottom' : ''} py-3">
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
      `).join('')}
    </div>
  `;
}

function createMainNews() {
  const mainNews = [
    {
      title: "Bolsonaro réu por tentativa de golpe de Estado",
      description: "STF forma maioria e torna Bolsonaro réu por tentativa de golpe de Estado.Com decisão unânime, o ex-presidente agora enfrentará julgamento por sua atuação após as eleições de 2022. Entenda os próximos passos da justiça.",
      category: "Politica",
      date: "Publicado em 18/04/2025 às 08h00",
      image: "https://img.ge/i/sq6F346.jpeg"
    },
    {
      title: "Caiado dispara contra o governo Lula: Goiás está sendo perseguido!",
      description: "O governador do Estado denuncia ações federais que, segundo ele, têm prejudicado o desenvolvimento de Goiás.",
      category: "Politica",
      date: "Publicado em 18/04/2025 às 08h00",
      image: "https://img.ge/i/IcvXZ46.jpeg"
    }
  ];

  return mainNews.map(item => `
    <div class="col-md-6">
      ${createCard(item)}
    </div>
  `).join('');
}

function createSideNews() {
  const sideNews = [
    {
      title: "Linha de ônibus intermunicipal entre Goiânia e Trindade ganha mais horários",
      category: "Mobilidade",
      date: "Há 4 horas"
    },
    {
      title: "Feira do Empreendedor movimenta R$ 15 milhões em negócios em Goiânia",
      category: "Economia",
      date: "Há 5 horas"
    },
    {
      title: "Exposição “Arte do Cerrado” abre no Centro Cultural Oscar Niemeyer",
      category: "Cultura",
      date: "Há 6 horas"
    }
  ];

  return `
    <div class="side-news bg-white rounded-4 shadow-lg p-4">
      <h5 class="mb-4">Outras Notícias</h5>
      ${sideNews.map((news, index) => `
        <div class="side-news-item ${index < sideNews.length - 1 ? 'border-bottom' : ''} py-3">
          <span class="badge bg-${getCategoryColor(news.category)} mb-2">${news.category}</span>
          <h6 class="mb-2">${news.title}</h6>
          <small class="text-muted">
            <i class="bi bi-clock"></i> ${news.date}
          </small>
        </div>
      `).join('')}
    </div>
  `;
}

function createCategoryCards() {
  const categories = [
    { name: "Política", icon: "bi-award", color: "primary", route: "/politica" },
    { name: "Economia", icon: "bi-graph-up", color: "success", route: "/economia" },
    { name: "Esportes", icon: "bi-trophy", color: "warning", route: "/esportes" },
    { name: "Cultura", icon: "bi-palette", color: "info", route: "/cultura" }
  ];

  return categories.map(category => `
    <div class="col-md-3 col-sm-6">
      <a href="${category.route}" 
         class="card category-card text-decoration-none h-100 border-0 shadow-sm" 
         data-route="${category.route}">
        <div class="card-body text-center">
          <i class="bi ${category.icon} display-4 text-${category.color} mb-3"></i>
          <h5 class="card-title text-dark mb-0">${category.name}</h5>
        </div>
      </a>
    </div>
  `).join('');
}

function getCategoryColor(category) {
  const colors = {
    'Política': 'primary',
    'Economia': 'success',
    'Esportes': 'warning',
    'Cultura': 'info'
  };
  return colors[category] || 'secondary';
}
