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
          imageSrc="/images/what-we-do/debt.png"
          imageAlt="debt"
          title="Debt Relief & Recovery Partnerships"
          subtitle="A path leading into the light."
        />

        <div className="mb-20"></div>
        <div className="container mx-auto prose lg:px-[220px]">
          <p>
            Debt burdens can trap nations in cycles of hardship. Shaker IMF
            partners with leadership to explore pathways out of debt stress that
            preserve sovereignty and protect citizens.
          </p>

          <p>
            These partnerships focus on long-term resilience, not dependency.
          </p>

          {/*
            Photo suggestion (optional – future use):
            A soft, symbolic graphic showing chains breaking gently
            over a globe, representing recovery and renewed stability.
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
