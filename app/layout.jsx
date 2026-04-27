import "./globals.css";
import { Header } from "./ui/Header";
import { Footer } from "./ui/Footer";

export const metadata = {
  title: {
    default: "БАЙКАЛ‑ГРУПП",
    template: "%s — БАЙКАЛ‑ГРУПП",
  },
  description: "Строительно‑инженерные работы. Проекты, контракты, вакансии, контакты.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

