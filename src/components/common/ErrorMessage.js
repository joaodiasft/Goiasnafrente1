export function createErrorMessage(message = 'Ocorreu um erro ao carregar o conteúdo.') {
  return `
    <div class="alert alert-danger text-center my-5" role="alert">
      <i class="bi bi-exclamation-triangle-fill me-2"></i>
      ${message}
      <button type="button" class="btn btn-outline-danger ms-3" onclick="window.location.reload()">
        Tentar novamente
      </button>
    </div>
  `;
}