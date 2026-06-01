import { Component, ErrorInfo, ReactNode } from 'react'

interface Props { children: ReactNode }
interface State { error: Error | null }

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('App error:', error, info)
  }

  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen bg-peka-green-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-2xl p-6 shadow-md text-center max-w-sm w-full">
            <div className="text-4xl mb-3">🥔</div>
            <h2 className="font-bold text-gray-800 mb-2">Er ging iets mis</h2>
            <p className="text-sm text-gray-500 mb-4">Probeer de pagina te herladen.</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-peka-green text-white text-sm font-semibold px-6 py-2.5 rounded-full"
            >
              Herladen
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
