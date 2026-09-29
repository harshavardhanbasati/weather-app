function Theme({ isDark, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={isDark}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
    >
      {isDark ? "☀️ Light" : "🌙 Dark"}
    </button>
  )
}

export default Theme