export function getWeatherDescription(code) {

  const weatherCodes = {

    0: "Clear Sky",

    1: "Mainly Clear",
    2: "Partly Cloudy",
    3: "Overcast",

    45: "Foggy",
    48: "Depositing Rime Fog",

    51: "Light Drizzle",
    53: "Moderate Drizzle",
    55: "Dense Drizzle",

    61: "Slight Rain",
    63: "Moderate Rain",
    65: "Heavy Rain",

    71: "Slight Snow",
    73: "Moderate Snow",
    75: "Heavy Snow",

    80: "Slight Rain Showers",
    81: "Moderate Rain Showers",
    82: "Violent Rain Showers",

    95: "Thunderstorm",
    96: "Thunderstorm with Hail",
    99: "Thunderstorm with Heavy Hail",
  }

  return weatherCodes[code] || "Unknown Weather"
}


export function getWeatherIcon(code) {

  if (code === 0) return "☀️"

  if ([1, 2].includes(code)) return "🌤️"

  if (code === 3) return "☁️"

  if ([45, 48].includes(code)) return "🌫️"

  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) {
    return "🌧️"
  }

  if ([71, 73, 75].includes(code)) {
    return "❄️"
  }

  if ([95, 96, 99].includes(code)) {
    return "⛈️"
  }

  return "🌤️"
}