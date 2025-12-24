import { useEffect, useState } from "react";

export function useTopSentinel(sentinelId = "nav-sentinel") {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const el = document.getElementById(sentinelId);
    if (!el) return;

    // sentinel ভিউ থেকে বের হলেই atTop=false
    const io = new IntersectionObserver(
      ([entry]) => setAtTop(entry.isIntersecting),
      {
        root: null,
        threshold: 0, // 1px গেলেই ট্রিগার
        rootMargin: "0px 0px -100% 0px",
      }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [sentinelId]);

  return atTop; // true = একদম টপ, false = স্ক্রলড (fixed হবে)
}
