export default function Header() {
  return (
    <header className="bg-peka-green text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
        <img src="/icon.svg" alt="Peka logo" className="w-10 h-10 rounded-lg" />
        <div>
          <h1 className="text-lg font-bold leading-tight tracking-tight">Peka Kroef</h1>
          <p className="text-xs text-green-200">Verse aardappelproducten</p>
        </div>
      </div>
    </header>
  )
}
