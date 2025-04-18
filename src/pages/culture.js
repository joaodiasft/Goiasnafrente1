export function createCulturePage() {
  return `
    <div class="category-page">
      <div class="container py-5">
        <h1 class="section-title mb-4">Cultura</h1>
        <div class="row g-4">
          ${createCultureNews()}
        </div>
      </div>
    </div>
  `;
}

function createCultureNews() {
  const cultureNews = [
    {
      title: "Ossadas com mais de 200 anos são descobertas durante restauração de Igreja em Jaraguá",
      description: "Cerca de 150 sepultamentos foram encontrados no local. A obra de restauração está sendo executada pelo Governo de Goiás e a previsão é de que seja concluída em 2025 A restauração da Igreja Nossa Senhora do Rosário dos Pretos, em Jaraguá, culminaram em uma importante descoberta arqueológica.",
      image: "https://img.ge/ib/7CGeYNU19wjXKZB_1742909706.jpeg",
      date: "Há 5 horas"
    },
    {
      title: "Governo de Goiás paga todos os editais da Pnab 2024",
      description: "Estado é o primeiro do país a finalizar os pagamentos aos proponentes aprovados e aptos a receber no certame O Governo de Goiás, por meio da Secretaria de Estado da Cultura (Secult), finalizou nesta semana os pagamentos aos proponentes aprovados e aptos a receber nos editais da Política",
      image: "https://img.ge/ib/LHZQXAiagFHI1rX_1742909706.jpeg",
      date: "Há 4 horas"
    },
    {
      title: "Secult Goiás divulga funcionamento dos espaços culturais durante os feriados de fim de ano",
      description: "Unidades fecham de 21 a 25 de dezembro e de 28 de dezembro a 1º de janeiro. Programações retornam no início de janeiro Os espaços culturais administrados pela Secretaria de Estado da Cultura de Goiás (Secult) terão alterações no funcionamento durante os feriados de fim de ano.",
      image: "https://img.ge/ib/oudpEGONVFbn1dL_1742909706.jpg",
      date: "Há 6 horas"
    },
    {
      title: "Secult Goiás convoca suplentes do edital de Pontos de Cultura da Lei Paulo Gustavo",
      description: "A Secretaria de Estado da Cultura (Secult) divulga o chamamento de suplentes para a entrega da documentação dos projetos culturais da Lei Paulo Gustavo 2023, conforme publicação do Diário Oficial do Estado (DOE) desta quinta-feira (19/12). Nesta convocação, foram chamados suplentes para o edital nº 20.",
      image: "https://img.ge/ib/mbxy5NtS8274wWP_1742909706.jpeg",
      date: "Há 6 horas"
    },
    {
      title: "A NATUREZA CHAMA! ",
      description: "Vem aí a 3ª Expedição Rio Meia Ponte! Uma jornada de consciência ambiental, aventura e ação em defesa do nosso maior patrimônio natural! 🌎",
      image: "https://img.ge/i/kcTnb84.png",
      date: "Publicada 25/03/2025"
    }
  ];

  return cultureNews.map(news => `
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
