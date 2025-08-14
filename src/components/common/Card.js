export function createCard({ title, description, image, date, category, link }) {
  return `
    <div class="card news-card h-100">
      <div class="position-relative">
        <img src="${image}" class="card-img-top" alt="${title}">
        ${category ? `<span class="badge bg-success position-absolute top-0 end-0 m-2">${category}</span>` : ''}
      </div>
      <div class="card-body d-flex flex-column">
        ${date ? `<small class="text-muted mb-2">${date}</small>` : ''}
        <h5 class="card-title">${title}</h5>
        <p class="card-text flex-grow-1">${description}</p>
        <a href="${link || 'https://portal.al.go.leg.br/?fbclid=PAQ0xDSwMK3ZJleHRuA2FlbQIxMQABp6hsqpHFoh3r9k2TSymMKNc9_J_E-zrWivR_ZsF5tFOVLUYqgvG2bK0fQ_vA_aem_R3xQKs2CDXxlesqQu7W2aQ'}" class="btn btn-outline-success mt-auto">Ler mais</a>
      </div>
    </div>
  `;
}
