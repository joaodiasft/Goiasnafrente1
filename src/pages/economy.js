export function createEconomyPage() {
  return `
    <div class="category-page">
      <div class="container py-5">
        <h1 class="section-title mb-4">Economia</h1>
        <div class="row g-4">
          ${createEconomyNews()}
        </div>
      </div>
    </div>
  `;
}

function createEconomyNews() {
  const economyNews = [
    {
      title: "IPVA: 15 de janeiro é data limite para desconto de 8%",
      description: "Secretaria da Economia anuncia que, a partir de 2025, o calendário para pagamento começa na mesma data para todos os finais de placas.",
      image: "ec1.jpg",
      date: "Há 1 hora"
    },
    {
      title: "Economia de Goiás cresce 5,5% em outubro",
      description: "Prévia do Produto Interno Bruto (PIB), Índice de Atividade Econômica Regional (IBCR) considera a produção dos setores de agricultura, indústria e serviços.",
      image: "ec2.jpeg",
      date: "Há 3 horas"
    },
    {
      title: "Sanear 2024 é prorrogado até 31 de dezembro",
      description: "Descontos são de até 95% sobre multa, juros e atualização monetária. Negociação vale para faturas em aberto até maio de 2024.",
      image: "ec3.jpg",
      date: "Há 5 horas"
    }
  ];

  return economyNews.map(news => `
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