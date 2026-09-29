import { useState } from "react"

function SearchBar({ onSearch, loading }) {

  const [city, setCity] = useState("")

  function handleSubmit(event) {

    event.preventDefault()

    if (!city.trim()) {
      return
    }

    onSearch(city)

    setCity("")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 sm:flex-row"
    >
      <input
        type="text"
        value={city}
        onChange={(event) => setCity(event.target.value)}
        placeholder="Enter city name..."
        className="flex-1 rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none placeholder:text-slate-400 focus:border-sky-400"
      />

      <button
        type="submit"
        disabled={loading}
        className="rounded-lg bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </form>
  )
}

export default SearchBar