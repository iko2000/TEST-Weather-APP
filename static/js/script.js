"use strict";

const cityName = document.querySelector("#city-d");
const temperature = document.querySelector("#temp-d");
const windSpeed = document.querySelector("#wind-d");
const citySearch = document.querySelector("#city-input");
const searchButton = document.querySelector("#btn");
const description = document.querySelector("#des-d");

const getWeatherData = function (city) {
  fetch(`https://goweather.herokuapp.com/weather/${city}`)
    .then(
      (response) => response.json(),
      (err) => alert(err)
    )
    .then(function (data) {
      console.log(data);
      cityName.textContent = city;
      temperature.textContent = `Temperature: ${data.temperature}`;
      windSpeed.textContent = `Wind Speed: ${data.wind}`;
      description.textContent = data.description;
    });
};

searchButton.addEventListener("click", function () {
  getWeatherData(`${citySearch.value}`);
  console.log(citySearch.value);
});

