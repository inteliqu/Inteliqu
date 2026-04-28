import { Link } from "wouter";

/**
 * Contact Page
 * 
 * Design: Modern Minimalist Consulting
 * - Clean, spacious layout with generous whitespace
 * - Navy and teal color palette
 * - Playfair Display for headings, Inter for body
 * - Minimal form design with clear hierarchy
 */
export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container py-6">
          <Link href="/">
            <a className="inline-block text-2xl font-display font-bold text-foreground">
              Inteliqu
            </a>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-16 md:py-24">
        <div className="max-w-2xl">
          <div className="mb-12">
            <h1 className="mb-4">Get in Touch</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Reach us directly by email or phone and our team will get back to you.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-8 space-y-6">
            <div>
              <p className="text-sm uppercase tracking-wide text-muted-foreground">Email</p>
              <a
                href="mailto:Visahelp@inteliqu.com"
                className="mt-1 inline-block text-xl font-medium text-foreground hover:text-accent transition-colors"
              >
                Visahelp@inteliqu.com
              </a>
            </div>

            <div>
              <p className="text-sm uppercase tracking-wide text-muted-foreground">Phone</p>
              <a
                href="tel:+18173740245"
                className="mt-1 inline-block text-xl font-medium text-foreground hover:text-accent transition-colors"
              >
                +1 (817) 374-0245
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground italic">
              Inteliqu is not a law firm and does not provide legal representation. We provide strategic guidance and profile evaluation only.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/30">
        <div className="container py-8">
          <div className="mb-4 flex flex-col items-center gap-1">
            <a href="mailto:Visahelp@inteliqu.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Visahelp@inteliqu.com
            </a>
            <a href="tel:+18173740245" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              +1 (817) 374-0245
            </a>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            © 2025 Inteliqu. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
