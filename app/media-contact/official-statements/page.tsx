
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
          <h1>Official Statements</h1>
          <p>\nVerified public statements listed by date.</p>
        </div>
      </main>
      {data.sections.map((section:any) =>
        section.type === "footer" ? <Footer key={section.id} section={section} /> : null
      )}
    </>
  );
}
