import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Metrics } from '@/sections/Metrics';
import { Work } from '@/sections/Work';
import { Timeline } from '@/sections/Timeline';
import { Skills } from '@/sections/Skills';
import { Stack } from '@/sections/Stack';
import { Process } from '@/sections/Process';
import { Services } from '@/sections/Services';
import { Results } from '@/sections/Results';
import { Testimonials } from '@/sections/Testimonials';
import { Showreel } from '@/sections/Showreel';
import { Gallery } from '@/sections/Gallery';
import { ContactCTA } from '@/sections/ContactCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Metrics />
      <Work />
      <Timeline />
      <Skills />
      <Stack />
      <Process />
      <Services />
      <Results />
      <Testimonials />
      <Showreel />
      <Gallery />
      <ContactCTA />
    </>
  );
}
