import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, FileText, Users, Rocket, BarChart } from 'lucide-react';

export function ProcessTimelineSection() {
  const steps = [
    {
      icon: FileText,
      title: 'Submit Application',
      description: 'Fill out our simple application form with your details, goals, and preferences. This helps us understand your needs.',
      duration: '5 minutes',
    },
    {
      icon: CheckCircle2,
      title: 'Review & Approval',
      description: 'Our team reviews your application within 24-48 hours. We verify information and assess fit for our network.',
      duration: '1-2 days',
    },
    {
      icon: Users,
      title: 'Onboarding Call',
      description: 'Schedule a consultation to discuss your objectives, expectations, and how we can best support your success.',
      duration: '30-45 minutes',
    },
    {
      icon: Rocket,
      title: 'Matching & Launch',
      description: 'We connect you with suitable partners and help launch your first campaign or collaboration with full support.',
      duration: '1-2 weeks',
    },
    {
      icon: BarChart,
      title: 'Ongoing Support',
      description: 'Receive continuous guidance, performance tracking, and optimization recommendations throughout your journey.',
      duration: 'Ongoing',
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From application to launch, here's what to expect when you join Koda D.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="relative">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-xl">
                            Step {index + 1}: {step.title}
                          </CardTitle>
                          <span className="text-sm text-muted-foreground font-medium">
                            {step.duration}
                          </span>
                        </div>
                        <CardContent className="p-0">
                          <p className="text-muted-foreground">{step.description}</p>
                        </CardContent>
                      </div>
                    </div>
                  </CardHeader>
                  {index < steps.length - 1 && (
                    <div className="absolute left-10 top-[4.5rem] w-0.5 h-6 bg-border" />
                  )}
                </Card>
              );
            })}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-accent/20 border-accent/50">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                <strong>What You'll Need:</strong> Basic information about your brand or creator profile, 
                contact details, social media handles, and a brief description of your goals. 
                For brands: campaign objectives and budget range. For creators: audience demographics and content samples.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
