export const metadata = {
  title: "История компании",
};

const items = [
  { year: "1997", title: "Основание", text: "Запуск первых проектов и формирование инженерной команды." },
  { year: "2001", title: "Расширение", text: "Открытие новых направлений работ и региональных филиалов." },
  { year: "2007", title: "Комплексные поставки", text: "Собственные цепочки поставок и логистика." },
  { year: "2012", title: "Стандарты качества", text: "Процедуры контроля, регламенты и обучение." },
  { year: "2018", title: "Сервис 24/7", text: "Круглосуточная поддержка и быстрые выезды." },
  { year: "2024", title: "Цифровизация", text: "Сквозная аналитика и прозрачное управление проектами." },
];

export default function Page() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="h2">История компании</div>
        <div className="panel pad">
          <div className="timeline">
            {items.map((it) => (
              <div key={it.year} className="tlItem">
                <div className="year">{it.year}</div>
                <div className="panel pad">
                  <div style={{ fontWeight: 950, marginBottom: 4 }}>{it.title}</div>
                  <div className="muted">{it.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

