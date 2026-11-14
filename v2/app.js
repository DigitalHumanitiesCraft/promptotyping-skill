// Renders arbeitsstand.md and writes a ticked item back through the local server.
// The Markdown subset is the one the file uses: one title, group headings, paragraphs,
// task items with an optional indented note, and inline code.

const DOC_URL = "arbeitsstand.md";
const REFRESH_MS = 4000;
const ITEM = /^- \[( |x)\] (.*)$/;

const root = document.getElementById("doc");
let shown = null;

function inline(text) {
  // Text goes in as text nodes, so nothing from the file is parsed as HTML.
  const out = document.createDocumentFragment();
  text.split(/(`[^`]+`)/).forEach((part) => {
    if (part.startsWith("`") && part.endsWith("`") && part.length > 2) {
      const code = document.createElement("code");
      code.textContent = part.slice(1, -1);
      out.append(code);
    } else if (part) {
      out.append(part);
    }
  });
  return out;
}

function element(tag, text, className) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.append(inline(text));
  return node;
}

function item(lineNo, checked, text, notes) {
  const li = document.createElement("li");
  li.classList.toggle("done", checked);
  const label = document.createElement("label");
  const box = document.createElement("input");
  box.type = "checkbox";
  box.checked = checked;
  box.addEventListener("change", () => save(li, box, lineNo, text));
  label.append(box, element("span", text, "text"));
  notes.forEach((note) => label.append(element("span", note, "note")));
  li.append(label);
  return li;
}

function render(markdown) {
  const lines = markdown.split(/\r?\n/);
  const nodes = [];
  let list = null;
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    const task = ITEM.exec(line);
    if (task) {
      const notes = [];
      while (i + 1 < lines.length && /^ {2,}\S/.test(lines[i + 1])) {
        i += 1;
        notes.push(lines[i].trim());
      }
      if (!list) {
        list = document.createElement("ul");
        nodes.push(list);
      }
      list.append(item(i - notes.length, task[1] === "x", task[2], notes));
      continue;
    }
    list = null;
    if (line.startsWith("# ")) nodes.push(element("h1", line.slice(2)));
    else if (line.startsWith("## ")) nodes.push(element("h2", line.slice(3)));
    else if (line.trim()) nodes.push(element("p", line.trim()));
  }
  const focused = document.activeElement;
  const focusIndex = focused && focused.type === "checkbox"
    ? [...root.querySelectorAll("input")].indexOf(focused)
    : -1;
  root.replaceChildren(...nodes);
  // Rebuilding the list would drop keyboard focus, so it returns to the same item.
  if (focusIndex >= 0) root.querySelectorAll("input")[focusIndex]?.focus();
}

async function load() {
  try {
    const response = await fetch(DOC_URL, { cache: "no-store" });
    if (!response.ok) throw new Error(String(response.status));
    const markdown = await response.text();
    if (markdown !== shown) {
      shown = markdown;
      render(markdown);
    }
  } catch {
    if (shown === null) {
      root.replaceChildren(element("p", "Der Arbeitsstand lässt sich nicht laden. Der Server läuft mit `python v2/serve.py`.", "state"));
    }
  }
}

async function save(li, box, lineNo, text) {
  li.querySelector(".error")?.remove();
  let message = "Nicht gespeichert. Der Server ist nicht erreichbar.";
  try {
    const response = await fetch("api/toggle", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ line: lineNo, text, checked: box.checked }),
    });
    if (response.ok) {
      li.classList.toggle("done", box.checked);
      shown = null;
      await load();
      return;
    }
    const data = await response.json().catch(() => ({}));
    message = "Nicht gespeichert. " + (data.error || "");
  } catch {
    // The message above already says what happened.
  }
  box.checked = !box.checked;
  li.querySelector("label").append(element("span", message, "error"));
}

await load();
setInterval(load, REFRESH_MS);
