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
          <h2 className="text-4xl mb-20 text-center">Our Vision</h2>

          <p>
            The vision of Shaker International Monetary Fund (Shaker IMF) is a
            world where no nation is trapped by debt, no community is held back
            by poverty, and leaderships are empowered to build stable, ethical,
            and sustainable futures for their people.
          </p>

          <p>
            Shaker IMF envisions a global system in which finance is used as a
            tool for service—not control—where economic, financial, and
            environmental challenges are addressed together, and where
            transparent, corruption-free cooperation enables nations and
            communities to rise with dignity.
          </p>

          <p>
            Guided by the belief that serving people is serving God, Shaker IMF
            seeks to help shape a planet where opportunity is shared, resilience
            is strengthened, and millions of lives are improved through justice,
            integrity, and compassion.
          </p>
        </div>
      </div>
      {data.sections.map((section) => {
        if (section.type === "footer") {
          return <Footer key={section.id} section={section} />;
        }
        return null;
      })}
    </>
  );
}
