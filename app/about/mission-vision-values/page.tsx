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
          imageSrc="/images/about/mission.png"
          imageAlt="mission"
          title="Mission, Vision & Values"
          subtitle="A path leading into the light."
        />

        <div className="mb-20"></div>
        <div className="container mx-auto prose lg:px-[220px]">
          <h2>Mission</h2>
          <p>
            To support people and nations by helping stabilize economies, reduce
            poverty, and restore opportunity — especially for those who were
            forgotten or denied choice — without fees, without interest, without
            donations, and without interference.
          </p>

          <h2>Vision</h2>
          <p>
            A world where every human life is respected, every nation remains
            sovereign, and future generations are empowered to shape their own
            destiny with dignity.
          </p>

          <h2>Values</h2>

          <p>
            <strong>Service First:</strong> People matter more than systems.
          </p>

          <p>
            <strong>Sovereignty:</strong> Every country decides its own future.
          </p>

          <p>
            <strong>Integrity:</strong> Doing what is right, always.
          </p>

          <p>
            <strong>Neutrality:</strong> No political or ideological alignment
            in operations.
          </p>

          <p>
            <strong>Dignity:</strong> Every human deserves respect and
            opportunity.
          </p>

          <p>
            <strong>Accountability:</strong> Direct engagement, clear
            responsibility.
          </p>

          {/*
            Photo suggestion (optional – future use):
            An abstract image of light rising over a horizon
            or hands united across diverse backgrounds,
            symbolizing hope and unity.
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
