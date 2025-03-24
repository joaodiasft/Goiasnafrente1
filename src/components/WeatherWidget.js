import { getCurrentWeather, getForecast } from '../utils/weatherService.js';

export function createWeatherWidget() {
  const weather = getCurrentWeather();
  const forecast = getForecast();

  return `
    <div class="weather-widget bg-white rounded-4 shadow-lg p-4">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h5 class="d-flex align-items-center gap-2 mb-0 text-dark">
          <i class="bi bi-geo-alt-fill text-success"></i>
          Clima em Goiânia
        </h5>
        <span class="badge bg-success">Agora</span>
      </div>
      
      <div class="weather-info d-flex align-items-center gap-4 mb-4">
        <div class="weather-icon-large">
          <i class="bi bi-sun-fill display-1 text-warning"></i>
        </div>
        <div class="weather-temp text-dark">
          <h1 class="display-4 fw-bold mb-0">${weather.temp}°C</h1>
          <div class="d-flex align-items-center gap-2">
            <span class="text-success">
              <i class="bi bi-arrow-up-short"></i>${weather.tempMax}°C
            </span>
            <span class="text-muted">|</span>
            <span class="text-primary">
              <i class="bi bi-arrow-down-short"></i>${weather.tempMin}°C
            </span>
          </div>
          <p class="text-muted mb-0">${weather.condition}</p>
        </div>
      </div>

      <div class="weather-details">
        <div class="row g-3">
          <div class="col-4">
            <div class="weather-detail text-center p-2 rounded bg-light">
              <i class="bi bi-droplet-fill text-primary mb-2"></i>
              <div class="fw-bold text-dark">${weather.humidity}%</div>
              <small class="text-muted">Umidade</small>
            </div>
          </div>
          <div class="col-4">
            <div class="weather-detail text-center p-2 rounded bg-light">
              <i class="bi bi-wind text-success mb-2"></i>
              <div class="fw-bold text-dark">${weather.windSpeed}km/h</div>
              <small class="text-muted">Vento</small>
            </div>
          </div>
          <div class="col-4">
            <div class="weather-detail text-center p-2 rounded bg-light">
              <i class="bi bi-umbrella text-info mb-2"></i>
              <div class="fw-bold text-dark">${weather.rainChance}%</div>
              <small class="text-muted">Chuva</small>
            </div>
          </div>
        </div>
      </div>

      <div class="weather-forecast mt-4 pt-4 border-top">
        <h6 class="mb-3 text-dark">Próximos Dias</h6>
        <div class="d-flex justify-content-between">
          ${forecast.map(day => `
            <div class="text-center">
              <small class="d-block text-muted">${day.day}</small>
              <i class="bi bi-${day.icon} ${day.icon.includes('sun') ? 'text-warning' : 'text-secondary'}"></i>
              <small class="d-block text-dark">${day.temp}°C</small>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}