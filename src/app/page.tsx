export default function Home() {
  return (
    <main className="min-h-screen font-sans">
      <section className="px-6 sm:px-10 py-20 max-w-6xl mx-auto">
        <div className="text-center sm:text-left">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">Maxwell — Modern web experiences</h1>
          <p className="mt-4 text-base sm:text-lg text-foreground/80 max-w-2xl">
            I’ll help you iterate on this site live. Tell me what to change and I’ll update the code. Your browser at{' '}
            <code>localhost:3000</code> will hot-reload.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#about" className="rounded-md px-5 py-3 bg-[--color-accent] text-background text-sm font-medium">
              About
            </a>
            <a
              href="#projects"
              className="rounded-md px-5 py-3 border border-foreground/20 text-sm font-medium hover:bg-foreground/5"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="rounded-md px-5 py-3 border border-foreground/20 text-sm font-medium hover:bg-[--color-accent]/10"
            >
              Contact
            </a>
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
