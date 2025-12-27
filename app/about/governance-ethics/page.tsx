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
          <h1>Governance & Ethics</h1>

          <p>
            Shaker IMF is governed by a strict ethical framework that ensures
            the institution remains true to its core principles. Shaker IMF:
          </p>

          <ul>
            <li>Does not charge interest or fees.</li>
            <li>Does not accept donations.</li>
            <li>Does not seek profit or influence.</li>
            <li>Does not control or claim national resources.</li>
            <li>Does not interfere in politics.</li>
          </ul>

          <p>
            Governance is direct — accountability rests with the Founder’s
            decisions, not committees or hierarchies. Every engagement is rooted
            in respect for sovereignty, transparency of purpose, and the highest
            moral standards.
          </p>

          {/*
            Photo suggestion (optional – future use):
            An abstract graphic symbolizing ethics and balance,
            such as a balanced scale combined with a globe.
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
