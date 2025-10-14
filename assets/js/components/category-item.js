export async function loadCategoryItem(wrapperSelector, { title, img }) {
  const res = await fetch("./components/category-item.html");
  const html = await res.text();

  // Convert fetched HTML string to DOM elements
  const tempContainer = document.createElement("div");
  tempContainer.innerHTML = html;
  const template = tempContainer.querySelector("#category_item_template");

  // Clone the template and populate it with data
  const node = template.content.cloneNode(true);
  node.querySelector("img").src = img;
  node.querySelector("p").textContent = title;

  document.querySelector(wrapperSelector).appendChild(node);
}
