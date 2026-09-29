import {
  getWeatherDescription,
  getWeatherIcon,
} from "../utils/weatherUtils"

function WeatherCard({ weather, location }) {

  if (!weather || !location) {
    return null
  }

  const current = weather.current

  return (
    <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
          {location.name}
        </h2>

        <p className="mt-1 text-slate-500">
          {location.country}
        </p>

        <div className="my-8 text-6xl">
          {getWeatherIcon(current.weather_code)}
        </div>

        <div className="text-5xl font-bold text-slate-800 sm:text-6xl">
          {Math.round(current.temperature_2m)}°C
        </div>

        <p className="mt-4 text-xl text-slate-600">
          {getWeatherDescription(current.weather_code)}
        </p>
      </div>
    </div>
  )
}

export default WeatherCard