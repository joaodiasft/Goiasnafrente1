export function scrollToTop(behavior = 'smooth') {
  window.scrollTo({ top: 0, behavior });
}

export function handleBackToTop() {
  const backToTop = document.querySelector('.back-to-top');
  if (!backToTop) return;

  const toggleBackToTop = () => {
    if (window.pageYOffset > 300) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  };

  window.addEventListener('scroll', toggleBackToTop);
  backToTop.addEventListener('click', () => scrollToTop());
}