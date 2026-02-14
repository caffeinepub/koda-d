import { Mail, MessageCircle } from 'lucide-react';

export function SiteFooter() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img
              src="/assets/generated/koda-d-wordmark.dim_512x192.png"
              alt="Koda D"
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-muted-foreground">
              Connecting brands with creators for authentic partnerships.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection('for-brands')}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                For Brands
              </button>
              <button
                onClick={() => scrollToSection('for-creators')}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                For Creators
              </button>
              <button
                onClick={() => scrollToSection('apply')}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Apply Now
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Contact
              </button>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Have questions or ready to start? Reach out to us directly.
            </p>
            <div className="space-y-2">
              <a
                href="mailto:dkoda911@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                dkoda911@gmail.com
              </a>
              <a
                href="https://wa.me/6268754603"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                +1 626-875-4603
              </a>
            </div>
          </div>
        </div>

        <div className="border-t pt-8">
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Koda D. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
