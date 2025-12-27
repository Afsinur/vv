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
          <h1>How Partnership Works</h1>

          <ol>
            <li>Confidential Authorized Inquiry</li>
            <li>Initial Assessment</li>
            <li>Strategic Proposal</li>
            <li>Leader-to-Leader Alignment</li>
            <li>Implementation Support</li>
            <li>Exit Strategy to Self-Reliance</li>
          </ol>

          <p>
            Every engagement is confidential and honors sovereignty and
            leadership priority.
          </p>

          {/*
            Photo suggestion (optional – future use):
            A clean infographic illustrating a six-step partnership
            pathway using simple icons and an elegant, minimal design.
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
