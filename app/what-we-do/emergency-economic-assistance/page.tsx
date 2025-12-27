"use client";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/sections/Footer";
import dataJson from "@/data/data.json";

const data = dataJson;

export default function Page() {
  return (
    <>
      <Navbar {...data.navbar} />

      <main style={{ background: "#fff", padding: "80px 0" }}>
        <div className="container mx-auto prose">
          <h1>Emergency Economic Assistance</h1>

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
      </main>

      {data.sections.map((section: any) =>
        section.type === "footer" ? (
          <Footer key={section.id} section={section} />
        ) : null
      )}
    </>
  );
}
