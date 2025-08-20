/**
 * Cria o HTML para um card de notícia E o seu modal correspondente.
 * @param {object} props - Propriedades do card.
 * @param {string} props.id - ID único para a notícia (ex: 'news-1').
 * @param {string} props.title - O título da notícia.
 * @param {string} props.description - A descrição curta que aparece no card.
 * @param {string} props.fullContent - O conteúdo HTML completo para aparecer no modal.
 * @param {string} props.image - URL da imagem.
 * @param {string} props.date - Data da publicação.
 * @param {string} props.category - Categoria da notícia.
 * @param {string} props.site - Categoria da notícia.
 */
export function createCard({ id, title, description, fullContent, image, date, category ,site }) {
  // O ID do modal precisa ser único, então usamos o ID da notícia.
  const modalId = `modal-${id}`;

  return `
    <div class="col-md-25 mb-4">
      <div class="card news-card h-100 shadow-sm">
        <div class="position-relative">
          <img src="${image}" class="card-img-top" alt="${title}" onerror="this.onerror=null;this.src='https://placehold.co/600x400';">
          ${category ? `<span class="badge bg-success position-absolute top-0 end-0 m-2">${category}</span>` : ''}
        </div>
        <div class="card-body d-flex flex-column">
          ${date ? `<small class="text-muted mb-2">${date}</small>` : ''}
          <h5 class="card-title">${title}</h5>
          <p class="card-text flex-grow-1">${description}</p>
          <button type="button" class="btn btn-outline-success mt-auto" data-bs-toggle="modal" data-bs-target="#${modalId}">
            Ler mais
          </button>
        </div>
      </div>
    </div>

    <div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="${modalId}Label" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="${modalId}Label">${title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <img src="${image}" class="img-fluid rounded mb-3" alt="${title}" onerror="this.onerror=null;this.src='https://placehold.co/800x500';">
            <p class="text-muted">${date}</p>
            <hr>
            ${fullContent}
          </div>
          <div>${site}</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
          </div>
        </div>
      </div>
    </div>
  `;
}
