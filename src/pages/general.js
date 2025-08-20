/**
 * Função principal que decide o que renderizar:
 * - Se a URL tiver um parâmetro como "?id=1", mostra a notícia completa.
 * - Caso contrário, mostra a lista de todas as notícias, agrupadas por categoria.
 */
export function createGeneralNewsPage() {
  // Pega os parâmetros da URL (ex: a parte depois do "?")
  const urlParams = new URLSearchParams(window.location.search);
  const newsId = urlParams.get('id'); // Tenta pegar um parâmetro chamado "id"

  if (newsId) {
    // Se encontrou um ID na URL, mostra a página da notícia específica
    return createFullNewsPage(parseInt(newsId)); // Converte o ID para número
  } else {
    // Se não, mostra a página principal com todas as notícias
    return `
      <div class="category-page">
        <div class="container py-5">
          <h1 class="section-title mb-5 text-center display-4">Todas as Notícias</h1>
          ${createGeneralNews()}
        </div>
      </div>
    `;
  }
}

/**
 * Gera o HTML para a lista de notícias, agora separadas por categoria.
 */
function createGeneralNews() {
  const allNews = [
    {
      id: 1,
      category: "Brasil",
      title: "Lula assina indulto natalino para presos com HIV e câncer",
      description: "Ficam de fora criminosos que atentaram contra o Estado Democrático de Direito, presos por crimes sexuais, e líderes de facções.",
      content: `
        <p>O presidente Luiz Inácio Lula da Silva assinou nesta terça-feira o tradicional indulto de Natal, que concede o perdão da pena a determinados presos. Neste ano, o decreto beneficia, entre outros, detentos com problemas graves de saúde, como HIV e câncer em estágio terminal.</p>
        <p>A medida, no entanto, estabelece critérios rigorosos e exclui condenados por crimes considerados de alta gravidade. Segundo o texto publicado no Diário Oficial da União, não terão direito ao benefício os presos por crimes que atentaram contra o Estado Democrático de Direito, crimes hediondos, sexuais, violência contra a mulher, abuso de autoridade e aqueles que ocupam posições de liderança em facções criminosas.</p>
        <p>O objetivo, segundo o Ministério da Justiça, é manter o caráter humanitário da medida sem conceder benefícios a criminosos que representam um risco elevado à sociedade.</p>
      `,
      image: "https://img.ge/ib/6SyURBEUjXJ29nu_1742909652.jpeg",
      date: "Há 1 hora"
    },
    {
      id: 2,
      category: "Brasil",
      title: "Com voto impresso, CCJ do Senado aprova novo Código Eleitoral",
      description: "Proposta, que vai ao plenário, cria cota de cadeiras para mulheres no Legislativo e 'quarentena' para que juízes e militares disputem eleições. Impressão de comprovantes de votação foi incluída pela oposição.",
      content: `
      A Comissão de Constituição e Justiça (CCJ) do Senado aprovou nesta quarta-feira (20) o projeto que atualiza e reúne uma série de legislações eleitorais.
<br>
Chamado de novo Código Eleitoral, a proposta consolida, renova e unifica, em uma única lei, diversas outras normas eleitorais. É, portanto, um apanhado de legislações.
<br>
O texto estabelece, entre outros pontos, uma regra de afastamento para que militares e juízes possam disputar eleições . Também cria uma cota que destina 20% das cadeiras do Legislativo para mulheres.
<br>
O projeto prevê proibições para o uso de inteligência artificial nas campanhas eleitorais. Buscando apoio da oposição, o relator do projeto, senador Marcelo Castro (MDB-PI), recuou de trechos que endureciam penas para mentiras no processo eleitoral, mas manteve as punições existentes. `,
      image: "https://i.ibb.co/TM1Tvf1B/imagem-2025-08-20-191528695.png",
      date: "Há 1 hora"
    },
    {
  id: 3,
  category: "Brasil",
  title: "Senado aprova novo Código Eleitoral com voto impresso",
  description: "Projeto unifica legislações eleitorais, cria cota para mulheres e cassa participação de juízes e militares.",
  content: "<p>A Comissão de Constituição e Justiça (CCJ) do Senado aprovou nesta quarta-feira (20) o projeto que atualiza e reúne uma série de legislações eleitorais.</p><p>Chamado de novo Código Eleitoral, a proposta consolida, renova e unifica, em uma única lei, diversas outras normas eleitorais.</p><p>O texto estabelece regras de afastamento para militares e juízes disputarem eleições e cria cota de 20% das cadeiras para mulheres.</p><p>Também proíbe uso de IA em campanhas eleitorais; o relator recuou em trechos que endureciam penas, mas manteve as existentes.</p>",
  image: "https://pbs.twimg.com/media/ElectionClimate.jpg",
  date: "Há 1 hora"
},
{
  id: 4,
  category: "Política",
  title: "Congresso aprova reforma administrativa após intensos debates",
  description: "Deputados e senadores aprovam reforma que altera regras para servidores públicos no Brasil.",
  content: "<p>O Congresso Nacional aprovou nesta quarta-feira a reforma administrativa que promete mudar as regras para contratação e progressão de servidores públicos.</p><p>A proposta prevê novas formas de avaliação de desempenho e busca reduzir gastos a longo prazo.</p><p>O texto gerou intensos debates entre parlamentares e setores da sociedade, dividindo opiniões sobre seus efeitos práticos.</p>",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Brazilian_Congress.jpg/640px-Brazilian_Congress.jpg",
  date: "Hoje"
},
{
  id: 5,
  category: "Política",
  title: "Presidente anuncia pacote de investimentos em infraestrutura",
  description: "Pacote prevê construção de rodovias, ferrovias e ampliação de portos estratégicos no país.",
  content: "<p>O presidente da República anunciou nesta segunda-feira um pacote de investimentos voltado para infraestrutura nacional.</p><p>Entre as medidas estão novas rodovias, expansão ferroviária e modernização de portos estratégicos.</p><p>A iniciativa busca atrair investidores estrangeiros e gerar milhares de empregos diretos e indiretos.</p>",
  image: "https://i.ibb.co/99DrMj7g/imagem-2025-08-20-195939715.png",
  date: "Hoje"
},
{
  id: 6,
  category: "Cultura",
  title: "Festival de Folclore reúne danças tradicionais no Centro Histórico",
  description: "Folguedos e danças típicas emocionam multidão em celebração à cultura regional.",
  content: "<p>No último fim de semana, o Festival de Folclore tomou conta do Centro Histórico da cidade, com apresentações de maracatu, bumba-meu-boi e quadrilhas juninas.</p><p>Comunidades tradicionais trouxeram seus grupos de folguedos para relembrar e celebrar as raízes culturais brasileiras.</p>",
  image: "https://unsplash.com/pt-br/s/fotografias/cultura-brasileira",
  date: "Hoje",
  site: "Goias na Frente"
},
{
  id: 7,
  category: "Cultura",
  title: "Bloco de carnaval alternativo traz ritmos de resistência",
  description: "Bloco promove ritmos como afoxé e maracatu como forma de resgate cultural e afirmação identitária.",
  content: "<p>No sábado, um bloco alternatiffo tomou as ruas da cidade, com bateria de afoxé e maracatu, reunindo centenas de pessoas em um cortejo vibrante.</p><p>Além da festa, o evento reforçou a importância da cultura afro-brasileira como resistência e identidade comunitária.</p>",
  image: "https://i.ibb.co/4xmhLnd/imagem-2025-08-20-195830720.png",
  date: "Há 3 dias",
  site: "Goias na Frente"
},
{
  id: 8,
  category: "Esportes",
  title: "Atletas goianos brilham nos Jogos Pan-Americanos",
  description: "Competidores de Goiás conquistam medalhas de ouro e prata no atletismo e na natação.",
  content: "<p>Os Jogos Pan-Americanos 2025 trouxeram grandes conquistas para o Brasil, e Goiás teve destaque especial. Atletas goianos subiram ao pódio no atletismo e na natação, reforçando a força do esporte regional.</p><p>As vitórias foram celebradas por familiares, torcedores e autoridades locais, que destacaram a importância do incentivo esportivo no estado.</p>",
  image: "https://s2-ge.glbimg.com/H24EVZ7sDgG2Mgd-BkN6UECUUpM=/0x0:2000x1333/984x0/smart/filters:strip_icc()/s.glbimg.com/es/ge/f/original/2023/10/23/gettyimages-1738568292.jpg",
  date: "Hoje",
  site: "Goias na Frente"
},
{
  id: 9,
  category: "Esportes",
  title: "Goianão 2025 tem recorde de público",
  description: "Clássico entre Goiás e Vila Nova atraiu mais de 40 mil torcedores ao estádio Serra Dourada.",
  content: "<p>O Campeonato Goiano 2025 registrou seu maior público na última década. O clássico entre Goiás e Vila Nova reuniu mais de 40 mil pessoas no estádio Serra Dourada.</p><p>A partida terminou empatada em 1 a 1, mas a festa nas arquibancadas foi o verdadeiro espetáculo, mostrando a paixão da torcida goiana pelo futebol local.</p>",
  image: "https://conteudo.imguol.com.br/c/esporte/33/2023/01/28/torcida-do-goias-no-serra-dourada-1674943549934_v2_900x506.jpg",
  date: "Hoje",
  site: "Goias na Frente"
},
{
  id: 10,
  category: "Economia",
  title: "Inflação brasileira registra leve queda em agosto de 2025",
  description: "IPCA aponta desaceleração, mas alimentos e transporte continuam pressionando os preços.",
  content: "<p>O Índice Nacional de Preços ao Consumidor Amplo (IPCA) apresentou uma leve queda em agosto de 2025, indicando um respiro no processo inflacionário.</p><p>No entanto, os setores de alimentos e transporte seguem como os principais vilões, mantendo a pressão sobre o bolso dos brasileiros.</p><p>Economistas alertam que, apesar da desaceleração, ainda há desafios para estabilizar a economia de forma sustentável.</p><p>O Banco Central reforçou o compromisso com a política de juros, enquanto o governo estuda medidas de estímulo à produção nacional.</p>",
  image: "https://economia.estadao.com.br/blogs/coluna-do-broad/wp-content/uploads/sites/246/2022/03/inflação.png",
  date: "Hoje",
  site: "Goias na Frente"
},
{
  id: 11,
  category: "Redes Sociais",
  title: "Instagram lança novos recursos de IA para criadores de conteúdo",
  description: "Ferramentas prometem aumentar o engajamento e personalizar experiências na plataforma.",
  content: "<p>O Instagram anunciou, em agosto de 2025, uma atualização com foco em inteligência artificial.</p><p>Entre os novos recursos estão assistentes de criação de posts, análise automatizada de engajamento e recomendações personalizadas para ampliar o alcance de publicações.</p><p>A Meta destacou que o objetivo é facilitar a vida dos criadores e tornar a rede mais interativa e intuitiva.</p><p>Especialistas, porém, alertam para o impacto ético do uso de IA, principalmente em relação à manipulação de dados e à privacidade dos usuários.</p>",
  image: "https://s2.glbimg.com/Bf4cvRfPpJ62pLrR2NoP4Edg2f0=/e.glbimg.com/og/ed/f/original/2023/08/24/inteligencia-artificial-instagram.jpg",
  date: "Hoje",
  site: "Goias na Frente"
}


  ];

  // 1. Acha todas as categorias únicas que existem nas notícias.
  const categories = [...new Set(allNews.map(news => news.category))];

  // 2. Gera o HTML para cada categoria.
  return categories.map(category => {
    // Filtra as notícias que pertencem a esta categoria
    const newsInCategory = allNews.filter(news => news.category === category);

    // Cria os cards para as notícias filtradas
    const newsCardsHTML = newsInCategory.map(news => `
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card news-card h-100 shadow-sm border-0 rounded-lg">
          <img src="${news.image}" class="card-img-top" alt="${news.title}" onerror="this.onerror=null;this.src='https://placehold.co/600x400/eeeeee/cccccc?text=Imagem';">
          <div class="card-body d-flex flex-column">
            <span class="badge bg-success align-self-start mb-2">${news.category}</span>
            <small class="text-muted">${news.date}</small>
            <h5 class="card-title mt-2">${news.title}</h5>
            <p class="card-text flex-grow-1">${news.description}</p>
            <!-- O link agora passa o ID da notícia na URL -->
            <a href="?id=${news.id}" class="btn btn-outline-success mt-auto">Ver materia completa</a>
          </div>
        </div>
      </div>
    `).join('');

    // Retorna a seção completa da categoria com título e cards
    return `
      <section class="mb-5">
        <h2 class="section-title h3 mb-4" style="border-left: 4px solid #198754; padding-left: 15px;">${category}</h2>
        <div class="row">
          ${newsCardsHTML}
        </div>
      </section>
    `;
  }).join('');
}

/**
 * Função auxiliar para criar a página de uma notícia completa.
 * Ela não é exportada, pois só é usada dentro deste arquivo.
 */
function createFullNewsPage(id) {
    // Simula a busca de todas as notícias para encontrar a correta
    // Em um projeto real, isso viria de um banco de dados ou API
    const allNews = [
        { id: 1, category: "Brasil", title: "Lula assina indulto natalino para presos com HIV e câncer", description: "...", content: `<p>O presidente Luiz Inácio Lula da Silva assinou o decreto do indulto natalino de 2024, que concede perdão da pena a presos que preencham critérios especificados no texto.
<br>
O indulto natalino, segundo a legislação brasileira, é um benefício concedido pelo presidente da República. Tradicionalmente, é oferecido por meio de um decreto presidencial, publicado no final do ano.
<br>
Entre os beneficiados de 2024 estão pessoas com HIV em estágio terminal, câncer avançado, doenças graves que limitam a mobilidade e mães de crianças pequenas.
<br>
No entanto, o decreto exclui delatores, líderes de facções criminosas e condenados por crimes considerados graves, como tráfico de drogas e corrupção.</p>`, image: "https://img.ge/ib/6SyURBEUjXJ29nu_1742909652.jpeg", date: "Há 30 dias", site:"Goias na Frete" },
        { id: 2, category: "Brasil", title: "Proposta, que vai ao plenário, cria cota de cadeiras para mulheres no Legislativo e 'quarentena' para que juízes e militares disputem eleições. Impressão de comprovantes de votação foi incluída pela oposição.", description: "...", content: `A Comissão de Constituição e Justiça (CCJ) do Senado aprovou nesta quarta-feira (20) o projeto que atualiza e reúne uma série de legislações eleitorais.
<br>
Chamado de novo Código Eleitoral, a proposta consolida, renova e unifica, em uma única lei, diversas outras normas eleitorais. É, portanto, um apanhado de legislações.
<br>
O texto estabelece, entre outros pontos, uma regra de afastamento para que militares e juízes possam disputar eleições . Também cria uma cota que destina 20% das cadeiras do Legislativo para mulheres.
<br>
O projeto prevê proibições para o uso de inteligência artificial nas campanhas eleitorais. Buscando apoio da oposição, o relator do projeto, senador Marcelo Castro (MDB-PI), recuou de trechos que endureciam penas para mentiras no processo eleitoral, mas manteve as punições existentes.`, image: "https://i.ibb.co/TM1Tvf1B/imagem-2025-08-20-191528695.png", date: "Há 20 dias" , site:"Goias na Frete"},
  {
  id: 3,
  category: "Brasil",
  title: "Senado aprova novo Código Eleitoral com voto impresso",
  description: "Projeto unifica legislações eleitorais, cria cota para mulheres e cassa participação de juízes e militares.",
  content: "<p>A Comissão de Constituição e Justiça (CCJ) do Senado aprovou nesta quarta-feira (20) o projeto que atualiza e reúne uma série de legislações eleitorais.</p><p>Chamado de novo Código Eleitoral, a proposta consolida, renova e unifica, em uma única lei, diversas outras normas eleitorais.</p><p>O texto estabelece regras de afastamento para militares e juízes disputarem eleições e cria cota de 20% das cadeiras para mulheres.</p><p>Também proíbe uso de IA em campanhas eleitorais; o relator recuou em trechos que endureciam penas, mas manteve as existentes.</p>",
  image: "https://pbs.twimg.com/media/ElectionClimate.jpg",
  date: "Há 1 hora", site:"Goias na Frete"
},
{
  id: 4,
  category: "Política",
  title: "Congresso aprova reforma administrativa após intensos debates",
  description: "Deputados e senadores aprovam reforma que altera regras para servidores públicos no Brasil.",
  content: "<p>O Congresso Nacional aprovou nesta quarta-feira a reforma administrativa que promete mudar as regras para contratação e progressão de servidores públicos.</p><p>A proposta prevê novas formas de avaliação de desempenho e busca reduzir gastos a longo prazo.</p><p>O texto gerou intensos debates entre parlamentares e setores da sociedade, dividindo opiniões sobre seus efeitos práticos.</p>",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Brazilian_Congress.jpg/640px-Brazilian_Congress.jpg",
  date: "Hoje",site:"Goias na Frete"
},
{
  id: 5,
  category: "Política",
  title: "Presidente anuncia pacote de investimentos em infraestrutura",
  description: "Pacote prevê construção de rodovias, ferrovias e ampliação de portos estratégicos no país.",
  content: "<p>O presidente da República anunciou nesta segunda-feira um pacote de investimentos voltado para infraestrutura nacional.</p><p>Entre as medidas estão novas rodovias, expansão ferroviária e modernização de portos estratégicos.</p><p>A iniciativa busca atrair investidores estrangeiros e gerar milhares de empregos diretos e indiretos.</p>",
  image: "https://i.ibb.co/99DrMj7g/imagem-2025-08-20-195939715.png",
  date: "Hoje",site:"Goias na Frete"
},
{
  id: 6,
  category: "Cultura",
  title: "Festival de Folclore reúne danças tradicionais no Centro Histórico",
  description: "Folguedos e danças típicas emocionam multidão em celebração à cultura regional.",
  content: "<p>No último fim de semana, o Festival de Folclore tomou conta do Centro Histórico da cidade, com apresentações de maracatu, bumba-meu-boi e quadrilhas juninas.</p><p>Comunidades tradicionais trouxeram seus grupos de folguedos para relembrar e celebrar as raízes culturais brasileiras.</p>",
  image: "https://unsplash.com/pt-br/s/fotografias/cultura-brasileira",
  date: "Hoje",
  site: "Goias na Frente"
},
{
  id: 7,
  category: "Cultura",
  title: "Bloco de carnaval alternativo traz ritmos de resistência",
  description: "Bloco promove ritmos como afoxé e maracatu como forma de resgate cultural e afirmação identitária.",
  content: "<p>No sábado, um bloco alternatiffo tomou as ruas da cidade, com bateria de afoxé e maracatu, reunindo centenas de pessoas em um cortejo vibrante.</p><p>Além da festa, o evento reforçou a importância da cultura afro-brasileira como resistência e identidade comunitária.</p>",
  image: "https://i.ibb.co/4xmhLnd/imagem-2025-08-20-195830720.png",
  date: "Há 3 dias",
  site: "Goias na Frente"
},
{
  id: 8,
  category: "Esportes",
  title: "Atletas goianos brilham nos Jogos Pan-Americanos",
  description: "Competidores de Goiás conquistam medalhas de ouro e prata no atletismo e na natação.",
  content: "<p>Os Jogos Pan-Americanos 2025 trouxeram grandes conquistas para o Brasil, e Goiás teve destaque especial. Atletas goianos subiram ao pódio no atletismo e na natação, reforçando a força do esporte regional.</p><p>As vitórias foram celebradas por familiares, torcedores e autoridades locais, que destacaram a importância do incentivo esportivo no estado.</p>",
  image: "https://s2-ge.glbimg.com/H24EVZ7sDgG2Mgd-BkN6UECUUpM=/0x0:2000x1333/984x0/smart/filters:strip_icc()/s.glbimg.com/es/ge/f/original/2023/10/23/gettyimages-1738568292.jpg",
  date: "Hoje",
  site: "Goias na Frente"
},
{
  id: 9,
  category: "Esportes",
  title: "Goianão 2025 tem recorde de público",
  description: "Clássico entre Goiás e Vila Nova atraiu mais de 40 mil torcedores ao estádio Serra Dourada.",
  content: "<p>O Campeonato Goiano 2025 registrou seu maior público na última década. O clássico entre Goiás e Vila Nova reuniu mais de 40 mil pessoas no estádio Serra Dourada.</p><p>A partida terminou empatada em 1 a 1, mas a festa nas arquibancadas foi o verdadeiro espetáculo, mostrando a paixão da torcida goiana pelo futebol local.</p>",
  image: "https://conteudo.imguol.com.br/c/esporte/33/2023/01/28/torcida-do-goias-no-serra-dourada-1674943549934_v2_900x506.jpg",
  date: "Hoje",
  site: "Goias na Frente"
},
{
  id: 10,
  category: "Economia",
  title: "Inflação brasileira registra leve queda em agosto de 2025",
  description: "IPCA aponta desaceleração, mas alimentos e transporte continuam pressionando os preços.",
  content: "<p>O Índice Nacional de Preços ao Consumidor Amplo (IPCA) apresentou uma leve queda em agosto de 2025, indicando um respiro no processo inflacionário.</p><p>No entanto, os setores de alimentos e transporte seguem como os principais vilões, mantendo a pressão sobre o bolso dos brasileiros.</p><p>Economistas alertam que, apesar da desaceleração, ainda há desafios para estabilizar a economia de forma sustentável.</p><p>O Banco Central reforçou o compromisso com a política de juros, enquanto o governo estuda medidas de estímulo à produção nacional.</p>",
  image: "https://economia.estadao.com.br/blogs/coluna-do-broad/wp-content/uploads/sites/246/2022/03/inflação.png",
  date: "Hoje",
  site: "Goias na Frente"
},
{
  id: 11,
  category: "Redes Sociais",
  title: "Instagram lança novos recursos de IA para criadores de conteúdo",
  description: "Ferramentas prometem aumentar o engajamento e personalizar experiências na plataforma.",
  content: "<p>O Instagram anunciou, em agosto de 2025, uma atualização com foco em inteligência artificial.</p><p>Entre os novos recursos estão assistentes de criação de posts, análise automatizada de engajamento e recomendações personalizadas para ampliar o alcance de publicações.</p><p>A Meta destacou que o objetivo é facilitar a vida dos criadores e tornar a rede mais interativa e intuitiva.</p><p>Especialistas, porém, alertam para o impacto ético do uso de IA, principalmente em relação à manipulação de dados e à privacidade dos usuários.</p>",
  image: "https://s2.glbimg.com/Bf4cvRfPpJ62pLrR2NoP4Edg2f0=/e.glbimg.com/og/ed/f/original/2023/08/24/inteligencia-artificial-instagram.jpg",
  date: "Hoje",
  site: "Goias na Frente"
},


 ];

    const news = allNews.find(item => item.id === id);

    if (!news) {
        return `
            <div class="container py-5 text-center">
                <h1 class="display-4">Erro 404</h1>
                <p class="lead">Notícia não encontrada.</p>
                <a href="/" class="btn btn-success">Voltar para a página inicial</a>
            </div>
        `;
    }

    return `
        <div class="full-news-page">
            <div class="container py-5">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <a href="/noticias" class="btn btn-outline-secondary mb-4"><i class="bi bi-arrow-left"></i> Voltar</a>
                        <h1 class="display-5 mb-3">${news.title}</h1>
                        <p class="text-muted">Publicado ${news.date}</p>
                        <hr>
                        <img src="${news.image}" class="img-fluid rounded my-4" alt="${news.title}" onerror="this.onerror=null;this.src='https://placehold.co/800x500/eeeeee/cccccc?text=Imagem';">
                        <div class="news-content" style="line-height: 1.7; font-size: 1.1rem;">
                            ${news.content}
                        </div>
                        <div class="news-content" style="line-height: 1.5; font-size: 1.1rem; color: green">
                            ${news.site}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
