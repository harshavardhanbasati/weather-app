function Navbar() {
  return (
    <nav className="border-b border-sky-100 bg-white/70 backdrop-blur-md">
      
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">

        <h1 className="text-xl font-bold text-slate-800 sm:text-2xl">
          🌦️ WeatherNow
        </h1>

        <p className="hidden text-sm text-slate-500 sm:block">
          Live Weather Dashboard
        </p>

      </div>

    </nav>
  )
}

export default Navbar