import "./App.css"
import { useState } from "react"

import Navbar from "./components/Navbar"
import SearchBar from "./components/SearchBar"
import WeatherCard from "./components/WeatherCard"
import WeatherDetails from "./components/WeatherDetails"
import Forecast from "./components/Forecast"
import Loading from "./components/Loading"
import ErrorMessage from "./components/ErrorMessage"

import { useWeather } from "./context/WeatherContext"

function App() {
  const [isDark, setIsDark] = useState(false)

  const {
    weather,
    location,
    loading,
    error,
    fetchWeather,
  } = useWeather()

  return (
    <div className={`app-shell${isDark ? " dark-theme" : ""}`}>
      <Navbar
        isDark={isDark}
        onThemeToggle={() => setIsDark((current) => !current)}
      />

      <main className="app-container">
        <div className="mx-auto max-w-3xl">
          <SearchBar
            onSearch={fetchWeather}
            loading={loading}
          />

          <ErrorMessage message={error} />
        </div>

        {loading && !weather && <Loading />}

        <WeatherCard
          weather={weather}
          location={location}
        />

        <WeatherDetails weather={weather} />

        <Forecast weather={weather} />
      </main>
    </div>
  )
}

export default App