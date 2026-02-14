import { Hero } from './components/marketing/Hero';
import { SiteHeader } from './components/marketing/SiteHeader';
import { SiteFooter } from './components/marketing/SiteFooter';
import { Sections } from './components/marketing/Sections';
import { LeadCapture } from './components/marketing/LeadCapture';
import { ContactSection } from './components/marketing/ContactSection';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Sections />
        <LeadCapture />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
