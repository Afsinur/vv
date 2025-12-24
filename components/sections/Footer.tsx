"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FooterSection,
  FooterColumn,
  FooterLink,
  SocialType,
} from "@/types/content";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const columnVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.45,
      ease: "easeOut",
    },
  }),
};

interface Props {
  section: FooterSection;
}

export default function Footer({ section }: Props) {
  const getIcon = (type: SocialType) => {
    if (type === "instagram") return <FaInstagram />;
    if (type === "facebook") return <FaFacebook />;
    if (type === "youtube") return <FaYoutube />;
    if (type === "x") return <FaXTwitter />;
    return null;
  };

  return (
    <footer
      style={{
        backgroundImage:
          "linear-gradient(515deg, #1f3b82 0%, #0f1f4a 45%, #070f2b 100%)",
      }}
      className="relative text-white overflow-hidden"
    >
      {/* TOP */}
      <div className="max-w-[1280px] mx-auto px-10 pt-24 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-20 gap-y-14">
          {section.columns.map((col: FooterColumn, i) => (
            <motion.div
              key={col.title}
              custom={i}
              variants={columnVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h4 className="text-[15px] font-semibold mb-5">
                {col.title}
                <span className="block h-[2px] w-6 bg-yellow-400 mt-2" />
              </h4>

              <ul className="space-y-3 text-[14px] text-white/80">
                {col.links.map((link: FooterLink) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* CALL CENTER */}
          <motion.div
            custom={section.columns.length}
            variants={columnVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4 className="text-[15px] font-semibold mb-5">
              Call Center
              <span className="block h-[2px] w-6 bg-yellow-400 mt-2" />
            </h4>

            <div className="space-y-4 text-[14px] text-white/80">
              <p className="flex items-center gap-2">
                📞 {section.contact.phone}
              </p>
              <p className="flex items-center gap-2">
                ✉️ {section.contact.email}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/15" />

      {/* BOTTOM BAR */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
              delayChildren: 0.15,
            },
          },
        }}
        className="max-w-[1280px] mx-auto px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        {/* LEFT */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, ease: "easeOut" },
            },
          }}
          className="flex items-center gap-4"
        >
          <Image
            src={section.bottom.logo.src}
            alt={section.bottom.logo.alt}
            width={42}
            height={42}
          />
          <span className="text-[13px] text-white/80 leading-tight">
            REPUBLIC OF MALDIVES
          </span>
        </motion.div>

        <div className="gap-2 flex flex-col items-end">
          {/* RIGHT ICONS */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease: "easeOut" },
              },
            }}
            className="flex items-center gap-4"
          >
            {section.bottom.social.map(
              (s: { type: SocialType; href: string }) => (
                <Link
                  key={s.type}
                  href={s.href}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
                >
                  {getIcon(s.type)}
                </Link>
              )
            )}
          </motion.div>

          {/* COPYRIGHT */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease: "easeOut" },
              },
            }}
            className="text-[13px] text-white/70 text-center md:text-right"
          >
            {section.bottom.copyright}
          </motion.p>
        </div>
      </motion.div>
    </footer>
  );
}
