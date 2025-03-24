export function createLoadingSpinner() {
  return `
    <div class="d-flex justify-content-center my-5">
      <div class="spinner-border text-success" role="status">
        <span class="visually-hidden">Carregando...</span>
      </div>
    </div>
  `;
}