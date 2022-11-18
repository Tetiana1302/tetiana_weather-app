function displayTemperature(responce) {
  console.log(responce.data.wind.speed);
  console.log(responce.data);

  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(responce.data.main.temp);
  cityElement.innerHTML = responce.data.name;
  descriptionElement.innerHTML = responce.data.weather[0].description;
  humidityElement.innerHTML = responce.data.main.humidity;
  windElement.innerHTML = Math.round(responce.data.wind.speed);
}

let apiKey = "8d9838178b5b401f1b4e7cb5af18e210";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
