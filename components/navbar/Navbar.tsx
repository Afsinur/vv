"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { NavbarMenuItem, Navbar as NavbarType } from "@/types/content";
import { FiSearch, FiUser, FiChevronDown } from "react-icons/fi";

export default function Navbar({
  topBar,
  logo,
  items,
  actions,
}: NavbarType & {
  topBar?: {
    text: string;
    linkText: string;
    linkHref: string;
  };
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [navHeight, setNavHeight] = useState(0);

  const navRef = useRef<HTMLElement | null>(null);

  /* =========================
     FORCE STICKY (JS)
  ========================= */
  useEffect(() => {
    if (!navRef.current) return;

    setNavHeight(navRef.current.offsetHeight);
    const triggerPoint = navRef.current.offsetTop;

    const onScroll = () => {
      if (window.scrollY > triggerPoint) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* PLACEHOLDER (prevents layout jump) */}
      <div style={{ height: isFixed ? navHeight : 0 }} />

      <header
        ref={navRef}
        className={`w-full font-sans z-50 transition-shadow ${
          isFixed
            ? "fixed top-0 left-0 right-0 shadow-lg shadow-black/30"
            : "relative bg-[unset]"
        }`}
      >
        {/* TOP GOVERNMENT BAR */}
        {topBar && (
          <div className="bg-[#071A3A] text-white text-[14px] py-2 text-center border border-b border-b-gray-800">
            {topBar.text}{" "}
            <Link
              href={topBar.linkHref}
              className="underline hover:text-yellow-400"
            >
              {topBar.linkText}
            </Link>
          </div>
        )}

        {/* MAIN NAVBAR */}
        <div
          className={`text-white ${
            isFixed
              ? "bg-gradient-to-b from-[#0B1C3A] to-[#12274e]"
              : "bg-transparent"
          }`}
        >
          <div className="container mx-auto px-6 h-[112px] flex items-center justify-between">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3">
              {logo?.src && (
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={120}
                  className="object-contain translate-y-1/3"
                />
              )}

              {/* <span className="hidden md:block text-[36px] font-semibold tracking-wide">
                Shaker IMF
              </span> */}
            </Link>

            <div className="flex gap-8">
              {/* DESKTOP MENU */}
              <nav className="hidden lg:flex items-center gap-7 text-white text-sm font-medium">
                {items.map((item: NavbarMenuItem) =>
                  item.children ? (
                    <div key={item.label} className="relative group">
                      <button className="flex items-center gap-1 hover:text-yellow-400">
                        {item.label}
                        <FiChevronDown className="text-xs" />
                      </button>

                      {/* HOVER SAFE DROPDOWN */}
                      <div className="absolute left-0 top-full w-48 pt-3">
                        <div className="bg-white text-[#0A2249] rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                          <ul className="py-2">
                            {item.children.map((child) => (
                              <li key={child.label}>
                                {child.href && (
                                  <Link
                                    href={child.href}
                                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                                  >
                                    {child.label}
                                  </Link>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ) : (
                    item.href && (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="hover:text-yellow-400"
                      >
                        {item.label}
                      </Link>
                    )
                  )
                )}
              </nav>

              {/* ACTIONS */}
              <div className="flex items-center gap-4">
                {actions?.search && <FiSearch className="cursor-pointer" />}
                {actions?.profile && <FiUser className="cursor-pointer" />}

                {/* MOBILE MENU BUTTON */}
                <button
                  className="lg:hidden text-xl"
                  onClick={() => setMobileOpen(!mobileOpen)}
                >
                  ☰
                </button>
              </div>
            </div>
          </div>

          {/* MOBILE MENU */}
          {mobileOpen && (
            <div className="lg:hidden bg-[#0A2249] border-t border-white/10">
              {items.map((item, i) => (
                <div key={i} className="border-b border-white/10">
                  {item.href && (
                    <Link
                      href={item.href}
                      className="block px-6 py-4 text-sm"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}

                  {item.children && (
                    <div className="bg-[#081A39]">
                      {item.children.map((sub, j) => (
                        <Link
                          key={j}
                          href={sub.href ?? `#`}
                          className="block px-10 py-3 text-sm text-gray-300"
                          onClick={() => setMobileOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </header>
    </>
  );
}
