export function createGeneralNewsPage() {
  return `
    <div class="category-page">
      <div class="container py-5">
        <h1 class="section-title mb-4">Notícias Gerais</h1>
        <div class="row g-4">
          ${createGeneralNews()}
        </div>
      </div>
    </div>
  `;
}

function createGeneralNews() {
  const generalNews = [
    {
      title: "Lula assina indulto natalino para presos com HIV e câncer",
      description: "Ficam de foram criminosos que atentaram contra o Estado Democrático de Direito, presos por crimes sexuais, abuso de autoridade, violência contra à mulher e líderes de facções.",
      image: "ng1.jpeg",
      date: "Há 1 hora"
    },
    {
      title: "Sandro Mabel anuncia 3 novos secretários para seu governo em Goiânia",
      description: "Prefeito eleito nomeia Eerizânia Freitas como chefe da Assistência Social, Zilma Percussor para presidente da AMA e Uugton Batista à frente da Cultura.",
      image: "ng2.jpeg",
      date: "Há 3 horas"
    },
    {
      title: "Caldas Novas institui taxa de turismo com valores entre 5 e 183 reais",
      description: "Prefeito reeleito Kleber Marra (MDB) sancionou texto aprovado pelos vereadores sob justificativa de investir valor arrecadado na preservação do meio ambiente e infraestrutura.",
      image: "ng3.jpg",
      date: "Há 5 horas"
    }
  ];

  return generalNews.map(news => `
    <div class="col-md-4">
      <div class="card news-card h-100">
        <img src="${news.image}" class="card-img-top" alt="${news.title}">
        <div class="card-body">
          <small class="text-muted">${news.date}</small>
          <h5 class="card-title mt-2">${news.title}</h5>
          <p class="card-text">${news.description}</p>
          <a href="#" class="btn btn-outline-success mt-auto">Ler mais</a>
        </div>
      </div>
    </div>
  `).join('');
}