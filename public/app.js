function normPath(p) {
  if (!p) return "/";
  const u = new URL(p, window.location.origin);
  return u.pathname.replace(/\/+$/, "") || "/";
}

const current = normPath(window.location.pathname);
document.querySelectorAll("a.tab").forEach((a) => {
  const href = a.getAttribute("href");
  const target = normPath(href);
  if (target === current) a.setAttribute("aria-current", "page");
});

