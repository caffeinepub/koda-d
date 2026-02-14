import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BrandLeadForm } from './forms/BrandLeadForm';
import { CreatorLeadForm } from './forms/CreatorLeadForm';

export function LeadCapture() {
  const [activeTab, setActiveTab] = useState<string>('brand');

  return (
    <section id="apply" className="py-20 md:py-32 bg-muted/30 scroll-mt-16">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get Started Today</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're a brand looking to amplify your message or a creator ready to grow, we're here to help.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="brand" className="text-base py-3">
                I'm a Brand
              </TabsTrigger>
              <TabsTrigger value="creator" className="text-base py-3">
                I'm a Creator
              </TabsTrigger>
            </TabsList>

            <TabsContent value="brand">
              <BrandLeadForm />
            </TabsContent>

            <TabsContent value="creator">
              <CreatorLeadForm />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
