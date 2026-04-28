import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { Link } from "wouter";

/**
 * Home Page
 * 
 * Design: Modern Minimalist Consulting
 * - Hero section with background image and overlay
 * - Generous whitespace and asymmetric layouts
 * - Navy and teal accent colors
 * - Playfair Display for headings, Inter for body
 * - Minimal icons and clear hierarchy
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <a className="text-xl font-display font-bold text-foreground">Inteliqu</a>
          </Link>
          <nav className="hidden md:flex gap-8">
            <a href="#who-we-help" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Who We Help
            </a>
            <a href="#what-we-do" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              What We Do
            </a>
            <a href="#package" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Package
            </a>
            <a href="#contact-us" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact Us
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-bg.jpg')",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/40 via-foreground/20 to-transparent" />
        
        <div className="container relative z-10 max-w-3xl">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight">
              Extraordinary Ability Visa Guidance
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
              We help high-achieving professionals evaluate, position, and strengthen their profiles for U.S. immigration success.
            </p>
            <div className="pt-4">
              <a href="mailto:Visahelp@inteliqu.com">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 px-8 rounded-md text-lg transition-all duration-200 hover:scale-105">
                  Book a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section id="who-we-help" className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="mb-8">Who We Help</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              We work with exceptional professionals across industries who have demonstrated extraordinary ability and are considering U.S. immigration options.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Senior software engineers",
                "Researchers & scientists",
                "Founders & startup leaders",
                "Product managers",
                "Artists & creatives",
                "Professionals with national or international recognition",
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* What We Do */}
      <section id="what-we-do" className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="mb-8">What We Do</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Our comprehensive profile evaluation service provides the strategic guidance you need to navigate extraordinary ability visa options.
            </p>
            
            <div className="space-y-8">
              {[
                {
                  title: "Profile Evaluation",
                  description: "In-depth assessment of your background against EB-1A and O-1 criteria",
                },
                {
                  title: "Gap Analysis",
                  description: "Identify strengths and areas for development relative to USCIS standards",
                },
                {
                  title: "Evidence Strategy",
                  description: "Personalized recommendations on positioning and strengthening your profile",
                },
                {
                  title: "Visa Recommendation",
                  description: "Clear guidance on EB-1A vs O-1 suitability for your specific situation",
                },
                {
                  title: "Next Steps",
                  description: "Actionable roadmap for working with immigration attorneys",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-accent/10">
                      <Zap className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Visa Types */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <h2 className="mb-12">Visa Types We Support</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* EB-1A Card */}
            <Card className="border-border bg-card p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-foreground mb-6">EB-1A</h3>
              <p className="text-sm text-muted-foreground font-medium mb-4 uppercase tracking-wide">Extraordinary Ability – Green Card</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Self-petitioned</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">No employer sponsorship required</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Permanent residency</span>
                </li>
              </ul>
            </Card>

            {/* O-1 Card */}
            <Card className="border-border bg-card p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-foreground mb-6">O-1</h3>
              <p className="text-sm text-muted-foreground font-medium mb-4 uppercase tracking-wide">Extraordinary Ability – Work Visa</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Employer or agent sponsored</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Temporary visa</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Ideal stepping stone to EB-1A</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Why Inteliqu */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="mb-12">Why Inteliqu</h2>
            
            <div className="space-y-6">
              {[
                "Deep understanding of USCIS adjudication standards",
                "Honest, data-driven profile assessment",
                "Personalized strategy (not generic advice)",
                "Clear, actionable roadmap",
                "Transparent pricing (one package)",
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-accent/20">
                      <div className="h-2 w-2 rounded-full bg-accent" />
                    </div>
                  </div>
                  <p className="text-lg text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Package Section */}
      <section id="package" className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="mb-4">Comprehensive Profile Evaluation & Strategy Package</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Everything you need to understand your visa options and create a winning strategy.
            </p>

            <Card className="border-border bg-card p-10 mb-12">
              <div className="space-y-6 mb-10">
                {[
                  "One-on-one consultation",
                  "Eligibility assessment (EB-1A & O-1)",
                  "Strengths & gaps analysis",
                  "Evidence mapping to USCIS criteria",
                  "Strategic recommendations",
                  "Written summary after the call",
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-8">
                <p className="text-muted-foreground mb-6">
                  <span className="text-foreground font-semibold">Pricing:</span> Contact us for pricing details
                </p>
                <a
                  href="mailto:Visahelp@inteliqu.com"
                  className="text-lg font-medium text-foreground hover:text-accent transition-colors"
                >
                  Visahelp@inteliqu.com
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* How It Works */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="mb-12">How It Works</h2>
            
            <div className="space-y-8">
              {[
                { step: 1, title: "Book Consultation", description: "Schedule your initial consultation at a time that works for you." },
                { step: 2, title: "Profile Review & Strategy Session", description: "We'll dive deep into your background, achievements, and visa options." },
                { step: 3, title: "Receive Action Plan", description: "Get a comprehensive written summary and clear next steps." },
              ].map((item) => (
                <div key={item.step} className="flex gap-8">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-semibold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Contact Us */}
      <section id="contact-us" className="py-20 md:py-24 bg-background">
        <div className="container">
          <div className="max-w-3xl rounded-lg border border-border bg-card p-8 md:p-10">
            <h2 className="mb-4">Contact Us</h2>
            <p className="text-lg text-muted-foreground mb-4">
              For consultation and pricing details, email us directly.
            </p>
            <a
              href="mailto:Visahelp@inteliqu.com"
              className="text-xl font-medium text-foreground hover:text-accent transition-colors"
            >
              Visahelp@inteliqu.com
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Disclaimer */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl bg-secondary/50 border border-border rounded-lg p-8">
            <p className="text-muted-foreground italic">
              <span className="font-semibold text-foreground">Disclaimer:</span> Inteliqu is not a law firm and does not provide legal representation. We provide strategic guidance and profile evaluation only.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/30">
        <div className="container py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h3 className="font-display font-bold text-foreground mb-2">Inteliqu</h3>
              <p className="text-sm text-muted-foreground">
                Expert guidance for extraordinary ability visa profiles
              </p>
              <div className="mt-3 flex flex-col gap-1">
                <a href="mailto:Visahelp@inteliqu.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Visahelp@inteliqu.com
                </a>
              </div>
            </div>
            <nav className="flex gap-8">
              <a href="#who-we-help" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Who We Help
              </a>
              <a href="#what-we-do" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                What We Do
              </a>
              <a href="mailto:Visahelp@inteliqu.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Email Us
              </a>
            </nav>
          </div>
          <div className="border-t border-border mt-8 pt-8">
            <p className="text-sm text-muted-foreground text-center">
              © 2025 Inteliqu. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
