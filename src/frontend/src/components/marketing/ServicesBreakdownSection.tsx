import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Building2, Users2, Rocket, TrendingUp, Target, Sparkles } from 'lucide-react';

export function ServicesBreakdownSection() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Tailored Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're a brand looking to amplify your message or a creator seeking partnerships, we have the right solution for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Brand Services */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Building2 className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">For Brands</h3>
            </div>
            
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">Influencer Discovery</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Access our curated network of verified creators across multiple platforms. We match you with influencers whose audience demographics and values align perfectly with your brand.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Rocket className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">Campaign Strategy</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    From concept to execution, we help design campaigns that resonate. Our team provides creative direction, content guidelines, and timeline management to ensure success.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">Analytics & Reporting</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Track campaign performance with detailed metrics including reach, engagement, conversions, and ROI. Receive comprehensive reports to measure your investment's impact.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Creator Services */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-xl bg-chart-1/10 flex items-center justify-center">
                <Users2 className="h-7 w-7 text-chart-1" />
              </div>
              <h3 className="text-2xl font-bold">For Creators</h3>
            </div>
            
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-chart-1" />
                    <CardTitle className="text-lg">Brand Partnerships</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Get connected with brands that match your niche and values. We handle negotiations and contracts, so you can focus on creating authentic content your audience loves.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-chart-1" />
                    <CardTitle className="text-lg">Growth Support</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Access resources, workshops, and one-on-one coaching to improve your content strategy, audience engagement, and monetization opportunities.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-chart-1" />
                    <CardTitle className="text-lg">Portfolio Building</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Showcase your best work with our portfolio tools. Highlight your achievements, audience insights, and past collaborations to attract premium brand deals.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
