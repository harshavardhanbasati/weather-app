import ForecastCard from "./ForecastCard"

function Forecast({ weather }) {

  if (!weather) {
    return null
  }

  const daily = weather.daily

  return (
    <section className="mt-8">

      <h2 className="mb-4 text-xl font-bold text-slate-800">
        7-Day Forecast
      </h2>

      <div className="flex gap-4 overflow-x-auto pb-4">

        {daily.time.map((date, index) => (

          <ForecastCard
            key={date}
            date={date}
            maxTemp={daily.temperature_2m_max[index]}
            minTemp={daily.temperature_2m_min[index]}
            weatherCode={daily.weather_code[index]}
          />

        ))}

      </div>

    </section>
  )
}

export default Forecast