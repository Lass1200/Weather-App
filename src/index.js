// index.js
import "./style.css";
import { getWeatherData } from "./api/weather.js";
import { displayWeather } from "./ui/ui.js";

const searchBtn = document.querySelector(".search-btn");
const input = document.querySelector("#search");

searchBtn.addEventListener("click", async () => {
  const city = input.value.trim();
  if (!city) return;

  const weatherData = await getWeatherData(city);
  if (weatherData) {
    displayWeather(weatherData);
  } else {
    alert("Erreur : ville non trouvée");
  }
});

let currentUnit = 'metric'; // 'metric' = °C, 'us' = °F

const unitToggle = document.querySelector("#toggle-unit");

unitToggle.addEventListener("click", async () => {
  currentUnit = currentUnit === 'metric' ? 'us' : 'metric';
  unitToggle.textContent = currentUnit === 'metric' ? "°F" : "°C";

  const city = input.value.trim();
  if (!city) return;

  const weatherData = await getWeatherData(city, currentUnit);
  if (weatherData) {
    displayWeather(weatherData);
  }
});

