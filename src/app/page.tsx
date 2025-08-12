export default function Home() {
  return (
    <main className="min-h-screen font-sans">
      <section className="hero-gradient">
        <div className="px-6 sm:px-10 py-20 max-w-6xl mx-auto">
          <div className="text-center sm:text-left">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
              Build with confidence. Ship with reliability.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-foreground/80 max-w-2xl">
              Maxwell Software Solutions improves code quality and reliability through audits, testing strategy,
              refactoring, and observability. Measure the impact in fewer escaped defects, higher coverage, and lower
              MTTR.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="/contact"
                className="rounded-md px-5 py-3 bg-[--color-accent] text-background text-sm font-medium"
              >
                Request a code audit
              </a>
              <a
                href="/services"
                className="rounded-md px-5 py-3 border border-foreground/20 text-sm font-medium hover:bg-[--color-accent]/10"
              >
                Explore services
              </a>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-md border border-foreground/10 p-3 text-center">
              <div className="text-2xl font-semibold">-60%</div>
              <div className="text-sm text-foreground/70">Escaped defects</div>
            </div>
            <div className="rounded-md border border-foreground/10 p-3 text-center">
              <div className="text-2xl font-semibold">+35%</div>
              <div className="text-sm text-foreground/70">Test coverage</div>
            </div>
            <div className="rounded-md border border-foreground/10 p-3 text-center">
              <div className="text-2xl font-semibold">-45%</div>
              <div className="text-sm text-foreground/70">MTTR</div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-6 sm:px-10 py-16 border-t border-foreground/10">
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold">About</h2>
            <p className="mt-3 text-foreground/80">
              This is a clean starting point. Ask for layout, color, or content changes and I’ll implement them
              immediately.
            </p>
          </div>
          <div className="rounded-lg border border-foreground/10 p-4">
            <p className="text-sm text-foreground/70">
              Tip: say something like “Make the hero background a subtle gradient and add a CTA button that links to
              /contact”.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="px-6 sm:px-10 py-16 border-t border-foreground/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="rounded-lg border border-foreground/10 p-5">
                <h3 className="font-medium">Project {n}</h3>
                <p className="mt-2 text-sm text-foreground/80">
                  Replace this with real work. I can scaffold sections or data fetching on request.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 sm:px-10 py-16 border-t border-foreground/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-3 text-foreground/80">
            Tell me what you want here (form, links, social icons), and I’ll add it.
          </p>
        </div>
      </section>
    </main>
  );
}
