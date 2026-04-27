# БАЙКАЛ‑ГРУПП — сайт на Node.js

Небольшой многостраничный сайт (как в вашем макете) на **Node.js + Express**.

## Структура

- `server.js` — сервер Express
- `public/styles.css` — стили
- `public/app.js` — подсветка активной вкладки
- `public/pages/*.html` — страницы

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
npm start
```

Откройте в браузере `http://localhost:3000`.

## Режим разработки (автоперезапуск)

```bash
npm run dev
```

## Страницы

- `/` — главная
- `/history` — история компании
- `/contracts` — контракты
- `/jobs` — работа у нас
- `/contacts` — контакты
