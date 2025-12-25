import { Hero } from "../components/Hero";
import { TrustProof } from "../components/TrustProof";
import { CoreStrengths } from "../components/CoreStrengths";
import { WhyCloudPe } from "../components/WhyCloudPe";
import { GlobalInfrastructure } from "../components/GlobalInfrastructure";
import { WhatDrivesUs } from "../components/WhatDrivesUs";
import { UseCases } from "../components/UseCases";
import { LeadershipSection, CloudPartner, FlexibilitySection } from "../components/TrustSections";
import { CoreOfferings } from "../components/CoreOfferings";
import { Pricing } from "../components/Pricing";
import { FinalCTA } from "../components/FinalCTA";

export function Home() {
  return (
    <>
      <Hero />
      <TrustProof />
      <CoreStrengths />
      <WhyCloudPe />
      <GlobalInfrastructure />
      <WhatDrivesUs />
      <UseCases />
      <LeadershipSection />
      <CloudPartner />
      <FlexibilitySection />
      <CoreOfferings />
      <Pricing />
      <FinalCTA />
    </>
  );
}
