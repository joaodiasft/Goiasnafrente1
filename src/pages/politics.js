export function createPoliticsPage() {
  return `
    <div class="category-page">
      <div class="container py-5">
        <h1 class="section-title mb-4">Política</h1>
        <div class="row g-4">
          ${createPoliticsNews()}
        </div>
      </div>
    </div>
  `;
}

function createPoliticsNews() {
  const politicsNews = [
    {
      title: "Alerta de fofura: bebês do Hospital de Luziânia posam pra sessão de fotos natalinas",
      description: "Mamães e seus recém-nascidos celebram o espírito natalino em um momento especial de ternura e humanização promovido pela equipe da maternidade.",
      image: "po1.jpeg",
      date: "Há 2 horas"
    },
    {
      title: "Agência Virtual da Saneago atende 24 horas por dia",
      description: "Clientes podem, por exemplo, solicitar reparos em vazamentos de água e desobstrução de esgotos pelo site, sem necessidade de login, todos os dias da semana, em qualquer horário.",
      image: "po2.jpg",
      date: "Há 4 horas"
    },
    {
      title: "Policiamento Rodoviário intensifica ações no fim de ano em Goiás",
      description: "Operação busca garantir segurança nas rodovias goianas frente ao aumento do fluxo de veículos no período de festas e férias escolares.",
      image: "po3.jpeg",
      date: "Há 6 horas"
    }
  ];

  return politicsNews.map(news => `
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