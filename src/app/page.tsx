import LogoStrip from '@/app/components/LogoStrip';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen font-sans">
      <section className="hero-gradient section">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto" data-reveal>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">Build with confidence.</h1>
            <p className="lead mt-4">
              Ship reliable software through code quality audits, testing strategy, refactoring, and observability.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <a href="/contact" className="btn btn-accent">
                Request a code audit
              </a>
              <a href="/services" className="btn btn-ghost">
                Explore services
              </a>
            </div>
          </div>
          <div className="mt-12" data-parallax="0.15" data-reveal>
            <div className="full-image">
              <Image
                src="/images/hero-consulting.svg"
                alt="Modern software consulting illustration"
                width={1600}
                height={900}
                priority
              />
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3" data-reveal>
            <div className="card shadow-soft p-5 text-center">
              <div className="text-2xl font-semibold">-60%</div>
              <div className="muted text-sm">Escaped defects</div>
            </div>
            <div className="card shadow-soft p-5 text-center">
              <div className="text-2xl font-semibold">+35%</div>
              <div className="muted text-sm">Test coverage</div>
            </div>
            <div className="card shadow-soft p-5 text-center">
              <div className="text-2xl font-semibold">-45%</div>
              <div className="muted text-sm">MTTR</div>
            </div>
          </div>
        </div>
      </section>
      <LogoStrip />
      {/* Full-bleed banner */}
      <section>
        <div className="container" data-reveal>
          <div className="full-image">
            <Image
              src="/images/banner-fullbleed.svg"
              alt="Abstract full-bleed banner"
              width={2400}
              height={640}
              sizes="(min-width: 1024px) 1024px, 100vw"
            />
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

      <section id="projects" className="hairline">
        <div className="container section">
          <div className="eyebrow">Selected work</div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Case studies</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="card shadow-soft p-5">
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
