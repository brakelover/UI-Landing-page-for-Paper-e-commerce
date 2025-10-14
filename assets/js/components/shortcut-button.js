export async function loadShortcutButton(wrapperSelector, { title, imgIcon }) {
  const res = await fetch("./components/shortcut-button.html");
  const html = await res.text();

  // Convert fetched HTML string to DOM elements
  const tempContainer = document.createElement("div");
  tempContainer.innerHTML = html;
  const template = tempContainer.querySelector("#shortcut_button_template");

  // Clone the template and populate it with data
  const node = template.content.cloneNode(true);
  node.querySelector("img").src = imgIcon;
  node.querySelector("span").textContent = title;

  document.querySelector(wrapperSelector).appendChild(node);
}
