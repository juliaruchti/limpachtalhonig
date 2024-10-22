import { createApp } from "./config.js";

const app = createApp({
  user: "misty_brook_9996",
  host: "bbz.cloud",
  database: "misty_brook_9996",
  password: "78c6000b38d329e232b91a86ea5c24cc",
  port: 30211,
});

/* Startseite */
app.get("/", async function (req, res) {
  res.render("start", {});
});

app.get("/impressum", async function (req, res) {
  res.render("impressum", {});
});

app.get("/produkte", async function (req, res) {
  res.render("produkte", {});
});

app.get("/ueber_uns", async function (req, res) {
  res.render("ueber_uns", {});
});

app.get("/warenkorb", async function (req, res) {
  res.render("warenkorb", {});
});

import handlebars from "handlebars";
handlebars.registerHelper("isActive", function (currentPage, page, options) {
  return currentPage === page ? options.fn(this) : options.inverse(this);
});

/* Wichtig! Diese Zeilen müssen immer am Schluss der Website stehen! */
app.listen(3010, () => {
  console.log(`Example app listening at http://localhost:3010`);
});
