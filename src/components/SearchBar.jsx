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
        className="flex-1 rounded-2xl border border-sky-200 bg-white/80 px-4 py-3 text-slate-800 shadow-sm outline-none placeholder:text-slate-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
      />

      <button
        type="submit"
        disabled={loading}
        className="rounded-2xl bg-gradient-to-r from-sky-500 to-violet-500 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-200 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Searching..." : "Search"}
      </button>

    </form>
  )
}

export default SearchBar