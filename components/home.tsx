import { MantineProvider } from "@mantine/core";
import ComparisonTable from "./home-utils/comparison-table";
import Features from "./home-utils/features";
import Hero from "./home-utils/hero";
import HowItWorks from "./home-utils/how-it-works";
import Metric from "./home-utils/metric";
import SponsorHome from "./home-utils/sponsor-home";
import SupportHome from "./home-utils/support-home";

export default function Home() {
  return (
    <main>
      <MantineProvider>
        <Hero />
        <Metric />
        <Features />
        <HowItWorks />
        <ComparisonTable />
        <SponsorHome />
        <SupportHome />
      </MantineProvider>
    </main>
  );
}
