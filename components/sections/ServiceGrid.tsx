"use client";

import {
  ServiceGridSection,
  Breakpoint,
  ServiceGridTile,
} from "@/types/content";
import { TILE_COMPONENTS } from "@/components/serviceGrid/tileRegistry";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

/* ===== BREAKPOINT HELPER ===== */
function getBreakpoint(): Breakpoint {
  if (typeof window === "undefined") return "desktop";
  if (window.innerWidth < 640) return "mobile";
  if (window.innerWidth < 1024) return "tablet";
  return "desktop";
}

/* ===== GRADIENT STYLE RESOLVER ===== */
function resolveTileGradient(tile: ServiceGridTile): React.CSSProperties {
  if (tile.background?.gradient) {
    return {
      background: tile.background.gradient,
    };
  }

  // fallback
  return {
    background: "linear-gradient(135deg,#003F9E,#001E57)",
  };
}

export default function ServiceGrid(section: ServiceGridSection) {
  const [bp, setBp] = useState<Breakpoint>("desktop");

  useEffect(() => {
    const update = () => setBp(getBreakpoint());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const cols = section.grid.columns[bp] ?? 1;
  const rowHeight = section.metrics.rowHeight[bp] ?? 240;
  const gap = section.metrics.gap ?? 24;

  return (
    <section className="py-12 bg-[#061733]">
      <div className="container mx-auto">
        <div
          className="relative"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gridAutoRows: `${rowHeight}px`,
            gap,
            gridAutoFlow: "dense",
          }}
        >
          {/* ===== DEBUG GRID OVERLAY ===== */}
          {section.debug?.showGrid && (
            <div
              className="absolute inset-0 z-20 pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(255,255,255,0.25) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255,255,255,0.25) 1px, transparent 1px)
                `,
                backgroundSize: `${100 / cols}% ${rowHeight}px`,
              }}
            />
          )}

          {/* ===== TILES ===== */}
          {section.tiles.map((tile) => {
            const colStart = tile.placement?.colStart?.[bp];
            const colSpan = tile.placement?.colSpan?.[bp] ?? 1;
            const rowStart = tile.placement?.rowStart?.[bp];
            const rowSpan = tile.placement?.rowSpan?.[bp] ?? 1;

            const defaultKey = tile.hoverSwap?.default ?? "default";
            const hoverKey = tile.hoverSwap?.hover ?? "hover";

            const DefaultComponent =
              TILE_COMPONENTS[defaultKey] ?? TILE_COMPONENTS.default;
            const HoverComponent =
              TILE_COMPONENTS[hoverKey] ?? TILE_COMPONENTS.hover;

            return (
              <Link
                key={tile.id}
                href={tile.href}
                style={{
                  gridColumn: colStart
                    ? `${colStart} / span ${colSpan}`
                    : `span ${colSpan}`,
                  gridRow: rowStart
                    ? `${rowStart} / span ${rowSpan}`
                    : `span ${rowSpan}`,
                  ...resolveTileGradient(tile),
                }}
                className="
                  group relative z-10
                  rounded-2xl p-8
                  text-white overflow-hidden
                  transition-all duration-500 ease-out
                "
              >
                {/* ===== ABSOLUTE IMAGE LAYER ===== */}
                {tile.background?.image?.src && (
                  <Image
                    src={tile.background.image.src}
                    alt=""
                    fill
                    priority={false}
                    className="object-contain pointer-events-none"
                    style={{
                      opacity: tile.background.image.opacity ?? 0.4,
                      transform:
                        tile.background.image.transform ?? `translate(0, 0)`,
                    }}
                  />
                )}

                {/* ===== DEFAULT CONTENT ===== */}
                <div className="absolute inset-0 z-10 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-3">
                  <DefaultComponent tile={tile} />
                </div>

                {/* ===== HOVER CONTENT ===== */}
                <div className="absolute inset-0 z-10 opacity-0 translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  <HoverComponent tile={tile} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
