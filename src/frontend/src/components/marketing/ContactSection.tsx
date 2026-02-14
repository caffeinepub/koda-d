import { Mail, MessageCircle, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30 scroll-mt-20">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your influencer marketing journey? We're here to help you succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Email Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Send us an email and we'll get back to you within 24 hours.
              </p>
              <Button asChild className="w-full">
                <a href="mailto:dkoda911@gmail.com">
                  dkoda911@gmail.com
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-chart-1/10 flex items-center justify-center mb-4">
                <MessageCircle className="h-6 w-6 text-chart-1" />
              </div>
              <CardTitle>WhatsApp</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Chat with us directly on WhatsApp for quick responses.
              </p>
              <Button asChild variant="secondary" className="w-full">
                <a
                  href="https://wa.me/6268754603"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +1 626-875-4603
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-accent/50 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-accent-foreground" />
              </div>
              <CardTitle>Response Time</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We typically respond to all inquiries within 24 hours during business days. For urgent matters, WhatsApp is the fastest way to reach us.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-accent/50 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-accent-foreground" />
              </div>
              <CardTitle>Working Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                Saturday: 10:00 AM - 4:00 PM EST<br />
                Sunday: Closed
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
