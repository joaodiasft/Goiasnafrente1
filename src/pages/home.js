import { createNewsSection } from '../components/NewsSection.js';
import { createWeatherWidget } from '../components/WeatherWidget.js';
import { createTestimonialsCarousel } from '../components/TestimonialsCarousel.js';

export function createHomePage() {
  return `
    <main>
      <!-- Welcome Section -->
      <section class="hero-section py-5 bg-success text-white">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-8">
              <h1 class="display-4 fw-bold mb-4">Bem-vindo ao Goiás na Frente</h1>
              <p class="lead mb-4">Seu portal de notícias mais completo sobre o estado de Goiás, trazendo informação de qualidade e credibilidade.</p>
              <div class="d-flex gap-3">
                <a href="/noticias" class="btn btn-light btn-lg" data-route="/noticias">
                  Últimas Notícias
                </a>
                <a href="https://instagram.com/goiasnafrenteoficial_" class="btn btn-outline-light btn-lg" data-route="/instagram">
                  Siga-nos no Instagram
                </a>
              </div>
            </div>
            <div class="col-lg-4">
              ${createWeatherWidget()}
            </div>
          </div>
        </div>
      </section>

      <!-- Breaking News -->
      <div class="breaking-news py-2 bg-dark text-white">
        <div class="container">
          <div class="d-flex align-items-center">
            <span class="badge bg-danger me-3">URGENTE</span>
            <marquee behavior="scroll" direction="left" onmouseover="this.stop();" onmouseout="this.start();">
              Última hora: Casal da Cidade de Goiás morre em acidente de automóvel na GO-154 em Ceres - GO | 
              Saúde alerta para importância da vacina contra influenza | 
              Caseiro é encontrado morto e com corpo devorado por porcos |
              Caiado acompanha envio de donativos ao RS e lança temporada Mais Araguaia 2024 |
              Prefeito de Senador Canedo anuncia apoio à reeleição de Ronaldo Caiado.
            </marquee>
          </div>
        </div>
      </div>

      <!-- News Sections -->
      ${createNewsSection()}

      <!-- Testimonials -->
      ${createTestimonialsCarousel()}

      <!-- Newsletter Section -->
      <section class="newsletter-section py-5 bg-light">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8 text-center">
              <h2 class="section-title mb-4">Fique por Dentro das Novidades</h2>
              <p class="lead mb-4">Receba as principais notícias de Goiás diretamente no seu e-mail.</p>
              <form class="newsletter-form d-flex gap-2 justify-content-center">
                <input type="email" class="form-control form-control-lg" style="max-width: 400px;" placeholder="Seu melhor e-mail">
                <button type="submit" class="btn btn-success btn-lg">
                  Inscrever-se
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
}