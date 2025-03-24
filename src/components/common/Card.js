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
        <a href="${link || '#'}" class="btn btn-outline-success mt-auto">Ler mais</a>
      </div>
    </div>
  `;
}