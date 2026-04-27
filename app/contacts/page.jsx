export const metadata = {
  title: "Контакты",
};

import { ContactsClientForm } from "./ContactsClient";

export default function Page() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="card pad">
            <div className="grid2">
              <div className="panel pad">
                <div className="map" role="img" aria-label="Карта (демо)" />
              </div>
              <div className="panel pad">
                <h1 className="h1" style={{ marginBottom: 10 }}>
                  Контакты
                </h1>
                <div className="muted" style={{ marginBottom: 12 }}>
                  Общий отдел и приёмная
                </div>
                <div className="pillRow">
                  <a className="pill pillOn" href="tel:+78001234567">
                    8 (800) 123‑45‑67
                  </a>
                  <a className="pill" href="mailto:info@baikal-group.local">
                    info@baikal-group.local
                  </a>
                </div>
                <div style={{ height: 12 }} />
                <div className="muted">
                  Адрес: г. Иркутск, ул. Примерная, 1
                  <br />
                  Время работы: Пн‑Пт 09:00‑18:00
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="h2">Обратная связь</div>
          <div className="panel pad">
            <ContactsClientForm />
          </div>
        </div>
      </section>
    </>
  );
}

