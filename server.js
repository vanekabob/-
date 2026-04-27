import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const publicDir = path.join(__dirname, "public");
app.use(express.static(publicDir));

const sendPage = (res, pageName) =>
  res.sendFile(path.join(publicDir, "pages", pageName));

app.get("/", (_req, res) => sendPage(res, "index.html"));
app.get("/history", (_req, res) => sendPage(res, "history.html"));
app.get("/contracts", (_req, res) => sendPage(res, "contracts.html"));
app.get("/jobs", (_req, res) => sendPage(res, "jobs.html"));
app.get("/contacts", (_req, res) => sendPage(res, "contacts.html"));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on http://localhost:${port}`);
});

