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
        <div className="container mx-auto prose">
          <h1>About Shaker IMF</h1>

          <p>
            Shaker International Monetary Fund (Shaker IMF) is a private
            international humanitarian initiative founded by M. Shaker as the
            expression of one person’s conviction that one person can help
            change nations and the world.
          </p>

          <p>
            Shaker IMF was created to serve people directly, without
            bureaucracy, without fees, without interest, and without claims to a
            nation’s resources — and to help restore dignity, stability, and
            opportunity where they have been lost or never given.
          </p>

          <p>
            This institution is guided by clarity of purpose and direct
            founder-led engagement with national leadership. Shaker IMF partners
            with authorized leaders on frameworks that honor sovereignty,
            dignity, and ethical responsibility.
          </p>

          {/* 
            Photo suggestion (optional – future use):
            A dignified portrait of M. Shaker in formal attire,
            with a subtle global/world-map background.
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
