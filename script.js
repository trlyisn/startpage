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

const targetDate = new Date("March 8, 2026 11:05:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    document.getElementById("countdown-data").innerText = "TAKEOFF";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const d = days.toString().padStart(2, "0");
  const h = hours.toString().padStart(2, "0");
  const m = minutes.toString().padStart(2, "0");
  const s = seconds.toString().padStart(2, "0");

  document.getElementById(
    "countdown-data"
  ).innerText = `${d}d ${h}h ${m}m ${s}s`;
}

setInterval(updateCountdown, 1000);

updateCountdown();
