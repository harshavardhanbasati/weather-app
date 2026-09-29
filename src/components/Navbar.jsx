import Theme from "./theme"

function Navbar({ isDark, onThemeToggle }) {
  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <h1 className="text-xl font-bold text-slate-800 sm:text-2xl-center">
          🌦️ WeatherNow
        </h1>

        <p className="hidden text-sm text-slate-500 sm:block">
          Live Weather Dashboard
        </p>

        <Theme isDark={isDark} onToggle={onThemeToggle} />
      </div>
    </nav>
  )
}

export default Navbar