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
          <h1>Press & Media</h1>

          <p>
            This page provides access to official press releases, media kits,
            authorized quotes, and guidelines for media engagement related to
            Shaker IMF.
          </p>

          <p>
            All materials are intended to support accurate, responsible, and
            authorized representation of the institution.
          </p>

          {/*
            Photo suggestion (optional – future use):
            A classic microphone combined with a globe icon,
            symbolizing global communication and media integrity.
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
