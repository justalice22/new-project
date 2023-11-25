let now = new Date();
let hours = now.getHours();
let min = now.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tueday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];

let h2 = document.querySelector("h2");
h2.innerHTML = `${day} ${hours}:${min}`;

///
function displayTemp(response) {
  let currentTemp = response.data.temperature.current;
  currentTemp = Math.round(currentTemp);
  let span = document.querySelector(".displayTemp");
  span.innerHTML = `${currentTemp}`;
}

function cityname(event) {
  event.preventDefault();
  let searchResult = document.querySelector("#search-result");
  let h5 = document.querySelector("h5");
  h5.innerHTML = `${searchResult.value}`;
  let apiCity = searchResult.value;
  let apiKey = "85567b36bfa10c47aa81te3603co6f30";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${apiCity}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemp);
}

let city = document.querySelector("form");
city.addEventListener("submit", cityname);
//

