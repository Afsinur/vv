"use client";
import HeroIntro from "@/components/common/HeroIntro";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/sections/Footer";
import dataJson from "@/data/data.json";

const data = dataJson;

export default function Page() {
  return (
    <>
      <Navbar {...data.navbar} />

      <main
        style={{
          background: "#fff",
          padding: "0 0 120px 0",
          minHeight: "90vh",
        }}
      >
        <HeroIntro
          imageSrc="/images/partnership/partnership.png"
          imageAlt="partnership"
          title="Countries We Serve"
          subtitle="A path leading into the light."
        />

        <div className="mb-20"></div>
        <div className="container mx-auto prose lg:px-[220px]">
          <p>
            Shaker IMF engages with nations where leadership has requested
            support to confront economic stress or structural hardship.
          </p>

          <p>
            Engagement is based on mutual respect, ethical clarity, and a shared
            commitment to improving {`people's`} lives.
          </p>

          {/*
            Photo suggestion (optional – future use):
            A world map with subtle emphasis on countries where
            Shaker IMF has engaged, once defined.
          */}
        </div>
        <div className="pb-40"></div>
      </main>

      {data.sections.map((section: any) =>
        section.type === "footer" ? (
          <Footer key={section.id} section={section} />
        ) : null
      )}
    </>
  );
}
