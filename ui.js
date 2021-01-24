class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.pressure = document.getElementById('w-pressure');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.textContent = weather.name;
    const description = weather.weather[0].description;
    this.desc.textContent = description.charAt(0).toUpperCase() + description.slice(1);
    this.string.textContent = `${weather.main.temp.toFixed(1)}°`;
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    this.feelsLike.textContent = `Ощущается как: ${weather.main.feels_like.toFixed(1)}°`;
    this.wind.textContent = `Ветер: ${weather.wind.deg}° ${weather.wind.speed} m/s`;
    this.humidity.textContent = `Влажность: ${weather.main.humidity}`;
    this.pressure.textContent = `Давление: ${weather.main.pressure}`;
  }
}