export function createFooter() {
  return `
    <footer class="footer bg-dark text-white py-5">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-4">
            <h5 class="text-success fw-bold mb-4">GOIÁS NA FRENTE</h5>
            <p class="mb-4">Seu portal de notícias mais completo sobre o estado de Goiás, trazendo informação de qualidade e credibilidade desde 1970.</p>
            <div class="social-icons d-flex gap-3">
              <a href="https://facebook.com/goiasnafrenteoficial" class="text-white fs-4" target="_blank" title="Facebook">
                <i class="bi bi-facebook"></i>
              </a>
              <a href="https://twitter.com/goiasnafrenteoficial" class="text-white fs-4" target="_blank" title="Twitter">
                <i class="bi bi-twitter-x"></i>
              </a>
              <a href="https://instagram.com/goiasnafrenteoficial" class="text-white fs-4" target="_blank" title="Instagram">
                <i class="bi bi-instagram"></i>
              </a>
              <a href="https://youtube.com/goiasnafrenteoficial" class="text-white fs-4" target="_blank" title="YouTube">
                <i class="bi bi-youtube"></i>
              </a>
            </div>
          </div>
          
          <div class="col-lg-4">
            <h5 class="text-success fw-bold mb-4">SEÇÕES</h5>
            <div class="row">
              <div class="col-6">
                <ul class="list-unstyled">
                  <li class="mb-2">
                    <a href="/politica" class="text-white text-decoration-none hover-success" data-route="/politica">
                      <i class="bi bi-chevron-right text-success"></i> Política
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="/economia" class="text-white text-decoration-none hover-success" data-route="/economia">
                      <i class="bi bi-chevron-right text-success"></i> Economia
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="/esportes" class="text-white text-decoration-none hover-success" data-route="/esportes">
                      <i class="bi bi-chevron-right text-success"></i> Esportes
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-6">
                <ul class="list-unstyled">
                  <li class="mb-2">
                    <a href="/cultura" class="text-white text-decoration-none hover-success" data-route="/cultura">
                      <i class="bi bi-chevron-right text-success"></i> Cultura
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="/noticias" class="text-white text-decoration-none hover-success" data-route="/noticias">
                      <i class="bi bi-chevron-right text-success"></i> Notícias
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="/instagram" class="text-white text-decoration-none hover-success" data-route="/instagram">
                      <i class="bi bi-chevron-right text-success"></i> Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4">
            <h5 class="text-success fw-bold mb-4">FIQUE POR DENTRO</h5>
            <p class="mb-4">Entre para nosso grupo no WhatsApp e receba as principais notícias em primeira mão:</p>
            <a href="https://chat.whatsapp.com/goiasnafrenteoficial" 
               target="_blank" 
               class="btn btn-success btn-lg w-100 mb-4">
              <i class="bi bi-whatsapp me-2"></i>
              Entrar no Grupo
            </a>
            <div class="newsletter-form">
              <p class="mb-3">Ou cadastre seu e-mail para receber nossa newsletter:</p>
              <div class="input-group">
                <input type="email" 
                       class="form-control form-control-lg" 
                       placeholder="Seu melhor e-mail"
                       aria-label="Seu melhor e-mail">
                <button class="btn btn-success btn-lg">
                  <i class="bi bi-send-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <hr class="my-4 border-secondary">
        
        <div class="row align-items-center">
          <div class="col-md-6 text-center text-md-start">
            <p class="mb-0">© ${new Date().getFullYear()} Goiás na Frente. Todos os direitos reservados.</p>
          </div>
          <div class="col-md-6 text-center text-md-end mt-3 mt-md-0">
            <a href="#" class="text-white text-decoration-none me-3">Política de Privacidade</a>
            <a href="#" class="text-white text-decoration-none">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}