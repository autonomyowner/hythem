'use client'

export default function HomePage(): JSX.Element {
  return (
    <main className="min-h-screen">
      <div className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center py-24">
            <h1 className="text-4xl font-semibold text-white">Welcome</h1>
            <p className="mt-4 text-slate-300">Start designing your new homepage from a clean slate.</p>
          </div>
        </div>
      </div>
      {/* Free-style CTA section */}
      {(() => {
        const { FreeSection } = require('../components/FreeSection') as typeof import('../components/FreeSection')
        return <FreeSection />
      })()}
    </main>
  )
}