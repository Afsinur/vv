import dataJson from "@/data/data.json";
import { NewsItem, PageData } from "@/types/content";
import Navbar from "@/components/navbar/Navbar";
import ServiceGrid from "@/components/sections/ServiceGrid";
import InstitutionalProfile from "@/components/sections/InstitutionalProfile";
import LatestStories from "@/components/sections/LatestStories";
import ImmigrationStatistics from "@/components/sections/ImmigrationStatistics";
import LeadershipProfile from "@/components/sections/LeadershipProfile";
import Footer from "@/components/sections/Footer";
import HeroIntro from "@/components/common/HeroIntro";

const data = dataJson as PageData;

export default function Page() {
  const homeStories: NewsItem[] = data.news.slice(0, 6);

  return (
    <>
      <Navbar {...data.navbar} />

      {data.sections.map((section) => {
        if (section.type === "serviceGrid") {
          return <ServiceGrid key={section.id} {...section} />;
        }

        return null;
      })}

      <div className="py-40 bg-white">
        <HeroIntro
          imageSrc="/images/home-page/home-page.png"
          imageAlt="home-page"
          title="Home Page"
          subtitle="A path leading into the light."
        />
      </div>

      {data.sections.map((section) => {
        if (section.type === "institutionalProfile") {
          return (
            <InstitutionalProfile
              key={section.id}
              title={section.title}
              description={section.description}
              image={section.image}
              values={section.values}
            />
          );
        }
        if (section.type === "latestStories") {
          return (
            <LatestStories
              key={section.id}
              title={section.title}
              items={homeStories}
              cta={section.cta}
            />
          );
        }
        if (section.type === "immigrationStatistics") {
          return <ImmigrationStatistics key={section.id} section={section} />;
        }
        if (section.type === "leadershipProfile") {
          return <LeadershipProfile key={section.id} section={section} />;
        }
        if (section.type === "footer") {
          return <Footer key={section.id} section={section} />;
        }
        return null;
      })}
    </>
  );
}
