import Navbar from "./components/Navbar"
import SearchBar from "./components/SearchBar"
import WeatherCard from "./components/WeatherCard"
import WeatherDetails from "./components/WeatherDetails"
import Forecast from "./components/Forecast"
import Loading from "./components/Loading"
import ErrorMessage from "./components/ErrorMessage"

import { useWeather } from "./context/WeatherContext"


function App() {

  const {
    weather,
    location,
    loading,
    error,
    fetchWeather,
  } = useWeather()


  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff8f0] via-[#eef6ff] to-[#f5f3ff] text-slate-800">

      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-8 sm:py-12">

        <div className="mx-auto max-w-3xl">

          <SearchBar
            onSearch={fetchWeather}
            loading={loading}
          />

          <ErrorMessage message={error} />

        </div>


        {loading && !weather && (
          <Loading />
        )}


        <WeatherCard
          weather={weather}
          location={location}
        />


        <WeatherDetails
          weather={weather}
        />


        <Forecast
          weather={weather}
        />

      </main>

    </div>
  )
}

export default App