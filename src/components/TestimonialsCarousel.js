export function createTestimonialsCarousel() {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Leitora há 5 anos",
      text: "O Goiás na Frente é minha fonte diária de informação. Confio na credibilidade e na qualidade das reportagens.",
      image: "https://picsum.photos/100/100?random=1"
    },
    {
      name: "João Santos",
      role: "Empresário",
      text: "Excelente cobertura econômica. As análises ajudam muito nas decisões do meu negócio.",
      image: "https://picsum.photos/100/100?random=2"
    },
    {
      name: "Ana Oliveira",
      role: "Professora",
      text: "Adoro a seção cultural! Sempre me mantenho atualizada sobre os eventos da cidade.",
      image: "https://picsum.photos/100/100?random=3"
    }
  ];

  return `
    <section class="testimonials-section py-5 bg-light">
      <div class="container">
        <h2 class="section-title text-center mb-5">O Que Dizem Nossos Leitores</h2>
        <div id="testimonialCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            ${testimonials.map((testimonial, index) => `
              <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <div class="testimonial-card text-center">
                  <img src="${testimonial.image}" class="rounded-circle mb-3 testimonial-img" alt="${testimonial.name}">
                  <div class="testimonial-text">
                    <p class="lead mb-3">"${testimonial.text}"</p>
                    <h5 class="mb-1">${testimonial.name}</h5>
                    <p class="text-muted">${testimonial.role}</p>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
            <span class="visually-hidden">Anterior</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
            <span class="visually-hidden">Próximo</span>
          </button>
        </div>
      </div>
    </section>
  `;
}