import { Users, TrendingUp, Sparkles, Target, Megaphone, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ServicesBreakdownSection } from './ServicesBreakdownSection';
import { ProcessTimelineSection } from './ProcessTimelineSection';
import { SocialProofSection } from './SocialProofSection';
import { FaqSection } from './FaqSection';

export function Sections() {
  return (
    <>
      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 md:py-32 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We make influencer marketing simple and effective for both brands and creators.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* For Brands */}
            <div id="for-brands" className="scroll-mt-20">
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">For Brands</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Tell Us Your Goals</h4>
                      <p className="text-sm text-muted-foreground">
                        Share your campaign objectives, target audience, and budget.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Get Matched</h4>
                      <p className="text-sm text-muted-foreground">
                        We connect you with creators who align with your brand values.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Launch & Grow</h4>
                      <p className="text-sm text-muted-foreground">
                        Execute authentic campaigns that drive real results.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* For Creators */}
            <div id="for-creators" className="scroll-mt-20">
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-chart-1/10 flex items-center justify-center mb-4">
                    <Sparkles className="h-6 w-6 text-chart-1" />
                  </div>
                  <CardTitle className="text-2xl">For Creators</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-chart-1/10 flex items-center justify-center text-sm font-semibold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Share Your Profile</h4>
                      <p className="text-sm text-muted-foreground">
                        Tell us about your niche, audience, and creative style.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-chart-1/10 flex items-center justify-center text-sm font-semibold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Get Opportunities</h4>
                      <p className="text-sm text-muted-foreground">
                        Receive brand partnership offers that match your content.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-chart-1/10 flex items-center justify-center text-sm font-semibold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Grow Your Influence</h4>
                      <p className="text-sm text-muted-foreground">
                        Build your brand with exclusive partnerships and support.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 md:py-32">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">What We Offer</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for successful influencer marketing campaigns.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Curated Matches</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We carefully match brands with creators based on values, audience, and campaign goals.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Megaphone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Campaign Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  End-to-end support from strategy to execution, ensuring smooth collaboration.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Performance Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Detailed analytics and insights to measure campaign success and ROI.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-chart-1/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-chart-1" />
                </div>
                <CardTitle>Growth Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Resources and guidance to help creators expand their reach and influence.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-chart-1/10 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-chart-1" />
                </div>
                <CardTitle>Exclusive Brands</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access to premium brand partnerships and exclusive collaboration opportunities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-chart-1/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-chart-1" />
                </div>
                <CardTitle>Strategic Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Expert consultation to develop campaigns that resonate with target audiences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Breakdown Section */}
      <ServicesBreakdownSection />

      {/* Process Timeline Section */}
      <ProcessTimelineSection />

      {/* Social Proof Section */}
      <SocialProofSection />

      {/* FAQ Section */}
      <FaqSection />
    </>
  );
}
