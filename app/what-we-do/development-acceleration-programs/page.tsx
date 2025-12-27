"use client";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/sections/Footer";
import dataJson from "@/data/data.json";

const data = dataJson;

export default function Page() {
  return (
    <>
      <Navbar {...data.navbar} />

      <main
        style={{ background: "#fff", padding: "120px 0", minHeight: "90vh" }}
      >
        <div className="container mx-auto prose lg:px-[220px]">
          <h1>Development Acceleration Programs</h1>

          <p>
            Beyond stabilization, Shaker IMF helps conceptualize strategies that
            enhance self-reliance: job creation, infrastructure, education
            opportunity, and systemic resilience — especially where poverty has
            been intergenerational.
          </p>

          {/*
            Photo suggestion (optional – future use):
            People collaborating over plans or community-focused
            initiatives. Avoid corporate stock imagery; use
            people-centric visuals that reflect cooperation
            and long-term development.
          */}
        </div>
      </main>

      {data.sections.map((section: any) =>
        section.type === "footer" ? (
          <Footer key={section.id} section={section} />
        ) : null
      )}
    </>
  );
}
