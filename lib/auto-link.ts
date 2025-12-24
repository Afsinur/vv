export type Block = { type: string; html: string };
export type Rule = { term: string; href: string };

const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// শব্দগুলোর মাঝে ট্যাগ/স্পেস/nbsp—সব allow করি
const buildCrossTagPattern = (term: string) => {
  const words = term.split(/\s+/).map(escapeRegExp).filter(Boolean);
  if (!words.length) return "";
  const gap = "(?:\\s|&nbsp;|<[^>]+>)+";
  return words.join(gap);
};

export function autoLinkBlocks(
  blocks?: Block[],
  rules: Rule[] = [],
  options?: {
    className?: string;
    color?: string;
    targetBlank?: boolean;
  }
): Block[] {
  if (!Array.isArray(blocks)) return [];

  const {
    className = "underline underline-offset-2 decoration-2 text-blue-600 hover:text-blue-700",
    color = "#2563eb",
    targetBlank = true,
  } = options || {};

  // লম্বা টার্ম আগে—overlap কমাতে
  const sorted = [...rules].sort((a, b) => b.term.length - a.term.length);

  const protectAnchors = (html: string) => {
    const placeholders: string[] = [];
    const replaced = html.replace(/<a\b[\s\S]*?<\/a>/gi, (m) => {
      const token = `__A_LINK_${placeholders.length}__`;
      placeholders.push(m);
      return token;
    });
    return { replaced, placeholders };
  };

  const restoreAnchors = (html: string, placeholders: string[]) =>
    html.replace(/__A_LINK_(\d+)__/g, (_, i) => placeholders[Number(i)] || "");

  const linkOnce = (html: string, term: string, href: string) => {
    const pattern = buildCrossTagPattern(term);
    if (!pattern) return html;

    // প্রতিবার টার্ম প্রসেস করার আগে বিদ্যমান <a> প্রটেক্ট করি
    const { replaced, placeholders } = protectAnchors(html);

    const regex = new RegExp(pattern, "gi");
    const linked = replaced.replace(regex, (m) => {
      return `<a href="${href}" ${
        targetBlank ? 'target="_blank" rel="noopener noreferrer"' : ""
      } class="${className}" style="color:${color}">${m}</a>`;
    });

    return restoreAnchors(linked, placeholders);
  };

  return blocks.map((b) => {
    let html = b.html;
    for (const { term, href } of sorted) {
      if (!term || !href) continue;
      html = linkOnce(html, term, href);
    }
    return { ...b, html };
  });
}
