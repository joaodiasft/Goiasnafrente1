export function getCurrentWeather() {
  return {
    temp: 28,
    tempMax: 32,
    tempMin: 22,
    condition: 'Ensolarado',
    humidity: 45,
    windSpeed: 12,
    rainChance: 0
  };
}

export function getForecast() {
  return [
    { day: 'Ter', icon: 'sun-fill', temp: 29 },
    { day: 'Qua', icon: 'cloud-sun-fill', temp: 27 },
    { day: 'Qui', icon: 'cloud-fill', temp: 26 },
    { day: 'Sex', icon: 'cloud-rain-fill', temp: 24 }
  ];
}