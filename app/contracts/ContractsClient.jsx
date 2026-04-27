"use client";

import { useMemo, useState } from "react";

const tags = ["Все", "Проектирование", "Поставка", "Монтаж", "Сервис"];

const contracts = [
  { id: "A‑102", region: "Иркутская обл.", term: "3 месяца", tags: ["Монтаж", "ПНР"] },
  { id: "B‑317", region: "Красноярский край", term: "5 месяцев", tags: ["Поставка", "Сервис"] },
  { id: "C‑044", region: "Якутия", term: "2 месяца", tags: ["Проектирование"] },
  { id: "D‑208", region: "Забайкалье", term: "6 месяцев", tags: ["Монтаж", "Поставка"] },
];

export function ContractsClient() {
  const [active, setActive] = useState("Все");

  const list = useMemo(() => {
    if (active === "Все") return contracts;
    return contracts.filter((c) => c.tags.includes(active));
  }, [active]);

  return (
    <section className="section">
      <div className="wrap">
        <div className="h2">Контракты</div>
        <div className="panel pad">
          <div className="pillRow" style={{ marginBottom: 10 }}>
            {tags.map((t) => (
              <button
                key={t}
                type="button"
                className={`pill ${t === active ? "pillOn" : ""}`}
                onClick={() => setActive(t)}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="muted" style={{ fontSize: 13 }}>
            Демо‑карточки. Скажи — подставлю реальные контракты из таблицы/Excel и сделаю поиск.
          </div>
        </div>

        <div style={{ height: 12 }} />

        <div className="grid2">
          {list.map((c) => (
            <article key={c.id} className="panel pad">
              <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap" }}>
                <div style={{ fontWeight: 950 }}>Контракт №{c.id}</div>
                <div className="muted" style={{ fontSize: 13 }}>
                  Регион: {c.region} • Срок: {c.term}
                </div>
              </div>
              <div style={{ height: 10 }} />
              <div className="pillRow">
                {c.tags.map((t) => (
                  <span key={t} className={`pill ${t === active || active === "Все" ? "pillOn" : ""}`}>
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

