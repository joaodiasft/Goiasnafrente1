export function createInstagramPage() {
  return `
    <div class="instagram-page py-5">
      <div class="container">
        <div class="text-center mb-5">
          <i class="bi bi-instagram display-1 text-success"></i>
          <h1 class="section-title mt-4">@goiasnafrenteoficial_</h1>
          <p class="lead mb-4">Siga-nos no Instagram para conteúdo exclusivo e atualizações em tempo real</p>
          <div class="d-flex justify-content-center gap-3 mb-5">
            <div class="text-center">
              <h3 class="fw-bold mb-1">9K+</h3>
              <p class="text-muted">Seguidores</p>
            </div>
            <div class="text-center">
              <h3 class="fw-bold mb-1">350+</h3>
              <p class="text-muted">Posts</p>
            </div>
            <div class="text-center">
              <h3 class="fw-bold mb-1">85%</h3>
              <p class="text-muted">Engajamento</p>
            </div>
          </div>
          <a href="https://instagram.com/goiasnafrenteoficial_" 
             target="_blank" 
             class="btn btn-success btn-lg px-5">
            <i class="bi bi-instagram me-2"></i>
            Seguir no Instagram
          </a>
        </div>
        
        <div class="row g-4">
          ${createInstagramFeed()}
        </div>

        <div class="instagram-highlights mt-5">
          <h3 class="section-title mb-4">Destaques</h3>
          <div class="row g-4">
            ${createInstagramHighlights()}
          </div>
        </div>

        <div class="instagram-reels mt-5">
          <h3 class="section-title mb-4">Reels em Destaque</h3>
          <div class="row g-4">
            ${createInstagramReels()}
          </div>
        </div>
      </div>
    </div>
  `;
}

function createInstagramFeed() {
  const posts = [
    {
      image: "https://picsum.photos/600/600?random=1",
      likes: "2.5k",
      comments: "328",
      description: "Entrevista exclusiva com o governador sobre os novos projetos para Goiás 🎯",
      hashtags: "#Goiás #Política #Desenvolvimento"
    },
    {
      image: "https://picsum.photos/600/600?random=2",
      likes: "1.8k",
      comments: "245",
      description: "Festival Villa Mix 2024 promete ser o maior de todos os tempos! 🎵",
      hashtags: "#VillaMix #Goiânia #Música"
    },
    {
      image: "https://picsum.photos/600/600?random=3",
      likes: "3.2k",
      comments: "412",
      description: "Conheça as belezas naturais do Parque Nacional da Chapada dos Veadeiros 🌿",
      hashtags: "#Turismo #ChapadadosVeadeiros #Natureza"
    },
    {
      image: "https://picsum.photos/600/600?random=4",
      likes: "1.9k",
      comments: "267",
      description: "Pequi: o ouro amarelo do cerrado goiano 🥘",
      hashtags: "#Gastronomia #Cultura #Goiás"
    },
    {
      image: "https://picsum.photos/600/600?random=5",
      likes: "2.1k",
      comments: "289",
      description: "Goiânia: a capital do sertanejo e do desenvolvimento 🌆",
      hashtags: "#Goiânia #Desenvolvimento #Cultura"
    },
    {
      image: "https://picsum.photos/600/600?random=6",
      likes: "2.7k",
      comments: "356",
      description: "Bastidores da cobertura especial sobre o agronegócio em Goiás 📱",
      hashtags: "#Agronegócio #Economia #Goiás"
    }
  ];

  return posts.map(post => `
    <div class="col-lg-4 col-md-6">
      <div class="instagram-post card border-0 shadow-sm h-100">
        <div class="position-relative">
          <img src="${post.image}" class="card-img-top" alt="Instagram post">
          <div class="instagram-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
            <div class="d-flex gap-4 text-white">
              <span><i class="bi bi-heart-fill"></i> ${post.likes}</span>
              <span><i class="bi bi-chat-fill"></i> ${post.comments}</span>
            </div>
          </div>
        </div>
        <div class="card-body">
          <p class="card-text">${post.description}</p>
          <p class="text-muted small">${post.hashtags}</p>
        </div>
      </div>
    </div>
  `).join('');
}

function createInstagramHighlights() {
  const highlights = [
    {
      title: "Política",
      icon: "award",
      stories: 15
    },
    {
      title: "Esportes",
      icon: "trophy",
      stories: 12
    },
    {
      title: "Cultura",
      icon: "music-note",
      stories: 18
    },
    {
      title: "Economia",
      icon: "graph-up",
      stories: 10
    }
  ];

  return highlights.map(highlight => `
    <div class="col-md-3 col-6">
      <div class="highlight-item text-center">
        <div class="highlight-circle mb-3 mx-auto">
          <i class="bi bi-${highlight.icon} display-6"></i>
        </div>
        <h5 class="mb-1">${highlight.title}</h5>
        <p class="text-muted small">${highlight.stories} stories</p>
      </div>
    </div>
  `).join('');
}

function createInstagramReels() {
  const reels = [
    {
      thumbnail: "CAMARA_EXPEDICAO_300x500px.gif",
      title: "Camara de Expedição",
      views: "50k",
      duration: "0:59"
    },
    {
      thumbnail: "C:\Users\joaod\Downloads\goiasnafrente-main\goiasnafrente-main\src\pages\CAMARA_EXPEDICAO_300x500px.gif",
      title: "Bastidores do Goiás x Vila Nova",
      views: "45k",
      duration: "0:45"
    },
    {
      thumbnail: "\src\pages\CAMARA_EXPEDICAO_300x500px.gif",
      title: "Festival Gastronômico de Goiás",
      views: "38k",
      duration: "0:52"
    }
  ];

  return reels.map(reel => `
    <div class="col-lg-4">
      <div class="reel-item position-relative">
        <img src="${reel.thumbnail}" class="w-100 rounded-4" alt="${reel.title}">
        <div class="reel-overlay position-absolute bottom-0 start-0 w-100 p-3 text-white">
          <h6 class="mb-2">${reel.title}</h6>
          <div class="d-flex justify-content-between align-items-center">
            <span><i class="bi bi-play-fill"></i> ${reel.views}</span>
            <span>${reel.duration}</span>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}