function WeatherDetails({ weather }) {

  if (!weather) {
    return null
  }

  const current = weather.current

  const details = [
    {
      title: "Humidity",
      value: `${current.relative_humidity_2m}%`,
      icon: "💧",
    },
    {
      title: "Feels Like",
      value: `${Math.round(current.apparent_temperature)}°C`,
      icon: "🌡️",
    },
    {
      title: "Wind Speed",
      value: `${current.wind_speed_10m} km/h`,
      icon: "💨",
    },
    {
      title: "Precipitation",
      value: `${current.precipitation} mm`,
      icon: "🌧️",
    },
  ]

  return (
    <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">

      {details.map((detail) => (

        <div
          key={detail.title}
          className="rounded-2xl border border-sky-100 bg-white/75 p-5 shadow-sm"
        >

          <div className="text-2xl">
            {detail.icon}
          </div>

          <p className="mt-3 text-sm text-slate-500">
            {detail.title}
          </p>

          <p className="mt-1 text-xl font-bold text-slate-800">
            {detail.value}
          </p>

        </div>

      ))}

    </div>
  )
}

export default WeatherDetails