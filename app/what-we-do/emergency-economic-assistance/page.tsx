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
          imageSrc="/images/what-we-do/emergency.png"
          imageAlt="emergency"
          title="Emergency Economic Assistance"
          subtitle="A path leading into the light."
        />

        <div className="mb-20"></div>
        <div className="container mx-auto prose lg:px-[220px]">
          <p>
            During acute crises — such as natural disasters, conflict shocks, or
            sudden fiscal collapse — Shaker IMF engages with leaders to
            coordinate swift economic support designed to protect people and
            preserve essential services until longer-term stabilization can be
            achieved.
          </p>

          {/*
            Photo suggestion (optional – future use):
            A subtle, symbolic image of sunlight breaking through
            clouds, representing hope and stability during crisis.
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
