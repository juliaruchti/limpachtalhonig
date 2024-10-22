import { createApp } from "./config.js";

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

/* Wichtig! Diese Zeilen müssen immer am Schluss der Website stehen! */
app.listen(3010, () => {
  console.log(`Example app listening at http://localhost:3010`);
});
