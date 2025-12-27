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
          <h1>Official Statements</h1>
          <p>\nVerified public statements listed by date.</p>
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
