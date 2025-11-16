'use client'

export const FreeSection = (): JSX.Element => {
  const handleCta = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl border border-slate-800/60 bg-gradient-to-b from-slate-900 to-black p-8 sm:p-12 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto inline-flex select-none items-center justify-center rounded-full bg-gradient-to-b from-red-600 to-red-800 px-6 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-white shadow-[0_0_20px_rgba(239,68,68,0.65)]">
              FREE
            </div>

            <p className="mt-10 text-balance text-[15px] leading-7 text-slate-200/90">
              No offense lik... mais, the conventional way tae troh lel université, djiouwez men 3 - 10 ans bech ki tekhroudj tekhdem just because you're trying to live someone else's dreams... is a bad way to live life.
            </p>

            <p className="mt-6 text-[15px] leading-7 text-slate-200/90">
              Donc cette offre est gratuite pour le moment, mais you'll pay later.
            </p>

            <p className="mt-8 text-sm font-semibold text-red-400">
              Don't make that mistake.
            </p>

            <div className="mt-10">
              <button
                onClick={handleCta}
                type="button"
                className="group relative inline-flex items-center justify-center rounded-full bg-gradient-to-b from-red-600 to-red-700 px-8 py-3 text-sm font-semibold text-white shadow-[0_10px_35px_rgba(239,68,68,0.45)] outline-none transition [text-shadow:0_1px_0_rgba(0,0,0,0.15)] hover:from-red-500 hover:to-red-600 active:translate-y-[1px]"
              >
                <span className="absolute -inset-0.5 -z-10 rounded-full bg-red-600/30 blur-lg transition-opacity group-hover:opacity-100" />
                Become an Employee
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}




