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
          <h1>Engagement Criteria</h1>

          <p>Shaker IMF considers engagement when national leadership:</p>

          <ul>
            <li>Makes an authorized, confidential request</li>
            <li>Is committed to public welfare and integrity</li>
            <li>Seeks stable pathways, not political gain</li>
            <li>Respects sovereign authority and confidentiality</li>
          </ul>

          {/*
            Photo suggestion (optional – future use):
            A simple symbolic graphic combining a shield and a globe,
            representing integrity, protection, and sovereignty.
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
