import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — Maxwell Software Solutions',
  description: 'Our mission: correctness, simplicity, observability, automation.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-10 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold">About</h1>
      <div className="mt-4 space-y-4 text-foreground/85">
        <p>
          Maxwell Software Solutions focuses on code quality and reliability. We believe correctness and simplicity
          enable speed.
        </p>
        <ul className="list-disc list-inside">
          <li>Correctness over cleverness</li>
          <li>Observability as a feature</li>
          <li>Automation and reproducibility</li>
        </ul>
      </div>
    </div>
  );
}
