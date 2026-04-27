"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/", label: "Главная" },
  { href: "/history", label: "История компании" },
  { href: "/contracts", label: "Контракты" },
  { href: "/jobs", label: "Работа у нас" },
  { href: "/contacts", label: "Контакты" },
];

export function Header() {
  const pathname = usePathname() || "/";

  return (
    <header className="topbar">
      <div className="wrap topbarInner">
        <div className="row">
          <Link className="brand" href="/">
            <span className="logo" aria-hidden="true" />
            <span>
              БАЙКАЛ‑ГРУПП
              <small>строительно‑инженерные работы</small>
            </span>
          </Link>

          <div className="spacer" />

          <a className="cta" href="tel:+78001234567">
            <span className="ctaIcon" aria-hidden="true">
              ☎
            </span>
            <span>
              <span style={{ display: "block", fontSize: 13, fontWeight: 800, opacity: 0.85 }}>
                Звонок бесплатный
              </span>
              <span style={{ fontWeight: 950 }}>8 (800) 123‑45‑67</span>
            </span>
          </a>
        </div>

        <nav className="tabs" aria-label="Навигация">
          {tabs.map((t) => {
            const active = t.href === "/" ? pathname === "/" : pathname.startsWith(t.href);
            return (
              <Link key={t.href} className={`tab ${active ? "tabActive" : ""}`} href={t.href}>
                {t.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

