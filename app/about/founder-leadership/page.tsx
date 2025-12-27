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
          <h1>Founder & Leadership</h1>

          <p>
            <strong>M. Shaker — Founder & Executive Chairman</strong>
          </p>

          <p>
            Shaker IMF is the vision of one man, M. Shaker, whose life’s purpose
            is to serve people — especially the forgotten children of God — with
            integrity, clarity, and direct engagement.
          </p>

          <p>
            Unlike traditional institutions, Shaker IMF is intentionally
            non-bureaucratic. The Founder works directly with leaders,
            eliminating intermediaries and administrative delay, so national
            problems get leadership-to-leadership focus.
          </p>

          <p>
            This institutional design reflects the belief that when one person
            acts with conviction and integrity, that influence can be multiplied
            — from one life, to many, to entire nations.
          </p>

          {/*
            Photo suggestion (optional – future use):
            A professional photograph of M. Shaker speaking with leaders
            or in a dignified office setting.
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
