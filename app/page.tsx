import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhatWeDo } from "@/components/sections/WhatWeDo";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <HowItWorks />
      <Contact />
    </>
  );
}
