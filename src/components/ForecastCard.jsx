import {
  getWeatherDescription,
  getWeatherIcon,
} from "../utils/weatherUtils"

function ForecastCard({ date, maxTemp, minTemp, weatherCode }) {

  const formattedDate = new Date(date).toLocaleDateString(
    "en-US",
    {
      weekday: "short",
      month: "short",
      day: "numeric",
    }
  )

  return (
    <div className="min-w-[140px] rounded-lg border border-slate-200 bg-white p-5 text-center shadow-sm">
      <p className="text-sm text-slate-500">{formattedDate}</p>

      <div className="my-4 text-4xl">{getWeatherIcon(weatherCode)}</div>

      <p className="text-sm text-slate-600">
        {getWeatherDescription(weatherCode)}
      </p>

      <div className="mt-4">
        <span className="font-bold text-slate-800">
          {Math.round(maxTemp)}°
        </span>

        <span className="ml-2 text-slate-400">
          {Math.round(minTemp)}°
        </span>
      </div>
    </div>
  )
}

export default ForecastCard