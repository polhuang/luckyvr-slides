export function TitleSlide() {
  return (
    <div className="w-full max-w-4xl mx-auto text-center">
      {/* Vercel Logo */}
      <div className="mb-8">
        <svg
          className="h-10 w-auto mx-auto text-foreground"
          viewBox="0 0 76 65"
          fill="currentColor"
        >
          <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
        </svg>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance mb-8">
        Vercel Pro and Enterprise
      </h1>

      <div className="mb-12">
        <p className="text-xl text-muted-foreground">Prepared for</p>
        <p className="text-3xl font-bold text-foreground">Lucky VR</p>
      </div>

      <div className="mt-8 text-sm text-muted-foreground">
        Press <kbd className="px-2 py-1 bg-secondary rounded text-foreground">→</kbd> to continue
      </div>
    </div>
  )
}
