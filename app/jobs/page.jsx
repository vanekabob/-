export const metadata = {
  title: "Работа у нас",
};

import { JobsClientForm } from "./JobsClient";

const jobs = [
  { title: "Инженер‑проектировщик", meta: "Опыт: 2+ года • офис/гибрид", tags: ["Проектирование", "AutoCAD"] },
  { title: "Монтажник", meta: "Опыт: 1+ год • вахта", tags: ["Монтаж", "ОТ и ТБ"] },
  { title: "Сервисный инженер", meta: "Опыт: 2+ года • разъездной", tags: ["Сервис", "ПНР"] },
  { title: "Менеджер проектов", meta: "Опыт: 3+ года • офис", tags: ["PM", "Сметы"] },
];

export default function Page() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <div className="h2">Работа у нас</div>
          <div className="grid2">
            {jobs.map((j) => (
              <article key={j.title} className="panel pad">
                <div style={{ fontWeight: 950 }}>{j.title}</div>
                <div className="muted" style={{ marginTop: 4 }}>
                  {j.meta}
                </div>
                <div style={{ height: 10 }} />
                <div className="pillRow">
                  {j.tags.map((t) => (
                    <span key={t} className="pill pillOn">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="h2">Откликнуться</div>
          <div className="panel pad">
            <JobsClientForm />
          </div>
        </div>
      </section>
    </>
  );
}

