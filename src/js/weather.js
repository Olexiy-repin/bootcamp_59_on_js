// https://openweathermap.org/current
import { fetchWeatherByCityName } from './weatherApi';
import { createWeatherCard } from './templates/weather-card';

const convertSecondsToHoursAndMinutes = seconds => {
  const date = new Date(seconds * 1000);

  return `${String(date.getHours()).padStart(2, '0')}:${String(
    date.getMinutes()
  ).padStart(2, '0')}`;
};

const weatherFormEl = document.querySelector('.js-search-form');
const weatherWrapperEl = document.querySelector('.js-weather__wrapper');

const onWeatherFormElSubmit = event => {
  event.preventDefault();

  const searchQuery = event.target.elements.user_country.value.trim();

  fetchWeatherByCityName(searchQuery)
    .then(data => {
      data.sys.sunrise = convertSecondsToHoursAndMinutes(data.sys.sunrise);
      data.sys.sunset = convertSecondsToHoursAndMinutes(data.sys.sunset);
      data.main.temp = Math.round(data.main.temp);
      data.main.feels_like = Math.round(data.main.feels_like);

      weatherWrapperEl.innerHTML = createWeatherCard(data);
    })
    .catch(err => {
      switch (err.message) {
        case '404': {
          alert('Такого міста не знайдено!');
          weatherFormEl.reset();

          break;
        }
      }
    });
};

weatherFormEl.addEventListener('submit', onWeatherFormElSubmit);
