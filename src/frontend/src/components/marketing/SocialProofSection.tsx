import { Card, CardContent } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';

export function SocialProofSection() {
  const testimonials = [
    {
      quote: "Working with this team transformed our influencer marketing strategy. The matches were perfect and the results exceeded our expectations.",
      role: "Brand Partner",
      category: "E-commerce",
    },
    {
      quote: "Finally, a platform that understands creators. The brand partnerships are authentic and the support team is always there when I need them.",
      role: "Content Creator",
      category: "Lifestyle & Fashion",
    },
    {
      quote: "The process was seamless from start to finish. We saw measurable ROI within the first month of our campaign launch.",
      role: "Brand Partner",
      category: "Tech & Innovation",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">What Our Partners Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from brands and creators in our network.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-chart-1 text-chart-1" />
                  ))}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.role}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.category}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="max-w-4xl mx-auto bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <p className="text-sm text-muted-foreground">Active Creators</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">200+</div>
                  <p className="text-sm text-muted-foreground">Brand Partners</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                  <p className="text-sm text-muted-foreground">Successful Campaigns</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-6">
                * Representative figures for illustration purposes
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
