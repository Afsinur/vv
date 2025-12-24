// /hooks/useStickyNav.ts
import { useEffect, useRef, useState } from "react";

type Opts = {
  threshold?: number; // when y <= threshold => top zone
  headroom?: boolean; // hide on down / show on up when fixed
  lenis?: any | null;
};

export function useStickyNav({
  threshold = 10,
  headroom = true,
  lenis = null,
}: Opts = {}) {
  const [scrolled, setScrolled] = useState(false); // fixed হবে?
  const [pinned, setPinned] = useState(true); // visible?
  const lastY = useRef(0);

  const getY = () =>
    Math.max(
      0,
      typeof window !== "undefined" ? window.scrollY || window.pageYOffset : 0
    );

  useEffect(() => {
    const onScroll = (y?: number) => {
      const currY = typeof y === "number" ? y : getY();
      const goingDown = currY > lastY.current;

      const isTop = currY <= threshold;
      setScrolled(!isTop); // টপে না থাকলে fixed
      if (isTop) {
        setPinned(true); // টপে গেলে সবসময় pinned = true (y = 0)
      } else if (headroom) {
        setPinned(!goingDown); // নিচে গেলে hide, উপরে গেলে show
      } else {
        setPinned(true);
      }

      lastY.current = currY;
    };

    if (lenis?.on && lenis?.off) {
      const cb = (e: any) => onScroll(e?.animatedScroll ?? e?.scroll);
      lenis.on("scroll", cb);
      onScroll(lenis?.animatedScroll ?? lenis?.scroll ?? getY());
      return () => lenis.off("scroll", cb);
    }

    let raf = 0;
    const handler = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => onScroll(getY()));
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, [threshold, headroom, lenis]);

  return { scrolled, pinned };
}
