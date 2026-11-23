const STEPS = [
  { name: "1. Give it taste", body: "Install Taste Skill (tasteskill.dev) so Claude has actual design references and knows what good websites should look like. A collection of skills that improve how AI tools write frontend code, so the AI builds modern, premium designs. Shown in the video with 7.2k stars.", link: "https://tasteskill.dev", linkText: "tasteskill.dev" },
  { name: "2. Design skills", body: "Install Emil Kowalski's design skill (github.com/emilkowalski/skills, \"Skills for Designers and Engineers\", 57k stars in the video) and Impeccable, so it understands spacing, typography, hierarchy, motion and interaction design.", link: "https://github.com/emilkowalski/skills", linkText: "github.com/emilkowalski/skills" },
  { name: "3. Figma through MCP", body: "Connect Figma through MCP so Claude can work directly from your actual designs and your references, instead of guessing.", link: "https://www.figma.com", linkText: "figma.com" },
  { name: "4. Playwright", body: "Give it Playwright. The model visually inspects everything, tests it, fixes it, and keeps testing until everything is actually polished. The video shows a test run in Claude: 26 successes, 0 failures.", link: "https://playwright.dev", linkText: "playwright.dev" }
];

const COVERS = ["Spacing", "Typography", "Hierarchy", "Motion", "Interaction design"];

const grid = document.getElementById("steps");
for (const s of STEPS) {
  const card = document.createElement("article");
  card.className = "card";
  const h = document.createElement("h3");
  h.textContent = s.name;
  const p = document.createElement("p");
  p.textContent = s.body;
  const a = document.createElement("a");
  a.href = s.link;
  a.textContent = s.linkText;
  a.rel = "noopener";
  card.append(h, p, a);
  grid.appendChild(card);
}

const covers = document.getElementById("covers");
for (const c of COVERS) {
  const li = document.createElement("li");
  li.textContent = c;
  covers.appendChild(li);
}
