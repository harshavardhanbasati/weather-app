const GEO_API =
  "https://geocoding-api.open-meteo.com/v1/search"

const WEATHER_API =
  "https://api.open-meteo.com/v1/forecast"


export async function searchCity(city) {

  const response = await fetch(
    `${GEO_API}?name=${encodeURIComponent(city)}&count=1&language=en&format=json`
  )

  if (!response.ok) {
    throw new Error("Unable to search city")
  }

  const data = await response.json()

  if (!data.results || data.results.length === 0) {
    throw new Error("City not found")
  }

  return data.results[0]
}


export async function getWeather(latitude, longitude) {

  const url =
    `${WEATHER_API}?latitude=${latitude}` +
    `&longitude=${longitude}` +
    `&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m` +
    `&hourly=temperature_2m,weather_code` +
    `&daily=weather_code,temperature_2m_max,temperature_2m_min` +
    `&timezone=auto` +
    `&forecast_days=7`

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error("Unable to get weather data")
  }

  return await response.json()
}