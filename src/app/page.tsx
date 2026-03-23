import Nav from '@/components/nav';
import Hero from '@/components/hero';
import Problem from '@/components/problem';
import HowItWorks from '@/components/how-it-works';
import Features from '@/components/features';
import SocialProof from '@/components/social-proof';
import AiTriage from '@/components/ai-triage';
import Comparison from '@/components/comparison';
import Pricing from '@/components/pricing';
import Pledge from '@/components/pledge';
import Faq from '@/components/faq';
import FinalCta from '@/components/final-cta';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <SocialProof />
      <AiTriage />
      <Comparison />
      <Pricing />
      <Pledge />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}
