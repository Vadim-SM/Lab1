// Особисті дані
const studentName = "Мусієнко Вадим"; // ⟵ ваші прізвище та ім'я
const group = "ІН-42/1";               // ⟵ ваша група
const emoji = "🎸";                  // ⟵ той самий емодзі, що в <h1>

// Проста генерація унікального ID сторінки (час + випадкова частина)
function generatePageId() {
  const ts = new Date().toISOString().replace(/[-:.TZ]/g, "");
  const rnd = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `LAB1-${ts}-${rnd}`;
}

function setBadge(id) {
  const el = document.getElementById("pageIdBadge");
  if (el) {
    el.textContent = `PageID: ${id}`;
    el.setAttribute("data-owner", studentName);
  }
}

function setAccentPreview() {
  const preview = document.querySelector(".accent-preview");
  const accent = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim();
  if (preview) {
    preview.textContent = accent || "—";
  }
}

function setCurrentYear() {
  const el = document.getElementById("currentYear");
  if (el) {
    el.textContent = new Date().getFullYear();
  }
}

// Зберегти ідентифікатор у localStorage як доказ унікальності сторінки
function savePageId(id) {
  try {
    localStorage.setItem("lab1.pageId", id);
  } catch (_) {
    // localStorage може бути недоступний, тоді просто пропускаємо
  }
}

function helloConsole(id) {
  console.log(`${emoji} Вітаю! Це моя ЛР1. Студент(ка): ${studentName}, група: ${group}. Унікальний ID: ${id}`);
}

document.addEventListener("DOMContentLoaded", () => {
  const id = generatePageId();
  setBadge(id);
  setAccentPreview();
  setCurrentYear();
  savePageId(id);
  helloConsole(id);
});