export function Footer() {
  const y = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap">
        <div style={{ fontWeight: 950 }}>БАЙКАЛ‑ГРУПП</div>
        <div className="muted">© {y} Все права защищены.</div>
      </div>
    </footer>
  );
}

