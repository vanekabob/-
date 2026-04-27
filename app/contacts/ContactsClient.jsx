"use client";

export function ContactsClientForm() {
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
          <label htmlFor="phone">Телефон</label>
          <input id="phone" autoComplete="tel" placeholder="+7 ..." />
        </div>
      </div>
      <div style={{ height: 10 }} />
      <div>
        <label htmlFor="msg">Сообщение</label>
        <textarea id="msg" placeholder="Чем можем помочь?" />
      </div>
      <div style={{ height: 12 }} />
      <button className="btn" type="submit">
        Отправить
      </button>
      <div className="muted" style={{ marginTop: 10, fontSize: 13 }}>
        Если нужно — подключу отправку на email/Telegram.
      </div>
    </form>
  );
}

