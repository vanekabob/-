# БАЙКАЛ‑ГРУПП — сайт на React + Next.js

Небольшой многостраничный сайт (как в вашем макете) на **React + Next.js**.

## Структура

- `app/layout.jsx` — общий layout (шапка/подвал)
- `app/page.jsx` — главная
- `app/*/page.jsx` — остальные страницы
- `app/globals.css` — общий дизайн/стили

## Запуск на Linux Mint

1) Установите Node.js (если ещё не установлен):

```bash
sudo apt update
sudo apt install -y nodejs npm
node -v
npm -v
```

2) В папке проекта установите зависимости:

```bash
cd "/home/vanek/Рабочий стол/images"
npm install
```

3) Запустите сайт:

```bash
npm run dev
```

Откройте в браузере `http://localhost:3000`.

## Страницы

- `/` — главная
- `/history` — история компании
- `/contracts` — контракты
- `/jobs` — работа у нас
- `/contacts` — контакты

## Продакшен-сборка (если нужно)

```bash
npm run build
npm start
```
