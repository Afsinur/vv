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
          <h1>Confidentiality Policy</h1>

          <p>
            All communications with Shaker IMF are treated as confidential
            unless explicitly authorized for public release.
          </p>

          <p>
            This protects national interest, prevents misrepresentation, and
            preserves trust.
          </p>

          {/*
            Photo suggestion (optional – future use):
            A minimal, clean icon of a locked document,
            symbolizing confidentiality and trust.
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
