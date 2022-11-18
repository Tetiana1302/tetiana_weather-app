function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sanday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(responce) {
  console.log(responce.data.wind.speed);
  console.log(responce.data);

  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  temperatureElement.innerHTML = Math.round(responce.data.main.temp);
  cityElement.innerHTML = responce.data.name;
  descriptionElement.innerHTML = responce.data.weather[0].description;
  humidityElement.innerHTML = responce.data.main.humidity;
  windElement.innerHTML = Math.round(responce.data.wind.speed);
  dateElement.innerHTML = formatDate(responce.data.dt * 1000);
}

let apiKey = "8d9838178b5b401f1b4e7cb5af18e210";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
