async function getWeather() {
  const weatherElement = document.getElementById("weather-data");

  try {
    const response = await fetch("https://wttr.in/Trebic?format=%t+%C");
    const text = await response.text();

    weatherElement.innerText = text;
  } catch (error) {
    weatherElement.innerText = "Offline";
  }
}

getWeather();

