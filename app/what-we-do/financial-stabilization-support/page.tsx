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
          imageSrc="/images/what-we-do/financial.png"
          imageAlt="financial"
          title="Financial Stabilization Support"
          subtitle="A path leading into the light."
        />

        <div className="mb-20"></div>
        <div className="container mx-auto prose lg:px-[220px]">
          <p>
            Shaker IMF works with national leadership during times of fiscal and
            economic stress to help stabilize essential services, restore
            confidence, and protect people’s well-being.
          </p>

          <p>
            Support is tailored to each nation’s context and is guided by a
            commitment to dignity, sovereignty, and ethical clarity.
          </p>

          {/*
            Photo suggestion (optional – future use):
            A tasteful thematic graphic combining economy, people,
            and stability — such as interlocking hands over a
            subdued world map.
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
