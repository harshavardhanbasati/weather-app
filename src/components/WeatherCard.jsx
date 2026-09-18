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
    <div className="mt-8 rounded-[28px] border border-sky-100 bg-white/75 p-6 shadow-[0_20px_60px_rgba(148,163,184,0.18)] backdrop-blur-sm sm:p-10">

      <div className="text-center">

        <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
          {location.name}
        </h2>

        <p className="mt-1 text-slate-500">
          {location.country}
        </p>

        <div className="my-8 text-7xl drop-shadow-sm">
          {getWeatherIcon(current.weather_code)}
        </div>

        <div className="text-6xl font-bold text-slate-800 sm:text-7xl">
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