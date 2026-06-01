import { useState, useEffect } from 'react'

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

function safeLocalStorage(key: string, value?: string): string | null {
  try {
    if (value !== undefined) {
      localStorage.setItem(key, value)
      return value
    }
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

export default function InstallBanner() {
  const [prompt, setPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [dismissed, setDismissed] = useState(() => safeLocalStorage('peka-install-dismissed') === '1')

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault()
      setPrompt(e as BeforeInstallPromptEvent)
    }
    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  if (!prompt || dismissed) return null

  const handleInstall = async () => {
    await prompt.prompt()
    const { outcome } = await prompt.userChoice
    if (outcome === 'accepted') setPrompt(null)
    else dismiss()
  }

  const dismiss = () => {
    setDismissed(true)
    safeLocalStorage('peka-install-dismissed', '1')
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-peka-green text-white rounded-2xl p-4 shadow-xl z-50 flex items-center gap-3">
      <img src="/icon.svg" alt="" className="w-10 h-10 rounded-lg flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-sm">Installeer de app</p>
        <p className="text-xs text-green-200 truncate">Voeg toe aan je beginscherm</p>
      </div>
      <button
        onClick={handleInstall}
        className="bg-white text-peka-green text-xs font-bold px-3 py-1.5 rounded-lg flex-shrink-0"
      >
        Installeer
      </button>
      <button onClick={dismiss} className="text-green-200 flex-shrink-0" aria-label="Sluiten">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}
