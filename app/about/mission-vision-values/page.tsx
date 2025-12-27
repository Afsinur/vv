import dataJson from "@/data/data.json";
import { NewsItem, PageData } from "@/types/content";
import Navbar from "@/components/navbar/Navbar";
import ServiceGrid from "@/components/sections/ServiceGrid";
import InstitutionalProfile from "@/components/sections/InstitutionalProfile";
import LatestStories from "@/components/sections/LatestStories";
import ImmigrationStatistics from "@/components/sections/ImmigrationStatistics";
import LeadershipProfile from "@/components/sections/LeadershipProfile";
import Footer from "@/components/sections/Footer";

const data = dataJson as PageData;

export default function Page() {
  const homeStories: NewsItem[] = data.news.slice(0, 6);

  return (
    <>
      <Navbar {...data.navbar} />
      <div className="bg-white">
        <div className="py-40 container mx-auto space-y-6">
          <h2 className="text-4xl mb-20 text-center">Our Mission</h2>

          <h2>
            <strong>Mission and Strategic Purpose</strong>
          </h2>

          <p>
            Shaker International Monetary Fund (Shaker IMF) is a private,
            independent global humanitarian and development finance institution,
            founded on the belief that one individual with vision, integrity,
            and determination can change the world—again—and help make it a
            better place for millions. Shaker IMF mobilizes ethical private
            capital, innovative financial instruments, and strategic
            partnerships to support sustainable development, economic
            resilience, and human dignity worldwide. Our mission is aligned with
            the Sustainable Development Goals (SDGs) adopted by the United
            Nations, with particular focus on No Poverty (SDG 1), Decent Work
            and Economic Growth (SDG 8), Industry, Innovation and Infrastructure
            (SDG 9), Reduced Inequalities (SDG 10), Climate Action (SDG 13), and
            Partnerships for the Goals (SDG 17). Shaker IMF operates under a
            zero-tolerance, anti-corruption mandate, prioritizing transparency,
            accountability, and clean governance to ensure that financial
            resources serve people—regardless of geography, nationality,
            politics, or religion.
          </p>

          <p>
            Shaker IMF partners with debt-burdened and financially distressed
            nations to help them responsibly exit debt traps, stabilize their
            economies, and rebuild long-term national resilience. Through
            ethical private financing, development-linked funding, debt-relief
            structuring, and strict financial oversight, Shaker IMF supports
            national leadership in strengthening fiscal discipline, restoring
            investor confidence, and designing sustainable growth pathways. In
            parallel, Shaker IMF assists country leaderships in addressing
            interconnected financial, economic, environmental, and structural
            challenges, helping governments develop realistic, transparent, and
            resilient solutions while fully respecting national sovereignty and
            local priorities.
          </p>

          <p>
            At its core, the primary mission of Shaker IMF is to reduce poverty
            levels across the planet by correcting financial systems that
            perpetuate inequality and dependency. Shaker IMF finances
            initiatives that expand economic opportunity, support job creation,
            strengthen essential infrastructure, improve environmental
            resilience, and empower local economies. By working collaboratively
            with governments, humanitarian institutions, and responsible
            private-sector partners, Shaker IMF helps leaderships create
            conditions in which communities can rise out of poverty,
            inequalities are reduced, and nations progress toward stability,
            sustainability, and dignity for present and future generations.
          </p>

          <h2>
            <strong>What Makes Shaker IMF Different</strong>
          </h2>

          <p>
            What fundamentally distinguishes Shaker IMF from other international
            institutions is that Shaker IMF does not seek or accept fees, does
            not accept donations at any level or in any amount, does not charge
            interest, and does not pursue financial gain or benefit from its
            actions or partnerships with governments, NGOs, or the nations it
            serves. We are not here to do business. We are here to serve people.
            This principle is rooted in the founder’s belief that serving people
            is serving God, and it guides every decision, partnership, and
            mission undertaken by Shaker IMF.
          </p>
        </div>
      </div>

      <div className="bg-white">
        <div className="py-40 container mx-auto space-y-6">
          <h2 className="text-4xl mb-20 text-center">Our Vision</h2>

          <p>
            The vision of Shaker International Monetary Fund (Shaker IMF) is a
            world where no nation is trapped by debt, no community is held back
            by poverty, and leaderships are empowered to build stable, ethical,
            and sustainable futures for their people. Shaker IMF envisions a
            global system in which finance is used as a tool for service—not
            control—where economic, financial, and environmental challenges are
            addressed together, and where transparent, corruption-free
            cooperation enables nations and communities to rise with dignity.
            Guided by the belief that serving people is serving God, Shaker IMF
            seeks to help shape a planet where opportunity is shared, resilience
            is strengthened, and millions of lives are improved through justice,
            integrity, and compassion.
          </p>
        </div>
      </div>
      <div className="py-40 bg-white"></div>

      {data.sections.map((section) => {
        if (section.type === "footer") {
          return <Footer key={section.id} section={section} />;
        }
        return null;
      })}
    </>
  );
}
