import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"

import {
  searchCity,
  getWeather,
} from "../services/weatherApi"


const WeatherContext = createContext()


export function WeatherProvider({ children }) {

  const [weather, setWeather] = useState(null)

  const [location, setLocation] = useState(null)

  const [loading, setLoading] = useState(false)

  const [error, setError] = useState("")

  const [city, setCity] = useState("Hyderabad")


  async function fetchWeather(cityName) {

    try {

      setLoading(true)
      setError("")

      const locationData = await searchCity(cityName)

      const weatherData = await getWeather(
        locationData.latitude,
        locationData.longitude
      )

      setLocation(locationData)
      setWeather(weatherData)
      setCity(cityName)

    } catch (error) {

      setError(error.message)

    } finally {

      setLoading(false)

    }
  }


  useEffect(() => {

    fetchWeather("Hyderabad")

  }, [])


  useEffect(() => {

    if (!location) {
      return
    }

    const interval = setInterval(() => {

      fetchWeather(location.name)

    }, 10 * 60 * 1000)

    return () => clearInterval(interval)

  }, [location])


  const value = {
    weather,
    location,
    loading,
    error,
    city,
    fetchWeather,
  }


  return (
    <WeatherContext.Provider value={value}>
      {children}
    </WeatherContext.Provider>
  )
}


export function useWeather() {

  return useContext(WeatherContext)

}