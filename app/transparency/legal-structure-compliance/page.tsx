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
          <h1>Official Statements</h1>

          <p>
            This page holds verified public statements and announcements issued
            by Shaker IMF.
          </p>

          <p>
            Statements are listed by date, headline, and brief summary, with an
            option to expand and view the full text of each announcement.
          </p>

          {/*
            Design note (intentional):
            No hero image is used on this page.
            Headlines and text-only presentation maintain a
            dignified, institutional, and authoritative tone.
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
