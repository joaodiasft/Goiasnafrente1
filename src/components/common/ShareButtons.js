export function createShareButtons(url, title) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return `
    <div class="share-buttons mt-4">
      <span class="me-2">Compartilhe:</span>
      <a href="https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}" 
         target="_blank" 
         class="btn btn-sm btn-outline-primary me-2">
        <i class="bi bi-facebook"></i>
      </a>
      <a href="https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}" 
         target="_blank" 
         class="btn btn-sm btn-outline-dark me-2">
        <i class="bi bi-twitter-x"></i>
      </a>
      <a href="https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}" 
         target="_blank" 
         class="btn btn-sm btn-outline-success me-2">
        <i class="bi bi-whatsapp"></i>
      </a>
      <a href="https://telegram.me/share/url?url=${encodedUrl}&text=${encodedTitle}" 
         target="_blank" 
         class="btn btn-sm btn-outline-info">
        <i class="bi bi-telegram"></i>
      </a>
    </div>
  `;
}