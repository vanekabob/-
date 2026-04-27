export const metadata = {
  title: "Главная",
};

function Metric({ n, t }) {
  return (
    <div className="kpi">
      <div className="kpiN">{n}</div>
      <div className="kpiT">{t}</div>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="card pad">
            <div className="grid2">
              <div className="panel pad" style={{ background: "transparent", border: "none" }}>
                <h1 className="h1">
                  Инженерные решения для строительства, промышленности и инфраструктуры
                </h1>
                <p className="muted" style={{ margin: "10px 0 14px" }}>
                  Проектирование, поставка, монтаж и сервис. Прозрачная коммуникация, контроль
                  качества и сроки — под договор.
                </p>
                <div className="pillRow">
                  <span className="pill pillOn">Проектирование</span>
                  <span className="pill">Поставка</span>
                  <span className="pill">Монтаж</span>
                  <span className="pill">Сервис</span>
                </div>
                <div style={{ height: 14 }} />
                <a className="btn" href="/contacts">
                  Оставить заявку
                </a>
              </div>

              <div className="panel pad">
                <div className="map" role="img" aria-label="Карта присутствия (демо)" />
                <div style={{ height: 10 }} />
                <div className="kpiRow">
                  <Metric n="120+" t="проектов в год" />
                  <Metric n="30+" t="регионов" />
                  <Metric n="24/7" t="поддержка" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="h2">Направления</div>
          <div className="grid2">
            <div className="panel pad">
              <div style={{ fontWeight: 950, marginBottom: 6 }}>Проектирование и обследование</div>
              <div className="muted">
                Предпроектные работы, расчёты, исполнительная документация и сопровождение экспертизы.
              </div>
              <div style={{ height: 10 }} />
              <div className="pillRow">
                <span className="pill pillOn">BIM/CAD</span>
                <span className="pill">Аудит</span>
                <span className="pill">Сметы</span>
              </div>
            </div>
            <div className="panel pad">
              <div style={{ fontWeight: 950, marginBottom: 6 }}>Монтаж, ПНР и сервис</div>
              <div className="muted">
                Монтажные работы, пуско‑наладка, регламент, аварийные выезды и SLA.
              </div>
              <div style={{ height: 10 }} />
              <div className="pillRow">
                <span className="pill pillOn">ПНР</span>
                <span className="pill">Сервис</span>
                <span className="pill">ОТ и ТБ</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="h2">Партнёры</div>
          <div className="panel pad">
            <div className="pillRow">
              <span className="pill">Партнёр №1</span>
              <span className="pill">Партнёр №2</span>
              <span className="pill">Партнёр №3</span>
              <span className="pill">Партнёр №4</span>
              <span className="pill">Партнёр №5</span>
              <span className="pill">Партнёр №6</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

