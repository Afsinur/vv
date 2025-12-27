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
          <h1>Financial Stabilization Support</h1>

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
      </main>

      {data.sections.map((section: any) =>
        section.type === "footer" ? (
          <Footer key={section.id} section={section} />
        ) : null
      )}
    </>
  );
}
