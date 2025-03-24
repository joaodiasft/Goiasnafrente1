export function createHeader() {
  return `
    <nav class="navbar navbar-expand-lg navbar-custom">
      <div class="container">
        <a class="navbar-brand" href="/" data-route="/">
          <strong>GOIÁS NEWS</strong>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="/" data-route="/">Início</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/politica" data-route="/politica">Política</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/esportes" data-route="/esportes">Esportes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/economia" data-route="/economia">Economia</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/cultura" data-route="/cultura">Cultura</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/noticias" data-route="/noticias">Notícias Gerais</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/instagram" data-route="/instagram">
                <i class="bi bi-instagram"></i> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;
}