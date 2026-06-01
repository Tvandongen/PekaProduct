export default function Header() {
  return (
    <header className="bg-peka-green text-white sticky top-0 z-50 shadow-md">
      <div className="pt-safe">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <img src="/icon.svg" alt="Peka logo" className="w-9 h-9 rounded-lg flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <h1 className="text-base font-bold leading-tight tracking-tight">Peka Kroef</h1>
            <p className="text-xs text-green-200 leading-tight">Verse aardappelproducten</p>
          </div>
        </div>
      </div>
    </header>
  )
}
