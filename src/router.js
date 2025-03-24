export function initRouter() {
  const routes = {
    '/': 'home',
    '/esportes': 'sports',
    '/cultura': 'culture',
    '/economia': 'economy',
    '/politica': 'politics',
    '/noticias': 'general',
    '/instagram': 'instagram'
  };

  function handleRoute() {
    const path = window.location.pathname;
    const page = routes[path] || 'home';
    window.loadPage(page);
  }

  window.addEventListener('popstate', handleRoute);
  document.addEventListener('click', e => {
    const routeLink = e.target.closest('[data-route]');
    if (routeLink) {
      e.preventDefault();
      const route = routeLink.getAttribute('data-route');
      history.pushState({}, '', route);
      handleRoute();
    }
  });

  // Initial route
  handleRoute();
}