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
          <h1>Contact</h1>

          <p>
            This contact form is reserved exclusively for institutional and
            authorized inquiries. All submissions are treated with strict
            confidentiality.
          </p>

          <form className="not-prose space-y-4 max-w-xl">
            <div>
              <label>Official Name</label>
              <input type="text" className="w-full border px-3 py-2" />
            </div>

            <div>
              <label>Institution</label>
              <input type="text" className="w-full border px-3 py-2" />
            </div>

            <div>
              <label>Title</label>
              <input type="text" className="w-full border px-3 py-2" />
            </div>

            <div>
              <label>Authorized Government Email</label>
              <input type="email" className="w-full border px-3 py-2" />
            </div>

            <div>
              <label>Purpose of Inquiry</label>
              <textarea className="w-full border px-3 py-2" rows={4}></textarea>
            </div>

            <button type="submit" className="border px-6 py-2 font-medium">
              Submit Inquiry
            </button>
          </form>

          {/*
            Design note:
            No hero image is intentionally used.
            The layout remains clean, restrained, and functional,
            reflecting institutional seriousness and confidentiality.
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
