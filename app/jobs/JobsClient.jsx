"use client";

export function JobsClientForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Демо: отправка не настроена.");
      }}
    >
      <div className="grid2" style={{ gap: 10 }}>
        <div>
          <label htmlFor="name">Имя</label>
          <input id="name" autoComplete="name" placeholder="Иван" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" autoComplete="email" placeholder="name@example.com" />
        </div>
      </div>
      <div style={{ height: 10 }} />
      <div>
        <label htmlFor="msg">Сообщение</label>
        <textarea id="msg" placeholder="Коротко о вашем опыте и желаемой вакансии" />
      </div>
      <div style={{ height: 12 }} />
      <button className="btn" type="submit">
        Отправить
      </button>
      <div className="muted" style={{ marginTop: 10, fontSize: 13 }}>
        Если нужно — подключу отправку на email/Telegram или сохранение в базе.
      </div>
    </form>
  );
}

