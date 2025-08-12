export default function SiteFooter() {
  return (
    <footer className="hairline">
      <div className="container section text-sm muted flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>© {new Date().getFullYear()} Maxwell Software Solutions</div>
        <nav className="flex gap-4">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/security">Security</a>
        </nav>
      </div>
    </footer>
  );
}
