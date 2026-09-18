function ErrorMessage({ message }) {

  if (!message) {
    return null
  }

  return (
    <div className="mt-6 rounded-2xl border border-rose-200 bg-rose-50/90 p-4 text-center text-rose-700 shadow-sm">
      {message}
    </div>
  )
}

export default ErrorMessage