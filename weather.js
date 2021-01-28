class Weather {
  constructor(city) {
    this.apiKey = 'e3a7bf2b6f21fe338324fbeaef4ec62f';
    this.city = city;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric&lang=ru`)
    
    const responseData = await response.json();
    return responseData;
  }

  // Change weather location
  changeLocation(city) {
    this.city = city;
  }
}
