import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FaqSection() {
  const brandFaqs = [
    {
      question: 'How do you select creators for brand partnerships?',
      answer: 'We use a comprehensive vetting process that evaluates audience authenticity, engagement rates, content quality, and brand alignment. Each creator is manually reviewed to ensure they meet our quality standards.',
    },
    {
      question: 'What is the typical campaign timeline?',
      answer: 'Most campaigns run between 2-8 weeks, depending on scope and objectives. After your initial consultation, we provide a detailed timeline with milestones and deliverables.',
    },
    {
      question: 'How is pricing determined?',
      answer: 'Pricing varies based on campaign scope, creator tier, content requirements, and duration. We provide transparent quotes during the consultation phase and work within your budget to maximize ROI.',
    },
    {
      question: 'Can I approve content before it goes live?',
      answer: 'Yes, we facilitate a review process where you can provide feedback on content drafts. We balance brand guidelines with creator authenticity to ensure the best results.',
    },
  ];

  const creatorFaqs = [
    {
      question: 'What are the requirements to join?',
      answer: 'We welcome creators with engaged audiences across various platforms. While follower count matters, we prioritize engagement rate, content quality, and niche expertise. Micro-influencers are encouraged to apply.',
    },
    {
      question: 'How do I get paid?',
      answer: 'Payment terms are negotiated for each partnership and outlined in your contract. We support various payment methods and ensure timely compensation for completed work.',
    },
    {
      question: 'Do I have to accept every brand offer?',
      answer: 'Absolutely not. You have full control over which partnerships you accept. We only present opportunities that align with your niche and values, and you decide what works for your audience.',
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer contract negotiation, creative guidance, performance analytics, and ongoing consultation. Our team is available to help you navigate partnerships and grow your creator business.',
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about working with Koda D.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Brand FAQs */}
          <div>
            <h3 className="text-2xl font-bold mb-6">For Brands</h3>
            <Accordion type="single" collapsible className="w-full">
              {brandFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`brand-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Creator FAQs */}
          <div>
            <h3 className="text-2xl font-bold mb-6">For Creators</h3>
            <Accordion type="single" collapsible className="w-full">
              {creatorFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`creator-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Still have questions?{' '}
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="text-primary hover:underline font-medium"
            >
              Get in touch with us
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
